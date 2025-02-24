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
        <div className="col p-3 text-center ">
          <img
            src="media/image/profile.jpg"
            style={{ borderRadius: "100%", width: "30%" }}
          />
          <h4 className="mt-3">Disha Rathore</h4>
        </div>
        <div className="col p-3 ">
          <p><br/>FinXchange is an innovative trading platform developed by Disha Rathore, a passionate frontend developer with a vision to create seamless financial solutions</p>

          <p>FinXchange isn’t just a platform — it’s a commitment to innovation, making trading accessible, efficient, and powerful for users worldwide.</p>

          <p style={{textDecoration:"none"}}>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a> </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
