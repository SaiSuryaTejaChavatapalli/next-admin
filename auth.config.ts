import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        console.log("NextUrl", request.nextUrl);
        const goToUrl = new URL("/dashboard", request.nextUrl);
        console.log("goToUrl", goToUrl);
        return Response.redirect(goToUrl);
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
