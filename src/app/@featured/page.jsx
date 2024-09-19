"use client"
import Link from "next/link"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel";

export default function Featured(){
    return(
        <>
     <h1 className="title" id="marq"><marquee direction="left">FEATURED EVENTS / LOCATIONS</marquee></h1>
      <Carousel id="featuredEvent" 
        showThumbs={false} 
        showStatus={true}
        showIndicators={false}
        useKeyboardArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        >
        
        <div className="featuredCard">
          <Image src="/images/wedding.jpg" alt="chivido" className="featuredImg" width="300" height="300" />
          <h1>{/*EVENT*/}CHIVIDO 2024</h1>
          <div className="grid">
          <p>BALMORAL CONVENTION CENTER, VICTORIA ISLAND, LAGOS.</p>
          <p>27th NOVEMBER, 2024.<br />8:00AM<br /><span>400K-1M NGN </span></p>
          
          
        </div>
        
          <div className="grid"><button>GO TO BLOG</button><button>GET TICKETS</button></div>
        
        </div>

        <div className="featuredCard">
          <Image src="/images/gym1.jpg" alt="chivido" className="featuredImg" width="300" height="300" />
          <h1>{/*EVENT*/}CHIVIDO 2024</h1>
          <div className="grid">
          <p>BALMORAL CONVENTION CENTER, VICTORIA ISLAND, LAGOS.</p>
          <p>27th NOVEMBER, 2024.<br />8:00AM<br /><span>400K-1M NGN </span></p>
          
        </div>
        
          <div className="grid"><button>GO TO BLOG</button><button>GET TICKETS</button></div>
        
        </div>

        <div className="featuredCard">
          <Image src="/images/pool1.jpg" alt="chivido" className="featuredImg" width="300" height="300" />
          <h1>{/*EVENT*/}CHIVIDO 2024</h1>
          <div className="grid">
          <p>45A, ALAKIJA KUTI, VICTORIA ISLAND, LAGOS.</p>
          <p>OPEN MONDAYS - FRIDAY.<br />8AM-8PM<br /><span> FROM 50K NGN </span></p>
          
        </div>
        
          <div className="grid"><button>GO TO BLOG</button><button>GET TICKETS</button></div>
        
        </div>
        <div className="featuredCard">
          <Image src="/images/restaurant1.jpg" alt="chivido" className="featuredImg" width="300" height="300" />
          <h1>{/*EVENT*/}CHIVIDO 2024</h1>
          <div className="grid">
          <p>BALMORAL CONVENTION CENTER, VICTORIA ISLAND, LAGOS.</p>
          <p>27th NOVEMBER, 2024.<br />8:00AM<br /><span>400K-1M NGN </span></p>
          
        </div>
        
          <div className="grid"><button>GO TO BLOG</button><button>GET TICKETS</button></div>
        
        </div>
        <div className="featuredCard">
          <Image src="/images/beach1.jpg" alt="chivido" className="featuredImg" width="300" height="300" />
          <h1>{/*EVENT*/}CHIVIDO 2024</h1>
          <div className="grid">
          <p>BALMORAL CONVENTION CENTER, VICTORIA ISLAND, LAGOS.</p>
          <p>27th NOVEMBER, 2024.<br />8:00AM<br /><span>400K-1M NGN </span></p>
          
        </div>
        
          <div className="grid"><button>GO TO BLOG</button><button>GET TICKETS</button></div>
        
        </div>

        <div className="featuredCard">
          <Image src="/images/club1.jpg" alt="chivido" className="featuredImg" width="300" height="300" />
          <h1>{/*EVENT*/}CHIVIDO 2024</h1>
          <div className="grid">
          <p>BALMORAL CONVENTION CENTER, VICTORIA ISLAND, LAGOS.</p>
          <p>27th NOVEMBER, 2024.<br />8:00AM<br /><span>400K-1M NGN </span></p>
          
        </div>
        
          <div className="grid"><button>GO TO BLOG</button><button>GET TICKETS</button></div>
        
        </div>
      

        
      </Carousel>

        </>
    )
}

