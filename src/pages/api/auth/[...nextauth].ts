import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";


const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
         CredentialProvider({
            type: 'credentials',
            credentials: {
                username: {label: "Username", type: "text", placeholder: "Masukkan Username..."},
                password: {label: "password", type: "password", placeholder: "Masukkan password..."},
            },
            async authorize(credentials, req) {
                const res = await fetch('http://localhost:8080/api/route/admin/signin',
                {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password
                    })
                })

                const admin = await res.json();
                
                if (res.ok && admin){
                    return admin
                }
                return null
            
            },
         })
    ],
    pages: {signIn: '/'},
    callbacks: {
        jwt : ({ token, user, account }) => {
          if (account){
            token.acces = user.id
          }
          return token
        },
        session: ({session, token}) => {
            if (token){
                session.user.id = token.id
            }
            return session
        }
      },
      secret: process.env.JWT_SECRET,
}

export default NextAuth(authOptions);
