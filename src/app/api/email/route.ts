import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isValidEmail } from "@/utils/valid";

export async function POST(req: Request) {
  try {
    const parseBody = await req.json();

    if (!parseBody.email) {
      return NextResponse.json({ status: 400, message: "이메일을 입력해주세요." }, { status: 400 });
    }
    if (!isValidEmail(parseBody.email)) {
      return NextResponse.json(
        { status: 400, message: "올바른 이메일 형식이 아닙니다." },
        { status: 400 }
      );
    }
    if (!parseBody.content || parseBody.content.length < 10) {
      return NextResponse.json(
        { status: 400, message: "문의 내용을 10자 이상 작성해주세요." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_SEND_SITE,
      auth: {
        user: process.env.NEXT_PUBLIC_SEND_ADDRESS,
        pass: process.env.NEXT_PUBLIC_SEND_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SEND_ADDRESS,
      to: process.env.NEXT_PUBLIC_RECEIVE_ADDRESS,
      subject: `포트폴리오 사이트 문의 메일`,
      html: `<p>
        <div>포트폴리오 사이트에서 발송된 문의 메일입니다.</div>
        <div>이메일 : ${parseBody.email}</div>
        <div>내용 : ${parseBody.content}</div>
      </p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ status: 200, message: "메일 발송 완료" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: error.message }, { status: 500 });
  }
}
