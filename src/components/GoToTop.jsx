import React, { useEffect, useState } from "react";

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const clickAndScroll = () => {
    scrollToTop();
  };

  const [show, setShow] = useState({
    display:"none"
  });

  const listenToScroll = () => {
    let height = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll >= height) {
      setShow({display:"block"});
    } else {
      setShow({display:"none"});
    }
  };

  useEffect(() => {
    return () => {
      window.addEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    
      <div className="flex justify-center items-center" style={show}>
        <div className="top-btn" onClick={clickAndScroll}>
        <i class="fa-solid fa-arrow-up fa-beat"></i>
        </div>
      </div>
    
  );
};

export default GoToTop;
