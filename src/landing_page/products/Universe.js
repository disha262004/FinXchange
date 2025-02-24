import React from "react";

function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5">
        <h1>The FinXchange Universe</h1>
        <p className="p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-3">
          <img src="media/image/smallcaseLogo.png" alt="smallcaseLogo"/>
          <p className="text-small text-muted p-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/image/dittoLogo.png" alt="dittoLogo" style={{width:"30%"}}/>
          <p className="text-small text-muted p-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/image/FinXchangeFundhouse.png" alt="FinXchangeFundhouse" style={{width:"40%"}}/>
          <p className="text-small text-muted p-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/image/streakLogo.png" alt="streakLogo" style={{width:"35%"}}/>
          <p className="text-small text-muted p-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/image/sensibullLogo.svg" alt="sensibullLogo" style={{width:"65%"}}/>
          <p className="text-small text-muted p-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-3 ">
          <img src="media/image/tijori.svg" alt="tijori" style={{width:"30%"}}/>
          <p className="text-small text-muted p-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mb-5 mt-3" style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
