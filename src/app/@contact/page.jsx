import Link from "next/link";

export default function Contact(){
    return(
        <>
    <section id="contact">
      <h1 className="title">CONTACT US NOW</h1>
        <div className="contactUs">
          <center>
            <input className="form" type="text" placeholder="Name" required=""  name="name" /><br />
            <input className="form" type="text" placeholder="Email Address" required=""  name="email" /><br />
            <input className="form" type="text" placeholder="Subject" required=""  name="subject" /><br />
            <textarea className="form" type="text" placeholder="Message" name="message" /><br />
            <button>SEND MESSAGE</button>
          </center>
        </div>
    </section>
    <br />
        </>
    )
}