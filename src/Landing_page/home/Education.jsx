import React from 'react'

function Education() {
    return (
        <div className="container p-5 mt-5">
        <div className="row p-5">
        <div className="col-6">
                
             <img src="media/education.svg" alt=""  className='w-100'/>   
            </div>
            <div className="col-6">
            <h1 className='mb-5 fs-2' >Free and open market education</h1>
                <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a className=" mx-3"href="">Varsity </a> 

                <p className='text-muted mb-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a className=" mx-3"href="">TradingQ&A</a> 
            </div>
        </div>
       </div> 
    )
}

export default Education
