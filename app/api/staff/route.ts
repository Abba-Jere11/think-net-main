import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const staff = await prisma`
      SELECT * FROM staff 
      WHERE status = 'active' 
      ORDER BY created_at DESC
    `

    return NextResponse.json({ staff })
  } catch (error) {
    console.error("Error fetching staff:", error)
    return NextResponse.json({ error: "Failed to fetch staff" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { first_name, last_name, email, phone, department, position, hire_date, salary } = body

    // Validate required fields
    if (!first_name || !last_name || !email || !department || !position || !hire_date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await prisma`
      INSERT INTO staff (first_name, last_name, email, phone, department, position, hire_date, salary)
      VALUES (${first_name}, ${last_name}, ${email}, ${phone}, ${department}, ${position}, ${hire_date}, ${salary})
      RETURNING *
    `

    return NextResponse.json({
      message: "Staff member added successfully",
      staff: result[0],
    })
  } catch (error: any) {
    console.error("Error adding staff:", error)

    // Handle unique constraint violation (duplicate email)
    if (error.code === "23505") {
      return NextResponse.json({ error: "Email address already exists" }, { status: 409 })
    }

    return NextResponse.json({ error: "Failed to add staff member" }, { status: 500 })
  }
}
