import Head from 'next/head';
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
        <title>#FindYourWayInTech | Repotecc</title>
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
              <h3>SOme kins</h3>
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
              <h3>SOme kins</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
           <Image src={gdsclogo} width={151} height={250} />

            <div className="card-body">
              <h3>Some kins</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <Image src={repotecc} width={151} height={250}/>

            <div className="card-body">
              <h3>SOme kins</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>





        <div className="col">
          <div className="card shadow-sm">
           <Image src={microsoft} width={151} height={250} />
            <div className="card-body">
              <h3>SOme kins</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src={elite} width={151} height={250} />

            <div className="card-body">
              <h3>SOme kins</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>



        <div className="col">
          <div className="card shadow-sm">
            <Image src={hackclub} width={151} height={250} />

            <div className="card-body">
              <h3>SOme kins</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
