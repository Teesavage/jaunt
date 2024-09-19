import Image from "next/image";

export default function BannerComponent(props) {
    const bannerComponentImg = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        width: "100%",
        height: "auto",
        gridColumn: "1/5",
        position: "relative",
    }
    const bannerComponentText = {
        textAlign: "left",
        position: "absolute",
        top: "40%",
        left: "40%",
        transform: "translate(-50%, -40%)",
        color: "white",
        fontSize:"1.5rem",
        fontWeight:"bold",
    }
    return(
        <>
        <section id="banner" className="grid">
            <div style={bannerComponentImg}>
                <Image src={props.Image} alt="Banner" className="bannerImg" width="500" height="500" />
            </div>
            <div style={bannerComponentText}>
            {props.text}
            </div>
      </section>
        </>
    )
}