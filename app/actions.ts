"use server"

import { redirect } from "next/navigation"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // In a real application, you would use a service like Nodemailer or a third-party API
  // to send the email. For now, we'll just log the data.
  console.log("Sending email to sofu234@naver.com with the following data:")
  console.log({ name, email, phone, service, message })

  // This would be where you'd actually send the email
  // Example with EmailJS or similar service would go here

  // For demonstration purposes, we'll just redirect to a thank you page
  // In a real application, you would handle errors and success states
  redirect("/contact/thank-you")
}
