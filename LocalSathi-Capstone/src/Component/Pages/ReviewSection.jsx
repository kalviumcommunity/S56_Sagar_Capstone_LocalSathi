import React from 'react'
import sampleimg from "../assets/sampleimg.jpg"
import sampleimg2 from "../assets/logo.png.png"

const ReviewSection = () => {

    
  return (
    <div>
      
      <div className='section-8' >
        <div className="sec-8-review-section">
          <h2>Travelers love our locals</h2>
          <p>What other guests say about our tours and locals</p>


          <div className='sec-8-review-card-flex' >

          
          <div className="sec-8-reviews">

            <div className="sec-8-review-card">
              <div className="sec-8-rating">review.rating</div>
              <p className='sec-7-star-rating' >4.8 ★★★★☆ 832 reviews</p>
              <h3>Amazing food tour with Big!</h3>
              <p>""Out group of 5 including 2 college aged kids had a great time doing a food tour with Big. He explained everything from the 7/11 to how taxi stands work along with all the food information and great tastings. He also gave us excellent history"</p>

              <div className='sec-8-reviewer' >
                <div>
                  <img src={sampleimg2} alt="Reviewer" />
                </div>
                <div>
                  <p>review.reviewerName</p>
                  <p>About local review.localName</p>
                  <p>review.date</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sec-8-reviews">

            <div className="sec-8-review-card">
              <div className="sec-8-rating">review.rating</div>
              <p className='sec-7-star-rating' >4.8 ★★★★☆ 832 reviews</p>
              <h3>Amazing food tour with Big!</h3>
              <p>""Out group of 5 including 2 college aged kids had a great time doing a food tour with Big. He explained everything from the 7/11 to how taxi stands work along with all the food information and great tastings. He also gave us excellent history"</p>

              <div className='sec-8-reviewer' >
                <div>
                  <img src={sampleimg2} alt="Reviewer" />
                </div>
                <div>
                  <p>review.reviewerName</p>
                  <p>About local review.localName</p>
                  <p>review.date</p>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ReviewSection
