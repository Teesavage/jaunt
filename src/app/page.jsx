import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const bannerImg = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    width: "100%",
    height: "auto",
    gridColumn: "1/5",
    position: "relative",
}
const bannerText = {
    textAlign: "left",
    position: "absolute",
    top: "30%",
    left: "40%",
    transform: "translate(-50%, -50%)",
}
  return (
    <>
      <section id="header" className="grid">
        <Image src="/images/jaunt-test-logo.png" alt="Logo" className="logo" width="50" height="50" />
        {/*<h1 className="headerName">JAUNT</h1>*/}
        <ul className="nav">
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><span>Get Started</span></li>
        </ul>
      </section>

      <section id="banner" className="grid">
        <div style={bannerImg}>
          <Image src="/images/party1.jpg" alt="Banner" className="bannerImg" width="1500" height="1500" />
        </div>
        <div style={bannerText}>
          <div className="bannerText">FIND YOUR NEXT FUN STOP!</div>
          <Link href="#events"><button>&gt;&gt;&gt;</button></Link>
        </div>
      </section>

      <section id="events">
        <ul className="event grid">
          <Link href=""><li className="eventsCard">CONCERTS <br /><i className="bi bi-music-note-list eventIcons"></i></li></Link>
          <Link href=""><li className="eventsCard">FASHION <br /><i className="bi bi-person-standing-dress eventIcons"></i></li></Link>
          <Link href=""><li className="eventsCard">HANGOUTS / MEETUPS <br /><i className="bi bi-person-raised-hand eventIcons"></i></li></Link>
          <Link href=""><li className="eventsCard">BEACH / POOL <br /><i className="bi bi-water eventIcons"></i></li></Link>
          <Link href=""><li className="eventsCard">TOURISM <br /><i className="bi bi-airplane eventIcons"></i></li></Link>
          <Link href=""><li className="eventsCard">SHOPPING <br /><i className="bi bi-cart eventIcons"></i></li></Link>
          <Link href=""><li className="eventsCard">CLUBBING <br /><i className="bi bi-speaker eventIcons"></i></li></Link>
          <Link href=""><li className="eventsCard">PRIVATE EVENTS <br /><i className="bi bi-incognito eventIcons"></i></li></Link>
          <Link href=""><li className="eventsCard">DINE IN & CHILL <br /><i className="bi bi-chat-heart eventIcons"></i></li></Link>
          <Link href=""><li className="eventsCard">FITNESS <br /><i className="bi bi-activity eventIcons"></i></li></Link>
        </ul>
      </section>
      
      <section id="searchBar">
        <input type="text" placeholder="SEARCH EVENTS" />
        <button><i className="bi bi-search search" ></i></button>
        <br /><br />
      </section>

      <h1 className="title"><marquee direction="left">FEATURED EVENT THIS WEEK!</marquee></h1>
      <section id="featuredEvent">
        <div className="featuredCard">
          <Image src="/images/wedding.jpg" alt="chivido" className="featuredImg" width="1500" height="1500" />
          <h1>{/*EVENT*/}CHIVIDO 2024</h1>
          <div className="grid">
          <p>BALMORAL CONVENTION CENTER, VICTORIA ISLAND, LAGOS.</p>
          <p>MONDAY.<br /> 27th NOVEMBER, 2024.</p><br />
          
          </div>
        
        <div className="featuredDetails">
          <h2>WHY ATTEND?</h2>
          <p>The atmosphere of a wedding is one of excitement and emotion. 
             Everyone’s smiling and laughing, there’s love in the air, and 
             the joy is almost palpable. The uplifting energy is undeniable, 
             and it swells the hearts of everyone in attendance. 
             Reconnect with loved ones and meet new people.
             Join OBO and his babe to celebrate today!</p>
          <button>GO TO BLOG POST{/*ARROW UP-RIGHT*/}</button><button>GET TICKETS{/*ARROW UP-RIGHT*/}</button>
        </div>
        </div>
        <br />
      </section>

      <h1 className="title">LATEST BLOG POSTS</h1>
      <section id="blog" className="grid">

        <div className="blogCard">
          <Link href=""><h2>MARYLAND RESTAURANT CASTED??</h2>
          <p>How did the previous ones go and why all the hype??</p></Link>
        </div>
        <div className="blogCard">
          <Link href=""><h2>CLUB 6IX: WORTH ALL THE HYPE??</h2>
          <p>Did the club really shutdown? Hear what the real partygoers have to say.</p></Link>
        </div>
        <div className="blogCard">
          <Link href=""><h2>POLICE RAIDS QUILOX??!!</h2>
          <p>My own question is, why them steal azul???</p></Link>
        </div>
        <div className="blogCard">
          <Link href=""><h2>TOP 10 UNDERATED RESTAURANTS IN LAGOS</h2>
          <p>Here is a list of restaurants around Lagos that YOU should lookup.</p></Link>
        </div><br />
      </section>
      <center><Link href=""><button>VIEW MORE BLOG POSTS</button></Link></center>
      <br />

      <section id="about">
      <h1 className="title">WHAT'S JAUNT ALL ABOUT??</h1>
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

      <h1 className="title">EVENTS GALLERY</h1>
      <section id="gallery" className="grid">
      
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
