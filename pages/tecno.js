import React from 'react'
import Link from 'next/link'

export default function tecno() {
    return (
        <div>
           <main className="container">
  <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
    <div className="col-md-6 px-0">
      <h1 className="display-4 fst-italic">Tech Ambassadors</h1>
      <p className="lead my-3">brand Ambassadors</p>
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

        <p>Be part of the community that promotes tecno on-campus, get to win lots of goodies and opportunities  </p>
        <ul>
          <li>giveaways products from tecno</li>
          <li>internship</li>
          <li>lots more</li>
        </ul>
        <h4>To join send a DM to Damilare on whatsapp</h4>
        <a href="tel:09064677015">09064677015</a>
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
