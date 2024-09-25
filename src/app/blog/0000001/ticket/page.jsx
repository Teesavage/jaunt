import TicketComponent from "@/components/ticketComponent/page";
import Link from "next/link";

export const metadata = {
    title: "Ticket - Maryland Restaurant | Jaunt",
    description: "Get tickets to Maryland Restaurant, Lagos.",
  };
export default function Ticket(){
    return(
        <>
            <TicketComponent
            Image = "/images/restaurant1.jpg" 

            eventTitle = "DINE AND BANT AT MARYLAND RESTAURANT."

            eventTime = "24th November, 2024. 8:00pm."

            Location = "Beside Maryland Mall, Antony, Maryland, Lagos State, Nigeria."

            eventDescription = "This is a dope restaurant where you get to eat to your hearts content and gist and blah blah blah. This is gonna be a long description."

            eventOrganizer = "MARYLAND FOODS AND SERVICES, LAGOS STATE ASSOCIATION OF RESTAURANTS."

            eventTicketPrice = "FROM 15,000 NGN"

            ticketLink = "/blog/0000001/ticket/ticketcheckout" />

        </>
    )
}