import Image from "next/image";
import Link from "next/link";

export default function TicketComponent(props) {
    const ticketBannerComponentImg = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        width: "100%",
        height: "auto",
        gridColumn: "1/5",
        position: "relative",
    }

    return(
        <>
        <section id="banner" className="grid">
            <div style={ticketBannerComponentImg}>
                <Image src={props.Image} alt="Banner" className="bannerImg" width="500" height="500" />
            </div>
          
        </section>
        <section id="ticket">
            <div className="ticket">
                <h1>{props.eventTitle}</h1>
                <br />
                
                <h2>DATE AND TIME</h2>
                <p>{props.eventTime}</p>
                <br />

                <h2>LOCATION</h2>
                <p><i className="bi bi-geo-alt"></i> {props.Location}</p>
                <br />

                <h2>ABOUT EVENT</h2>
                <p>{props.eventDescription}</p>
                <br />

                <h2>ORGANIZERS <Link href=""><i className="bi bi-telephone"></i></Link></h2>
                <p>{props.eventOrganizer}</p>
                <br />
            </div>

            <div id = "order">
                <p>PRICE: {props.eventTicketPrice}</p>
                <Link href={props.ticketLink}><button>GET TICKETS </button></Link>
            </div>

        </section>
        
        </>
    )
}