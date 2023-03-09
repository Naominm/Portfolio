import "./sidebar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth < 768;
      setIsSidebarVisible(!isMobileScreen);
    };

    // Call handleResize() once to set the initial visibility
    handleResize();

    // Attach event listener to window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <>
      {isSidebarVisible ? (
        <>
          <div className="sidebarOverlay" onClick={closeSidebar} />
          <div className="sidebarContainer" style={{ left: isSidebarVisible ? 0 : "-100%" }}>
            <div className="closeButton" onClick={closeSidebar}>
              <Icon icon="eva:close-outline" width="20" height="20" />
            </div>
            <div className="LogoContainerIcons">
              <div className="logoContainer">
                <p>NASH</p>
              </div>
              <div className="icons">
                <div className="homeContainer">
                <div className="homeicon">
  <Link className="link" to={"/"}>
    <Icon
      icon="material-symbols:home"
      color="white"
      width="20"
      height="20"
    />
  </Link>
</div>
                  <div className="Hometext">
                    <Link className="link" to={"/"}>
                      Home
                    </Link>
                  </div>
                </div>
                <div className="AboutContainer">
                  <div className="homeicon">
                  <Link className="link" to={"/about"}>
                    <Icon
                      icon="material-symbols:person"
                      color="white"
                      width="20"
                      height="20"
                      />
                      </Link>
                      </div>
                  <div className="Hometext">
                    <Link className="link" to={"/about"}>
                      About
                    </Link>
                  </div>
                </div>
                <div className="contactContainer">
                  <div className="homeicon">
                  <Link className="link" to={"/contact"}>
                    <Icon
                      icon="clarity:email-line"
                      color="white"
                      width="20"
                      height="20"
                      />
                      </Link>
                  </div>
                  <div className="Hometext">
                    <Link className="link" to={"/contact"}>
                      Contact
                    </Link>
                  </div>
                </div>
                <div className="homeContainer">
                  <div className="homeicon">
                  <Link className="link" to={"/portfolio"}>
                    <Icon
                      icon="zondicons:portfolio"
                      color="white"
                      width="20"
                      height="20"
                      />
                      </Link>
                  </div>
                  <div className="Hometext">
                    <Link className="link" to={"/portfolio"}>
                      Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="hambergerMenu" onClick={toggleSidebar}>
          <Icon
            icon="radix-icons:hamburger-menu"
            width="40"
            height="40"
            color="white"
          />
        </div>
      )}
    </>
  );
}
