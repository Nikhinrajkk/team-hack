import { useEffect } from "react";

import Landing from "../pages/login";

const Layout = () => {
  useEffect(() => {
    animateDiv(".ball");

    function makeNewPosition() {
      // Get viewport dimensions (remove the dimension of the div)
      var h = window.innerHeight - 50;
      var w = window.innerWidth - 50;

      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);

      return [nh, nw];
    }

    function animateDiv(myclass) {
      var newq = makeNewPosition();
      var element = document.querySelector(myclass);

      element.style.transition = "top 1s, left 1s";
      element.style.top = newq[0] + "px";
      element.style.left = newq[1] + "px";
      element.style.transitionDuration = "5s";

      console.log(newq);
      setTimeout(function () {
        animateDiv(myclass);
      }, 3000);
    }
  }, []);
  return (
    <div className="app-container">
      <div className="glow-container">
        <div className="ball" />
        <Landing />
      </div>
    </div>
  );
};

export default Layout;
