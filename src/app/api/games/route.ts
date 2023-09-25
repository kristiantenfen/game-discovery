import api from "@/providers/rawg";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const { data } = await api.get("games", { params });
  return NextResponse.json(data);
}
