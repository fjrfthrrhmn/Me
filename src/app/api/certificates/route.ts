import { NextResponse } from 'next/server';
import data from '@/data/certificates.json';

export async function GET() {
  const response = {
    data,
    message: 'Hello',
  };

  return NextResponse.json(response);
}
