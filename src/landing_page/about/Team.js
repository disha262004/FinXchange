import React from "react";

function Team() {
  return (
    <div className="container p-5">
      <div className="row  p-3 border-top">
        <h1 className="text-center fs-2">People</h1>
      </div>
      <div
        className="row p-3 text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col p-3 text-center">
          <img
            src="media/image/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6 className="mt-3 ">Founder, CEO</h6>
        </div>
        <div className="col p-3 ">
          <p><br/>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. <br/>Today,
            Zerodha has changed the landscape of the Indian broking industry.</p>

          <p>He is a member of the SEBI Secondary Market Advisory Committee(SMAC) and the Market Data Advisory Committee <br />(MDAC).</p>

          <p>Playing basketball is his zen.</p>

          <p style={{textDecoration:"none"}}>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a> </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
