import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
// import admin from "../../../utils/serverRoutes";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();
      session.user.uid = token.sub;

      // const db = admin.firestore();
      // if (!session) {
      //   return false; // add logging
      // }

      // const userRef = db.collection("users").doc(session.user.uid);
      // const record = await userRef.get();
      // if (!record.exists) {
      //   await userRef.set({
      //     provider: "google",
      //     version: "1.0",
      //   });
      // }

      return session;
    },
  },
};
export default NextAuth(authOptions);
