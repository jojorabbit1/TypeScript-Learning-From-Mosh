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

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  //Validate the request body
  // if invalid , return 404
  // fetch the user with the given id
  // if doesn't exist , return 404
  //update the user
  // return the udate user

  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }

  if (id > 10) {
    return NextResponse.json(
      { error: "Invalid User Id | User Not Found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ id: 1, name: body.name });
}
