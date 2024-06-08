import { withAuth } from "next-auth/middleware";
import { authorizedProps } from "next-auth";

const callbacks = {
  authorized: ({ token }: authorizedProps) => token != null
};

const pages = {
  signIn: "/"
};

const authMiddleware = withAuth({
  callbacks,
  pages
});

export default authMiddleware;
