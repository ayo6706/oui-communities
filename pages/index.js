import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/Home.module.css'

import repotecc from '../public/assets/img/partners/repotecc.png';
import elite from '../public/assets/img/partners/elite.jpeg';
import gdsc from '../public/assets/img/partners/gdsc.png';
import hackclub from '../public/assets/img/partners/hackclub.png';
import gdsclogo from '../public/assets/img/partners/dsclogo.png';
import tecno from '../public/assets/img/partners/tecno.png';
import microsoft from '../public/assets/img/partners/microsoft.jpg';
import hultprize from '../public/assets/img/partners/IMG_3816.png';

import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <>
      <Head>
        <title>OUI COMMUNITIES</title>
        {/* <meta name="description" content="Repotecc it's a tech community. We'll help you get started with creative and innovative skills."/> */}
        <meta name="robots" content="index, follow" />
        {/* <link rel="icon" href="assets/img/repotecc app logo.png" /> */}
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/><link rel="canonical" href="https://repotecc.com/" />
      </Head>
      

      <header>
        <div className="container">

          <div className="row">
            <div className="col-12 text-center">
            <h1>OUI COMMUNITIES</h1>
            </div>
            </div>
        </div>
       
      </header>
      <main className="container">
      <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <Image src={hultprize} width={151} height={250}/>

            <div className="card-body">
              <h4>Hult Prize</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
           <Image src={tecno}  width={151} height={250}/>

            <div className="card-body">
              <h4>Tecno Campus Ambassadors </h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <a href="https://gdsc.community.dev/oduduwa-university-ipetumodu-osun-state/">
            <div className="card shadow-sm">
            <Image src={gdsclogo} width={151} height={250} />

              <div className="card-body">
                <h4>Google Developer Student Clubs</h4>
                <p className="card-text">GDSC OUI is focused on technological and career development events. </p>
                <div className="d-flex justify-content-between align-items-center">
                  
                </div>
              </div>
            </div>

          </a>
        </div>

        <div className="col">
          <a href="https://repotecc.com">
            <div className="card shadow-sm">
              <Image src={repotecc} width={151} height={250}/>

              <div className="card-body">
                <h4>Repotecc</h4>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  
                </div>
              </div>
            </div>
          </a>
        </div>





      
        <div className="col">

        <Link href="/elite">
          <div className="card shadow-sm">
          <Image src={elite} width={151} height={250} />

            <div className="card-body">
              <h4>Elite community</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>

          </Link>
        </div>



        <div className="col">

          <Link href="/hackclub">          
            <div className="card shadow-sm">
              <Image src={hackclub} width={151} height={250} />

              <div className="card-body">
                <h4>Hack Club</h4>
                <p className="card-text">The goal of Hack Club is to help you become a hacker but not the actual hacking 🤣🤣. </p>
                <div className="d-flex justify-content-between align-items-center">
                  
                </div>
              </div>
            </div>

          </Link>
        </div>
       

        <div className="col">
          <div className="card shadow-sm">
           <Image src={microsoft} width={151} height={250} />
            <div className="card-body">
              <h4>Microsoft Student Ambassadors</h4>
              <p className="card-text">More infos will be posted soon.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
      </main>
     
      
    </>
  )
}
