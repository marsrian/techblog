import dbConnect from "@/libs/dbConnect";
import AllTech from "@/models/alltech";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;
    await dbConnect();
    const tech = await AllTech.findOne({ _id: id });
    return NextResponse.json({ tech }, { status: 200 });
  }