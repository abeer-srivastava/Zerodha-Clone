import React from "react";

function Brokerage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="border-top m-5 p-4">
            <h2 className="text-muted mb-4" style={{ textAlign: "left" }}>
              Charges for optional value added services
            </h2>
            <table className="table table-striped w-100">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Billing Frequency</th>
                  <th scope="col">
                    Charges
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted">Tickertape</td>
                  <td className="text-muted">Monthly / Annual</td>
                  <td className="text-muted">Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                  <td className="text-muted">Smallcase</td>
                  <td className="text-muted">Per transaction</td>
                  <td className="text-muted">Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td className="text-muted">Kite Connect</td>
                  <td className="text-muted">Monthly</td>
                  <td className="text-muted">Connect: 500 | Historical: 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;