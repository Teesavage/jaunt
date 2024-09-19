import Link from "next/link";

export default function Events() {
    return(
        <>
     <section id="events">
        <ul className="event grids">
          <li className="eventsCard"><Link href="">CONCERTS <br /><i className="bi bi-music-note-list eventIcons"></i></Link></li>
          <li className="eventsCard"><Link href="">FASHION <br /><i className="bi bi-person-standing-dress eventIcons"></i></Link></li>
          <li className="eventsCard"><Link href="">HANGOUT <br /><i className="bi bi-person-raised-hand eventIcons"></i></Link></li>
          <li className="eventsCard"><Link href="">WATERS <br /><i className="bi bi-water eventIcons"></i></Link></li>
          <li className="eventsCard"><Link href="">TOURISM <br /><i className="bi bi-airplane eventIcons"></i></Link></li>
          <li className="eventsCard"><Link href="">SHOPPING <br /><i className="bi bi-cart eventIcons"></i></Link></li>
          <li className="eventsCard"><Link href="">CLUBBING <br /><i className="bi bi-speaker eventIcons"></i></Link></li>
          <li className="eventsCard"><Link href="">PRIVATE <br /><i className="bi bi-incognito eventIcons"></i></Link></li>
          <li className="eventsCard"><Link href="">DINE IN <br /><i className="bi bi-chat-heart eventIcons"></i></Link></li>
          <li className="eventsCard"><Link href="">FITNESS <br /><i className="bi bi-activity eventIcons"></i></Link></li>
        </ul>
      </section>

      <section id="searchBar">
        <input type="text" placeholder="SEARCH EVENTS" />
        <button> <i className="bi bi-search search" ></i></button>
        <br /><br />
      </section>
        </>
    )
}