import Image from "next/image";
import Link from "next/link";

export default function Banner() {
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
    return(
        <>
        <section id="banner" className="grid">
            <div style={bannerImg}>
                <Image src="/images/party1.jpg" alt="Banner" className="bannerImg" width="800" height="800" />
            </div>
            <div style={bannerText}>
            <div className="bannerText">FIND YOUR NEXT FUN STOP!</div>
            <div className="bannerText2"><br />YOU REALLY REALLY NEED TO GO OUT AND CHILL. <br />WE&apos;VE COMPILED THE PERFECT LOCATIONS FOR YOU!<br /></div>
                <Link href="#events"><button>&gt;&gt;&gt;</button></Link>
            </div>
      </section>
        </>
    )
}