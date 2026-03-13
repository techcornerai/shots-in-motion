import { cookies } from "next/headers";

const COOKIE_NAME = "shots_admin_auth";

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === "granted";
}

export async function setAdminAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "granted", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

export async function clearAdminAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
