// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers'; // next/headers'ı kullanarak cookie'lere erişim

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const { userName, password } = formData;

  try {
    const response = await axios.post('https://service.rmosweb.com/security/createToken', {
      userName,
      password,
    });

    if (response.status === 200) {
      const token = response.data;

      // Cookie'yi ayarla (server-side)
      const cookieStore = cookies()
      cookieStore.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 , // 1 hafta
        path: '/',
      });

      return NextResponse.json({ success: true });
    }
  } catch (error: any) {
    let errorMessage = 'An error occurred';
    if (axios.isAxiosError(error) && error.response) {
      errorMessage = error.response?.data?.message || errorMessage;
    }
    return new NextResponse(errorMessage, { status: error.response?.status || 500 });
  }
}
