import dbConnect from "@/libs/dbConnect";
import AllTech from "@/models/alltech";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    name,
    author,
    photoTitle,
    category,
    description,
    comment,
    likes,
    views,
  } = await req.json();
  await dbConnect();
  await AllTech.create({
    name,
    author,
    photoTitle,
    category,
    description,
    comment,
    likes,
    views,
  });
  return NextResponse.json(
    { message: "Tech post create successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await dbConnect();
  const allTechs = await AllTech.find();
  return NextResponse.json({ allTechs });
}
