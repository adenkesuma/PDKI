import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";


const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
         CredentialProvider({
            id: "member-login",
            name: 'member',
            credentials: {
                username: {label: "Username", type: "text", placeholder: "Masukkan Username..."},
                password: {label: "password", type: "password", placeholder: "Masukkan password..."},
            },
            async authorize(credentials, req) {
                const res = await fetch(`http://localhost:8080/api/route/signin/member`,
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

                const user = await res.json();
                
                if (res.ok && user){
                    return user
                }
                return null
            
            },
         }),
         CredentialProvider({
            id: "admin-login",
            name: 'admin',
            credentials: {
                username: {label: "Username", type: "text", placeholder: "Masukkan Username..."},
                password: {label: "password", type: "password", placeholder: "Masukkan password..."},
            },
            async authorize(credentials, req) {
                const res = await fetch(`http://localhost:8080/api/route/signin/admin`,
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

                const user = await res.json();
                
                if (res.ok && user){
                    return user
                }
                return null
            
            },
         })
    ],
    pages: {signIn: '/'},
    callbacks: {
        jwt : ({ token, user, account }) => {
          if (account){
            token.access = user.id
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
      secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);
