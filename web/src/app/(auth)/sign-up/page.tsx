import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const metadata = {
  title: "Sign Up"
};

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = Boolean(session);

  if (isAuthenticated) redirect("/admin");

  return <p>SignUp</p>;
}

export { metadata };
