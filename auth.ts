import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./app/lib/utils";
import { User } from "./app/lib/models";

const login = async (credentials) => {
  try {
    connectToDB();

    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error("Wrong Email!");
    const isPasswordCorrect = credentials.password === user.password;
    if (!isPasswordCorrect) throw new Error("Wrong password!");
    return user;
  } catch (error) {
    console.log("Failed to login", error);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("Token from jwt", token);
      console.log("User from jwt", user);
      // if (profile) {
      //   token.username = profile.name;
      // }
      return token;
    },
    // async session({ session, token }) {
    //   if (token) {
    //     session.user.username = token.username;
    //   }
    //   console.log("Session from session", session);
    //   return session;
    // },
  },
});
