"use client"
import Image from "next/image";
import Link from "next/link";
import Banner from "./@banner/page";
import Events from "./@events/page";
import Featured from "./@featured/page";
import HomeBlogPosts from "./@blogposts/page";
import HomeAbout from "./@about/page";
import Gallery from "./@gallery/page";
import Contact from "./@contact/page";

export default function Home() {


  return (
    
    <>
    <div>

    <Banner />
    <Events />
    <Featured />
    <HomeBlogPosts />
    <HomeAbout />
    <Gallery />
    <Contact /> 


    </div>
    </>
  
  );
}
