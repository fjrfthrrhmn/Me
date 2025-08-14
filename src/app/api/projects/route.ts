import { NextRequest, NextResponse } from 'next/server';
import data from '@/data/projects.json';

export async function GET(Request: NextRequest) {
  const params = Request.nextUrl.searchParams;

  const res = {
    message: 'Hello world',
    data,
  };

  return NextResponse.json(res);
}
