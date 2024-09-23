import Link from "next/link";

export default function HomeAbout() {
    return(
        <>
    <section id="about">
      <h1 className="title">WHAT&apos;S JAUNT ALL ABOUT??</h1>
      <p>Locate Your Next Fun stop! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p><br />
      <h4>BLOG!</h4> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p><br />
      <h4>CREDIBILITY OF EVENTS!</h4> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p><br />
      <h4>FUN RATING/REVIEWS!</h4> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p><br />
      <h4>ULTIMATE GOAL IS TO HELP YOU HAVE FUN, CONNECT, ETC</h4>
      <p>GOT ANY QUESTIONS, COMPLAINTS OR FEEDBACK? <Link href="#contact">Contact Us Here.</Link></p>
      <br />
    </section>
        
        </>
    )
}