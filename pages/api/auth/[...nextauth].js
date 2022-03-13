
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      // console.log("session",session);
      // console.log("token", token);
      // console.log("user",user);
      return session
    }
  }
})

// session {
//   user: {
//     name: 'Rohit Maurya Official',
//     email: 'maurya.iitk@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a-/AOh14GjgXIPjn0DMt3YZ9S6G6E_rjTW926YuaPZeZh2SlQ=s96-c'
//   },
//   expires: '2022-04-08T09:11:41.718Z',
//   accessToken: undefined
// }