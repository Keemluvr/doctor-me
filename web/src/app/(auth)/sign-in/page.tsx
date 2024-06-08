import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const metadata = {
  title: "Sign In"
};

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = Boolean(session);

  if (isAuthenticated) redirect("/admin");

  return <p>SignIn</p>;
}

export { metadata };
