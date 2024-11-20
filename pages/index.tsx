
// getServerSideProps - auth is available on page load

import { ContinueButton, LoggedIn, LoggedOut, HelloProvider } from "@hellocoop/nextjs/react"

export default function Home({auth}) {  
    return (
      <HelloProvider auth={auth}>
          <LoggedIn>
            <pre className="text-sm">
              {JSON.stringify(auth, null, 2)}
            </pre>
          </LoggedIn>
          <LoggedOut>
              <ContinueButton theme="aware-static" hover="flare" providerHint={['google','github','gitlab']} />
          </LoggedOut>
      </HelloProvider>
    )
}
export { getServerSideProps } from "@hellocoop/nextjs"

// client retrieves auth

// import { useAuth } from '@hellocoop/nextjs'
// import { ContinueButton, LoggedIn, LoggedOut } from "@hellocoop/nextjs/react"
// export default function Home() {  
//     const { auth } = useAuth()
//     return (
//         <>
//           <LoggedIn>
//             <pre className="text-sm">
//               {JSON.stringify(auth, null, 2)}
//             </pre>
//           </LoggedIn>
//           <LoggedOut>
//               <ContinueButton theme="aware-static" hover="flare" providerHint="google github gitlab" />
//           </LoggedOut>
//         </>
//     )
// }
