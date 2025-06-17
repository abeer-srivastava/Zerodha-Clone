import React from "react";

function Universe() {
  return (
    <div className="conatiner">
      <div className="container">
        <div className="row text-center d-flex ">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4 p-4  ">
            <img src="/media/smallcaseLogo.png" className="w-50" alt="" />
            <p className="text-small text-muted">
              smallcases are modern investment products that help you build a
              diversified, low-cost & long term portfolio
            </p>
          </div>
          <div className="col-4 p-3 ">
            <img src="/media/streakLogo.png" className="w-50" alt="" />
            <p className="text-small text-muted">
              Live Scanners, Live strategies, backtesting, virtual deployment,
              technicals and much more.
            </p>
          </div>
          <div className="col-4 p-3 ">
            <img src="/media/zerodhaFundhouse.png"  className="w-50" alt="" />
            <p className="text-small text-muted">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
