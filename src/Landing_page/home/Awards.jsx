
import React from 'react'

function Awards() {
    return (
       <div className='container mt-5'>
        <div className='row'>
            <div className="col-6">
            <img src="media/largestBroker.svg" alt="awards" />

            </div>
            <div className="col-6 p-5 mt-3">
                <h1>Largest stock broker in India</h1>
                <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes India daily by trading and investing in: </p>
              <div className="row p-5">
                <div className="col-6">
                    <ul>
                        <li><p>Futures and options</p></li>
                        <li><p>Commodity
                            derivatives  </p></li>
                        <li><p>Currency
                        derivatives</p></li>
                    </ul>
                </div>
                <div className="col-6">
                <ul>
                        <li><p>Stock & IPOs</p></li>
                        <li><p>Direct mutual Funds  </p></li>
                        <li><p>Bonds and Securiy </p></li>
                    </ul>
                </div>

              </div>
              <img src="media/pressLogos.png" alt="Presslogos" className='w-100 mx-auto' />
            </div>

        </div>

       </div>
    )
}

export default Awards
