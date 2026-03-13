"use server";

import { redirect } from "next/navigation";
import { setAdminAuthCookie } from "@/lib/admin-auth";

export async function loginAdmin(formData: FormData) {
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    redirect("/admin/login?error=1");
  }

  await setAdminAuthCookie();
  redirect("/admin/galleries");
}
