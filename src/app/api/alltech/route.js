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

// ChatGPT Code:
// export async function GET(req) {
//   await dbConnect();

//   const { page = 1 } = req.query;
//   const itemsPerPage = 5;

//   const skip = (page - 1) * itemsPerPage;
//   const allTechs = await AllTech.find().skip(skip).limit(itemsPerPage);

//   return NextResponse.json({ allTechs });
// }
