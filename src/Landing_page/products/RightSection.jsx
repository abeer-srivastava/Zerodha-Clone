import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container d-flex justify-content-between ">
        <div className="row  " >
          <div className="col-6 fs-6 pt-5 mt-5 py-4">
            <h1>{productName}</h1>
            <p className="text-muted">{productDescription}</p>
            <a href={learnMore}>Learn more</a>
          </div>
          <div className="col-6 p-5 flex item-center ">
            <img className="p-5"src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
