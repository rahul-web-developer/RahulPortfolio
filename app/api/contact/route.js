import sendMail from "../../../lib/senMail";

import { NextResponse as res } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
   const Ismail = await sendMail(body);

   if(!Ismail)
    return res.json({ success: true, message: "mail not sent successfully" }, { status: 500 });

    console.log(body)
    return res.json({ success: true, message: body }, { status: 200 });
  } catch (err) {
    console.error("Error handling GET request:", err);
    return res.json({ success: false, message: err.message }, { status: 500 });
  }
};
