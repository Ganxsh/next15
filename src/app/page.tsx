import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (

     <>
     <div className="flex  flex-col items-center gap-7">
      <h1>Nextjs auth</h1>
      <>
      <Link className="underline" href={'/signIn'}><p>Sign in</p></Link>
      <Link  className="underline" href={'/createacc'}><p>Create account</p></Link></>
     </div>
     </>
  );
}
