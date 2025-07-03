"use server"

import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
const prisma = new PrismaClient();
export async function addStaff(formData: FormData) {
  const first_name = formData.get("first_name") as string
  const last_name = formData.get("last_name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const department = formData.get("department") as string
  const position = formData.get("position") as string
  const hire_date = formData.get("hire_date") as string
  const salary = formData.get("salary") as string

  // Validate required fields
  if (!first_name || !last_name || !email || !department || !position || !hire_date) {
    throw new Error("Missing required fields")
  }

  try {
    await prisma`
      INSERT INTO staff (first_name, last_name, email, phone, department, position, hire_date, salary)
      VALUES (${first_name}, ${last_name}, ${email}, ${phone || null}, ${department}, ${position}, ${hire_date}, ${salary ? Number.parseFloat(salary) : null})
    `

    // Revalidate the department page to show new staff
    revalidatePath("/department")

    // Redirect to department page after successful addition
    redirect("/department")
  } catch (error: any) {
    if (error.code === "23505") {
      throw new Error("Email address already exists")
    }
    throw new Error("Failed to add staff member")
  }
}

export async function getStaff() {
  try {
    const staff = await prisma`
      SELECT * FROM staff 
      WHERE status = 'active' 
      ORDER BY department, last_name, first_name
    `
    return staff
  } catch (error) {
    console.error("Error fetching staff:", error)
    return []
  }
}
