// app\api\login\route.ts
 
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "";

  if (!baseUrl) {
    return NextResponse.json({ error: "Base URL not defined" }, { status: 500 });
  }

  const { userName, password } = await request.json();

  try {
    const response = await axios.post(baseUrl, { userName, password });

    if (response.status === 200) {
      const token = response.data;

      cookies().set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      return NextResponse.json({ success: true });
    }
  } catch (error: any) {
    const errorMessage =
      axios.isAxiosError(error) && error.response
        ? error.response.data?.message || "An error occurred"
        : "An error occurred";

    return NextResponse.json({ error: errorMessage }, {
      status: error.response?.status || 500,
    });
  }
}
