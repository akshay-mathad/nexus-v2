import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import bgImage from "../images/image-2-Joel-Filipe.jpg";
import SearchFeature from "../components/SearchFeature";

const LandingPage = () => {
  const navigate = useNavigate();
  const searchFeatureRef = useRef(null);

  const handleSearchNowClick = () => {
    if (searchFeatureRef.current) {
      searchFeatureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <div className="landing-page">
        <div className="home-intro">
          <div className="home-intro-text">
            <div className="home-intro-text-title afacad-font">Welcome to Nexus</div>
            <div className="home-intro-text-description playfair-display-font">
              Experience the ultimate convenience with our comprehensive
              platform, designed to cater to all your requirements
            </div>
            <div className="home-intro-text-buttons">
              <button
                className="search-button"
                onClick={handleSearchNowClick}
              >
                Search Now
              </button>

              <button
                className="get-started-button"
                onClick={() => navigate("/home")}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="home-intro-image">
            <img src={bgImage} alt="Landing Page" />
          </div>
        </div>
      </div>
      {/* <div className="home-how-to-book">
        <div className="home-how-to-book-title">How to Book</div>
        <div className="how-to-book-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          reprehenderit soluta, dolorum repellendus modi expedita iusto tempore
          libero totam ea quia quas a quasi nihil fugiat, distinctio eos. A,
          saepe?
        </div>
        <div className="how-to-book-steps">
          <div className="step">
            <svg xmlns="http://www.w3.org/2000/svg" className="step-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 100-16 8 8 0 000 16zm-.75-11.25h1.5v1.5h-1.5v-1.5zm0 2.25h1.5v1.5h-1.5v-1.5zm0 2.25h1.5v1.5h-1.5v-1.5zm0 2.25h1.5v1.5h-1.5v-1.5zm0 2.25h1.5v1.5h-1.5v-1.5z" />
            </svg>
            <div className="step-description">Enter Location where service is required</div>
          </div>
          <div className="step">
            <svg xmlns="http://www.w3.org/2000/svg" className="step-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13H5v-2h14v2z" />
              <path d="M7 2v11l10-5.5z" />
            </svg>
            <div className="step-description">Book Artisan by selecting artisan, date, time, and placing a book request</div>
          </div>
          <div className="step">
            <svg xmlns="http://www.w3.org/2000/svg" className="step-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 100-16 8 8 0 000 16zm-.75-11.25h1.5v1.5h-1.5v-1.5zm0 2.25h1.5v1.5h-1.5v-1.5zm0 2.25h1.5v1.5h-1.5v-1.5zm0 2.25h1.5v1.5h-1.5v-1.5zm0 2.25h1.5v1.5h-1.5v-1.5z" />
            </svg>
            <div className="step-description">Artisan will see his booking request, accept if okay then service is booked</div>
          </div>
        </div>
      </div> */}
      <div ref={searchFeatureRef}>
        <SearchFeature />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
