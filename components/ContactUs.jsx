"use client";
import { Linkedin, Mail, PhoneCall } from "lucide-react";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import Card from "antd/es/card/Card";
import Link from "next/link";

const ContactUs = () => {
  const [form] = Form.useForm();
  const [load, setLoad] = useState(false);
  
  const handleFinish = async (values) => {
    try {
      setLoad(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      form.resetFields();
      message.success("Thanks for visiting our website, we will reach you soon!");
    } catch (error) {
      message.error("Please try later, something went wrong!");
    } finally {
      setLoad(false);
    }
  };

  return (
    <div
      id="contactus"
      className="w-full bg-[#ECF0F3] h-full flex items-center justify-center space-y-6 flex-col py-24 border-t"
    >
      {/* Heading */}
      <div className="flex justify-center flex-col gap-2 p-6 text-center">
        <h1 className="text-[#3C3E41] font-bold text-3xl md:text-5xl" style={{ letterSpacing: "2px" }}>
          Contact
        </h1>
      </div>
      
      <div className="w-full md:w-10/12 flex justify-center space-y-8">
        <div className="w-full flex gap-8 flex-col items-center md:flex-row">
          {/* Form Card */}
          <Card className="w-full md:w-8/12">
            <div className="h-full justify-center">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h1 className="text-[#F76FB1] text-2xl md:text-3xl capitalize font-semibold" style={{ letterSpacing: "1px" }}>
                    Just Say Hello!
                  </h1>
                  <p className="text-lg md:text-xl">Let us know more about you!</p>
                </div>

                <Form form={form} layout="vertical" onFinish={handleFinish} className="w-full md:w-10/12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Form.Item name="fullname" rules={[{ required: true, message: "Please enter your full name" }]} label={<label>Name</label>}>
                      <Input placeholder="Enter Fullname" style={{ borderRadius: "12px", padding: "12px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} />
                    </Form.Item>

                    <Form.Item name="mobile" rules={[{ required: true, message: "Please enter your phone number" }]} label={<label>Phone</label>}>
                      <Input placeholder="Contact number" style={{ borderRadius: "12px", padding: "12px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} />
                    </Form.Item>
                  </div>

                  <Form.Item name="email" rules={[{ required: true, message: "Please enter your email" }]} label={<label>Email</label>}>
                    <Input placeholder="Mail" style={{ borderRadius: "12px", padding: "12px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} />
                  </Form.Item>

                  <Form.Item name="message" rules={[{ required: true, message: "Please enter your message" }]}  label={<label>Message</label>}>
                    <Input.TextArea rows={3} placeholder="Message..." style={{ borderRadius: "12px", padding: "12px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} />
                  </Form.Item>

                  <Button className="w-full md:w-32 h-12 font-semibold p-4 rounded-full" loading={load} type="primary" htmlType="submit" style={{ height: "40px", borderRadius: "12px", fontSize: "18px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Card>

          {/* Contact Information Card */}
          <Card className="w-full md:w-6/12">
            <div className="flex flex-col space-y-9">
              <div>
                <h1 className="text-[#F86BAE] font-semibold text-2xl md:text-3xl">Contact Information</h1>
              </div>

              <div className="pt-9">
                <p>Behror Rajasthan</p>
                <p>PIN: 301709</p>
              </div>

              <div className="space-y-4">
                <p className="flex gap-2">
                  <PhoneCall />: +91 7014167069
                </p>
                <p className="flex gap-2">
                  <Mail />: rahul123techsunset@gmail.com
                </p>
              </div>

              <div>
                <Link href={'https://www.linkedin.com/in/rahul-44877b328/'}>
                <p className="text-lg md:text-xl font-semibold">Follow Me</p>
                <div className="flex gap-6 pt-6">
                  <div className="p-4 cursor-pointer rounded-lg" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                    <Linkedin />
                  </div>
                </div>
                  </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
