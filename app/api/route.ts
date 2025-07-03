import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/db";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'department', 'level', 'priority', 'request', 'subject', 'desc', 'employeeId'];
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const newContact = await db.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        department: data.department,
        level: data.level,
        priority: data.priority,
        request: data.request,
        subject: data.subject,
        desc: data.desc,
        employeeId: data.employeeId,
      }
    });

    console.log(`Message Sent successfully: ${newContact.id}`);
    
    return NextResponse.json({
      data: newContact,
      error: null,
    }, { status: 201 });

  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contacts = await db.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}