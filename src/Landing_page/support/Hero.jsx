import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="SupportContainer">
      <div className="py-4  mb-4 " id="SupportWrapper">
        <h3>Support Portal</h3>
        <a href="" classname="mt-4 pt-4 pr-5" style={{ fontSize:"27px",textDecoration: "none", color: "white", marginRight:"100px"}}>
          Track Ticket
        </a>
      </div>
      <div className="row p-5 mt-5 mb-4">
        <div className="col-6 p-5" id="SupportHero">
          <h1>Search for an answer or browse help topics to create a ticket</h1>
          <form action="#">
            <input
              type="text"
              placeholder="Eg. How do i activate F&O"
              className="m-2 p-4 border-radius"
            />
          </form >

          <a href="" style={{ textDecoration: "none", color: "white"}}>
            Track account opening 
          </a>
          <a href="" style={{ textDecoration: "none", color: "white" }}>
            Track segment 
          </a>
          <a href="" style={{ textDecoration: "none", color: "white" }}>
            activation Intraday 
          </a>
          <a href="" style={{ textDecoration: "none", color: "white" }}>
            margins Kite 
          </a>
          <a href="" style={{ textDecoration: "none", color: "white" }}>
            user manual 
          </a>
        </div>
        <div className="col-6 p-4 mt-4 mb-4 ml-5 pl-5" >
          <h1>Features</h1>
          <ol className="col-6 p-4 mt-4 mb-4 ml-5 pl-5">
            <li>
              <a href="" style={{ textDecoration: "none", color: "white" }}>
              Latest Intraday leverages and Square-off timings
              </a>
            </li>
            <li>
              <a href="" style={{ textDecoration: "none", color: "white" }}>
                Surveillance measure on scrips - June 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
