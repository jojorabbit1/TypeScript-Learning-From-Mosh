import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  //fetch data from db
  // if not found, retrun 404 error
  // else return data

  if (id > 10) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "Anuj" });
}
