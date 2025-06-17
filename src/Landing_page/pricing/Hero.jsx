import React from 'react'

function Hero() {
    return (
         <div className="container">
      <div className="row ">
        <div className="text-center m-5 p-5 border-bottom ">
          <h1 className='fs-3'>Charges</h1>
          <p className="text-muted fs-5">List of all charges and taxes</p>
        </div>
        <div className="row">
        <div className="col-4 ">
          <img src="/media/pricing0.svg" alt="" />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.{" "}
          </p>
        </div>
        <div className="col-4">
          <img src="media/other-trades.svg" alt="" />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.{" "}
          </p>
        </div>
        <div className="col-4">
          <img src="/media/pricing0.svg" alt="" />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.{" "}
          </p>
        </div>
        </div>

      </div>
    </div>
    )
}

export default Hero
