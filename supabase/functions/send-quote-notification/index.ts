// notify-resend/index.ts
import { serve } from "https://deno.land/std/http/server.ts"
import { Resend } from "npm:resend"

serve(async (req) => {
  const { record } = await req.json()

  const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

  try {
    const data = await resend.emails.send({
      from: "Ayawin Quotes <notifications@ayawin.com>",
      to: "your-email@example.com", // Replace with your real email
      subject: "New Quote Submitted",
      html: `
        <h2>New Quote Request from ${record.name}</h2>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Phone:</strong> ${record.phone}</p>
        <p><strong>Company:</strong> ${record.company}</p>
        <p><strong>Service:</strong> ${record.service}</p>
        <p><strong>Business Size:</strong> ${record.business_size}</p>
        <p><strong>Message:</strong> ${record.message}</p>
      `,
    })

    return new Response("Email sent", { status: 200 })
  } catch (err) {
    console.error("Failed to send email", err)
    return new Response("Email error", { status: 500 })
  }
})
