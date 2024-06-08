import CredentialsProvider from "next-auth/providers/credentials";
import { Adapter } from "next-auth/adapters";
import { AuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { Auth } from "@/types/User";
import Session from "@/services/api/session";

export interface Context {
  params: { nextauth: string[] };
}

const ExpiresSessionIn = 30 * 24 * 60 * 60; // 30 days
const AuthKey = "credentials";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: ExpiresSessionIn
  },
  pages: {
    signIn: "/"
  },
  providers: [
    CredentialsProvider({
      name: AuthKey,
      credentials: {
        phone: { label: "phone", type: " text" },
        password: { label: "password", type: " password" }
      },

      async authorize(credentials) {
        const res = await Session.signIn(credentials as Auth.SignIn);
        const user = await res.json();
        if (user.error || res.status !== 200) return null;
        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...token
        }
      };
    }
  },
  events: {
    async signOut({ token }) {
      if (token.accessToken) {
        await Session.signUp(token.accessToken as string);
      }
    }
  }
};

export const authOptionsWrapper = (req: NextApiRequest, res: NextApiResponse) => {
  return [req, res, authOptions] as const;
};
