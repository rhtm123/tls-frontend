
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { postData } from "../../../functions/auth";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {

    async signIn({ user, account, profile, credentials }) {
      
      // console.log("signIn")

      let r = (Math.random() + 1).toString(36).substring(7);
      let url = process.env.API_URL +`auth/users/`;
      let firstname = profile.given_name
      let lastname = profile.family_name
      let email = profile.email


      postData(url, {"password":r, "firstname":firstname, "lastname":lastname,"email":email})
        .then(data => {
          return true
        }).catch(error => {
          return true
      })

      return true
    }
    
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token from a provider.
    //   session.accessToken = token.accessToken;
    //   console.log("session",session);


    //   return session
    // },

    // async jwt({ token, user, account, profile, isNewUser }) {

    //   console.log("jwt", token);

    //   return token
    // }
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