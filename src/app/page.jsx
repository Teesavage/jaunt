import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="header" className="grid">
        <Image src="/images/jaunt-test-logo.png" alt="Logo" width="50" height="50" />
        <p className="headerName">JAUNT</p>
        <ul className="nav">
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><span>Get Started</span></li>
        </ul>
      </section>

      <section id="banner" className="grid">
        {/*HERO-IMAGE className="bannerImg"*/}
        <h1 className="bannerText">FIND YOUR NEXT EVENT/FUN-STOP!{/*ARROW FORWARD*/}</h1>
      </section>

      <section id="events" className="grid">
        <ul>
          <Link href=""><li className="eventsCard">CONCERTS</li></Link>
          <Link href=""><li className="eventsCard">FASHION</li></Link>
          <Link href=""><li className="eventsCard">SHOPPING</li></Link>
          <Link href=""><li className="eventsCard">CLUBBING</li></Link>
          <Link href=""><li className="eventsCard">PRIVATE EVENTS</li></Link>
          <Link href=""><li className="eventsCard">DINE IN & CHILL</li></Link>
          <Link href=""><li className="eventsCard">HANGOUTS/MEETUPS</li></Link>
          <Link href=""><li className="eventsCard">BEACH/POOL</li></Link>
          <Link href=""><li className="eventsCard">TOURISM</li></Link>
        </ul>
        <br />
        <input type="text" placeholder="SEARCH EVENTS" /><button>SEARCH</button>
      </section>

      <section id="featuredEvent" className="grid">
        <h1>FEATURED EVENT!</h1>
        <div className="featuredCard">
          {/*IMAGE*/}
          <h2>EVENT</h2>
          <p>DATE & TIME</p>
          <button>GO TO BLOG POST{/*ARROW UP-RIGHT*/}</button><button>GET TICKETS{/*ARROW UP-RIGHT*/}</button>
        </div>
        
        <div className="featuredDetails">
          <h2>WHY YOU MUST ATTEND EVENT</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, in expedita commodi 
            illum saepe distinctio tenetur possimus animi facilis harum quam accusamus? Quia illum 
            dolorum, asperiores at facere aliquam ducimus?</p>
        </div>
      </section>

      <section id="blog" className="grid">
        <h1>LATEST BLOG POSTS</h1>

        <div className="blogCard">
          {/*IMAGE*/}
          <h2>EVENT</h2>
          <p>How did the previous ones go and why all the hype??</p>
          <button>GO TO BLOG POST{/*ARROW UP-RIGHT*/}</button>
        </div>
        <div className="blogCard">
          {/*IMAGE*/}
          <h2>EVENT</h2>
          <p>Did the event really shutdown?</p>
          <button>GO TO BLOG POST{/*ARROW UP-RIGHT*/}</button>
        </div>
        <div className="blogCard">
          {/*IMAGE*/}
          <h2>EVENT</h2>
          <p>What the crowd had to say.</p>
          <button>GO TO BLOG POST{/*ARROW UP-RIGHT*/}</button>
        </div>
        <div className="blogCard">
          {/*IMAGE*/}
          <h2>EVENT</h2>
          <p>How did the previous ones go and why all the hype??</p>
          <button>GO TO BLOG POST{/*ARROW UP-RIGHT*/}</button>
        </div>
        <br />
        <Link href=""><button>VIEW MORE BLOG POSTS</button></Link>

      </section>

      <section id="about">
      <h1>WHAT'S JAUNT ALL ABOUT??</h1>
      <p>Locate Your Next Fun stop! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p>
      <p><h4>BLOG!</h4> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p>
      <p><h4>CREDIBILITY OF EVENTS!</h4> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p>
      <p><h4>FUN RATING/REVIEWS!</h4> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Illo consequatur voluptatum blanditiis dicta maiores rerum? Accusantium earum sunt et
         nulla mollitia amet consectetur optio id odit expedita, blanditiis minus a.</p>
      <p><h4>ULTIMATE GOAL IS TO HELP YOU HAVE FUN, CONNECT, ETC</h4></p>
      <p><h4>GOT ANY QUESTIONS, COMPLAINTS OR FEEDBACK? </h4><Link href="#contactUs">Contact Us Here.</Link></p>
      </section>

      <section id="gallery" className="grid">
      <h1>EVENTS GALLERY</h1>
      </section>

      <section id="contact">
      <h1>CONTACT US NOW</h1>
      </section>

      <section id="footer">
      <p>SOCIAL MEDIA ICONS</p>
      </section>




    </>
  
  
  );
}
