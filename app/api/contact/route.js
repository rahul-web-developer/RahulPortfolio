import sendMail from "../../../lib/senMail";

import { NextResponse as res } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    await sendMail(body);

    return res.json({ success: true, message: body }, { status: 200 });
  } catch (err) {
    console.error("Error handling GET request:", err);
    return res.json({ success: false, message: err.message }, { status: 500 });
  }
};
