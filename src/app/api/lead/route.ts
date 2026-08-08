import { NextResponse } from "next/server";

type Lead = { name: string; email: string; company: string; teamSize: string; message?: string; submittedAt: string };
const leads: Lead[] = [];
function isValidEmail(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

export async function POST(request: Request) {
  let body: Partial<Lead>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 }); }
  const { name, email, company, teamSize, message } = body;
  if (!name || !email || !company || !teamSize) return NextResponse.json({ error: "name, email, company, and teamSize are required." }, { status: 400 });
  if (!isValidEmail(email)) return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  const lead: Lead = { name, email, company, teamSize, message, submittedAt: new Date().toISOString() };
  leads.push(lead); console.log("New enterprise lead received:", lead);
  return NextResponse.json({ success: true, message: "Thanks! Our team will reach out shortly." }, { status: 201 });
}
export async function GET() { return NextResponse.json({ count: leads.length, leads }); }
