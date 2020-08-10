// ----- Start of imports -----
// React Import:
import React from "react";
// CSS Import:
import "./404.css";
// ----- End of imports -----

const fourOhFour = () => {
  return (
    <>
      <div className="center">
        <div className="error">
          <div className="number">4</div>
          <div className="illustration">
            <div className="circle"></div>
            <div className="clip">
              <div className="paper">
                <div className="face">
                  <div className="eyes">
                    <div className="eye eye-left"></div>
                    <div className="eye eye-right"></div>
                  </div>
                  <div className="rosyCheeks rosyCheeks-left"></div>
                  <div className="rosyCheeks rosyCheeks-right"></div>
                  <div className="mouth"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="number">4</div>
        </div>

        <div className="text">Oops. The page you're looking for doesn't exist.</div>
        <a className="button" href="#">
          Back Home
        </a>
      </div>
      <div className="by">
        Illustration "Cezan - 404 Page Not Found" by{" "}
        <a
          className="byLink"
          href="https://dribbble.com/shots/3965778-Cezan-404-Page-Not-Found"
          target="_blank"
        >
          Masoud Ardestani
        </a>
      </div>
    </>
  );
}

export default fourOhFour;