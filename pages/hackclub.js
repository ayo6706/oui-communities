import React from 'react'
import Link from 'next/link'

export default function hackclub() {
    return (
        <div>
           <main className="container">
  <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
    <div className="col-md-6 px-0">
      <h1 className="display-4 fst-italic">Hack Club</h1>
      <p className="lead my-3">Tech community.</p>
      {/* <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p> */}
    </div>
  </div>

 

  <div className="row g-5">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        {/* From the Firehose */}
      </h3>

      <article className="blog-post">
        {/* <h2 className="blog-post-title">Sample blog post</h2>
        <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p> */}

        <p>Hack Clubs typically meet for 1.5 hours each week in high schools, makerspaces, community centers, churches, and any other venue where teenagers can gather. As a club leader, you get members (mostly beginners) started on something to learn/create, then members work at their own pace, building websites, apps, & games, and presenting them at the end.</p>
       
        <blockquote className="blockquote">
          <p>By the students, for the students.</p>
        </blockquote>
        <p>Learning to code is like gaining a superpower — turning you from a consumer of technology into a creator. It shouldn’t be taught like a class — it should be a creative, inclusive space. To foster this environment, every Hack Club is student-led & members make self-directed projects.</p>
        <h3>To join our whatsapp</h3>
        <a href="https://chat.whatsapp.com/CVMHeY863y0BGP8HoT8WdN"> https://chat.whatsapp.com/CVMHeY863y0BGP8HoT8WdN</a>

        </article>

    

     
      <nav className="blog-pagination" aria-label="Pagination">
        <hr/><Link className="btn btn-outline-primary" href="/">go back</Link>
        {/* <a className="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a> */}
      </nav>

    </div>

    <div className="col-md-4">
      
    </div>
  </div>

</main> 
        </div>
    )
}
