import dbConnect from "@/libs/dbConnect";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await dbConnect();
    const { username, email, password } = await req.json();
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) {
      return NextResponse.json(
        { message: "Username or email already exists" },
        { status: 500 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    return NextResponse.json({ message: "user registered" }, { status: 201 });
  } catch (error) {
    console.log("Error while registering user: ", error);
    return NextResponse.json(
        { message: "Error occured while registering the user." },
        { status: 500 }
      );
  }
}
