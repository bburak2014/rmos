import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const baseUrl: string | undefined = process.env.NEXT_PUBLIC_WEBSITE_URL;

  const { userName, password } = await request.json();

  try {
    const response = await axios.post(baseUrl ?? "", {
      userName,
      password,
    });

    if (response.status === 200) {
      const token = response.data;

      const cookieStore = cookies();
      cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60,
        path: "/",
      });

      return NextResponse.json({ success: true });
    }
  } catch (error: any) {
    const errorMessage =
      axios.isAxiosError(error) && error.response
        ? error.response.data?.message || "An error occurred"
        : "An error occurred";

    return new NextResponse(errorMessage, {
      status: error.response?.status || 500,
    });
  }
}
