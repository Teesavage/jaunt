import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="nav" className="grid">
        <Image src="/images/jaunt-test-logo.png" alt="Logo" width="50" height="50" />
        <input type="text" placeholder="" />
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li><span>Sign In</span></li>
        </ul>


      </section>
      <h1>JAUNT</h1>
      <p>Locate Your Next Fun stop!</p>
      <Link href="/about">About</Link>
    </>
  
  
  );
}
