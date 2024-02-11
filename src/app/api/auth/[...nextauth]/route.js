import dbConnect from "@/libs/dbConnect";
import User from "@/models/userModel";
import nextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

async function login(credentials) {
  try {
    dbConnect();
    const user = await User.findOne({ email: credentials.email});
    if (!user) {
      throw new Error("wrong credentials");
    }
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) {
      throw new Error("wrong credentials");
    }
    return user;
  } catch (error) {
    console.log("error while logging in.");
    throw new Error("Something went wrong");
  }
}

export const authOptions = {
  // pages: {
  //   signIn: "/login",
  // },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw new Error("failed to login.");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       (token.username = user.username),
  //         (token.email = user.email),
  //         (token.id = user.id);
  //     }
  //     console.log("this the token = ", token);
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (token) {
  //       (session.user.username = token.username),
  //         (session.user.email = token.email),
  //         (session.user.id = token.id);
  //     }
  //     console.log("this the session = ", session);
  //     return session;
  //   },
  // },
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
