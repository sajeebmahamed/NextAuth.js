import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
export default function Home() {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <div>
      {!session && (
        <>
          Not Sign In
          <button onClick={signIn}> Sing in </button>
        </>
      )}
      {session && (
        <>
          Sing in as {session.user.name} <br />
          <div> Secret Page </div>
          <button>
            {" "}
            <Link href="/secret"> Go to Secret Page </Link>{" "}
          </button>
          <button onClick={signOut}> Sing Out </button>
        </>
      )}
    </div>
  );
}
