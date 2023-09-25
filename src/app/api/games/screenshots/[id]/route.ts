import api from "@/providers/rawg";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, route: { params: { id: string } }) {
  const { data } = await api.get(`games/${route.params.id}/screenshots`);
  return NextResponse.json(data);
}
