"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Test(){

    const { data: session } = useSession();
    return(
        <main>
            {session ? 
            <div>
                <button onClick={() => signOut()}>Sign out</button>

            </div>    
            :
            <button onClick={() => signIn('google')}>Sign in with google</button>
        }

            {session && 
                <div> {session?.user?.name}</div>
                
            }
        </main>
    )
}