import React from "react";

function CreateTicket() {
  return (
    <div className="container ">
      <div 
        className="row mt-5 fs-6 border-top  "
        style={{ lineHeight: "2.5em" }}
      >
        <h3 className="text-muted mb-5 mt-5" style={{ textAlign: "left" }}>
          To create a ticket, select a relevant topic
        </h3>
        <div className="col-4">
          <h3>
            <i class="fa-solid fa-plus"></i>Account Opening{" "}
          </h3>
          <a href="" className="text-decoration-none">
            Resident individual
          </a>
          <br />
          <a href="" className="text-decoration-none">
            Minor
          </a>
          <br />
          <a href="" className="text-decoration-none">
            Non Resident Indian (NRI){" "}
          </a>
          <br />
          <a href="" className="text-decoration-none">
            Company, Partnership, HUF and LLP
          </a>
          <br />
          <a href="" className="text-decoration-none">
            Glossary
          </a>
          <br />
        </div>
        <div className="col-4">
          <h3>
            <i class="fa-solid fa-circle-notch"></i> Console
          </h3>
          <a href="" className="text-decoration-none ">
           Portfolio
          </a>
          <br />
          <a href="" className="text-decoration-none">
           Corporate actions
          </a>
          <br />
          <a href="" className="text-decoration-none">
           Funds statement
          </a>
          <br />
          <a href="" className="text-decoration-none">
            Reports Profile Segments
          </a>
          <br />
          <a href="" className="text-decoration-none">
           Profile Segments
          </a>
          <br />
        </div>
        <div className="col-4">
          <h3>
            <i class="fa-solid fa-coins"></i> Coin
            {/* Mutual funds National Pension Scheme (NPS) Features on Coin Payments and Orders General */}
          </h3>
          <a href="" className="text-decoration-none">
            Mutual funds
          </a>
          <br />
          <a href="" className="text-decoration-none">
           National Pension Scheme (NPS)
          </a>
          <br />
          <a href="" className="text-decoration-none">
           Features on Coin Payments
          </a>
          <br />
          <a href="" className="text-decoration-none">
           Orders General
          </a>
          <br />
        </div>
      </div>{" "}
      <div className="row mt-5 fs-6  " style={{ lineHeight: "2.5em" }}>
        <div className="col-4">
          <h3>
            <i class="fa-regular fa-user"></i> Your Zerodha Account
          </h3>
          <a href="" className="text-decoration-none">
            Your Profile
          </a>
          <br />
          <a href="" className="text-decoration-none">
            Account modification
          </a>
          <br />
          <a href="" className="text-decoration-none">
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <br />
          <a href="" className="text-decoration-none">
            Nomination Transfer and conversion of securities
          </a>
          <br />
        </div>
        <div className="col-4">
          <h3>
            <i class="fa-solid fa-chart-simple"></i> Kite{" "}
          </h3>
          <a href="" className="text-decoration-none">
           IPO Trading
          </a>
          <br />
          <a href="" className="text-decoration-none">
             FAQs
          </a>
          <br />
          <a href="" className="text-decoration-none">
            Margin Trading Facility (MTF) and Margins Charts
          </a>
          <br />
          <a href="" className="text-decoration-none">
            orders Alerts and Nudges General
          </a>
        </div>
        <div className="col-4">
          <h3>
           <i class="fa-solid fa-wallet"></i> Funds 
          </h3>
          <a href="" className="text-decoration-none">
           Add money
          </a>
          <br />
          <a href="" className="text-decoration-none">
          Withdraw money
          </a>
          <br />
          <a href="" className="text-decoration-none">
           Add bank accounts
          </a>
          <br />
          <a href="" className="text-decoration-none">
           eMandates
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
