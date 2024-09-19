import BannerComponent from "@/components/bannerComponent/page";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Maryland Restaurant | Jaunt",
    description: "The Beautiful Maryland Restaurant",
  };
export default function Blog1(){
    
    return(
        <>
        <BannerComponent 
            Image = "/images/restaurant1.jpg" 
            text = "" />

        <h1 className="title">MARYLAND RESTAURANT CASTED!!</h1>
        
    <section id="about">
      <br />
      <div className="blogDetail"><p>Locate Your Next Fun stop! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p><br />

         <p>
            <Link href="/blog/0000001/ticket"><button>GET TICKETS</button></Link>
            <span><button>CONTACT</button></span>
         </p>
         </div>
         <br />

      <h4>BLOG!</h4> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p><br />
      <h4>CREDIBILITY OF EVENTS!</h4> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p><br />

         <center><Image src="/images/restaurant3.jpg" alt="window" className="blogimg" width={350} height={300} /> </center>
         <center><h3>PRIVATE RESTAURANT</h3></center>
      <br />
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