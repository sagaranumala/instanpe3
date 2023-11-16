import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
console.log(process.env.GOOGLE_ID);
export default NextAuth({
    providers:[
        GithubProvider({
      clientId:'eb9df4e7e3c0200a3e68',
      clientSecret:'7841d3dd909f10c66227cbd56e2ceac5040cd73d'
      }),
    GoogleProvider({
        clientId:'498723327898-lt2qd4mfkffiga73fb1sd3oks8f76msd.apps.googleusercontent.com',
        clientSecret:'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'
      })
],
})