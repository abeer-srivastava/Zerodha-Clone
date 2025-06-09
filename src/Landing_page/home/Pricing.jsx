import React from 'react'

function Pricing() {
    return (
       <div className="container p-5">
        <div className="row p-5">
            <div className="col-4">
                <h1 className='mb-5 fs-2' >Unbeatable pricing</h1>
                <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a className=" mx-3"href="">See Pricing</a> 
            </div>
            <div className="col-2"></div>
            <div className="col-6">
                <div className="row">
                    <div className="col p-2 border">
                    <h1 className='mb-3'>0Rs</h1>
                    <p> Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="col p-2 border">
                    <h1 className='mb-3'>20Rs</h1>
                    <p> Intraday and F&Q</p>
                    </div>
                </div>
            </div>
        </div>
       </div> 
    )
}

export default Pricing
