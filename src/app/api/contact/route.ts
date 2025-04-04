import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json(
      { error: "All fields are required" }, 
      { status: 400 }
    );
  }

  return Response.json(
    {
      status: "success",
      msg: "Form submitted successfully",
    },
    { status: 200 }
  );
}

