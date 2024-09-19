import Link from "next/link";

export default function HomeBlogPosts() {
    return(
        <>
    <br />
    <h1 id="blogPost" className="title">BLOG POSTS</h1>

    <section id="blog" className="blogGrid">

    <Link href="/blog/0000001">
        <div className="blogCard">
          <h2>MARYLAND RESTAURANT CASTED??</h2>
          <p>How did the previous ones go and why all the hype??</p>
        </div>
    </Link>
    <Link href="">
        <div className="blogCard">
          <h2>CLUB 6IX: WORTH ALL THE HYPE??</h2>
          <p>Did the club really shutdown? Hear what the real partygoers have to say.</p>
        </div>
    </Link>
    <Link href="">
        <div className="blogCard">
          <h2>POLICE RAIDS QUILOX??!!</h2>
          <p>My own question is, why them steal azul???</p>
        </div>
    </Link>
    <Link href="">
        <div className="blogCard">
          <h2>TOP 10 UNDERATED RESTAURANTS IN LAGOS</h2>
          <p>Here is a list of restaurants around Lagos that YOU should lookup.</p>
        </div>
    </Link>
    <Link href="">
        <div className="blogCard">
          <h2>POLICE RAIDS QUILOX??!!</h2>
          <p>My own question is, why them steal azul???</p>
        </div>
    </Link>
    <Link href="">
        <div className="blogCard">
          <h2>TOP 10 UNDERATED RESTAURANTS IN LAGOS</h2>
          <p>Here is a list of restaurants around Lagos that YOU should lookup.</p>
        </div>
    </Link><br />
    </section>
      
    <center><Link href="/blog"><button>VIEW MORE BLOG POSTS</button></Link></center>
    <br />

        
        </>
    )
}