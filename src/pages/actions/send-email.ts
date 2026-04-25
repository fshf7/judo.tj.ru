import type { APIRoute } from "astro";
// import { sendEmail } from "../../utils/email";

export const prerender = true;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name") as string | null;
  const phone = formData.get("phone") as string | null;
  const email = formData.get("email") as string | null;

  console.log(name, phone, email);

  //   const subject = formData.get("subject") as string | null;
  //   const message = formData.get("message") as string | null;

  //   if (!to || !subject || !message) {
  //     throw new Error("Missing required fields");
  //   }

  //   try {
  //     const html = `<div>${message}</div>`;
  //     await sendEmail({ to, subject, html });
  //   } catch (error) {
  //     throw new Error("Failed to send email");
  //   }

  return redirect("/");
};
