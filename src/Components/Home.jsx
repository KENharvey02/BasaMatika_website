import logo from "../assets/logo.png";
import module from "../assets/module.png";

const Home = () => {
  return (
    
    <section className='home-container' id="home">
      <nav className="navbar">
         <img src={logo} alt="BasaMatika logo" className="logo" />
         <a href="#download" className="download-btn">
           Download
         </a>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <h1 className="title">BasaMatika</h1>
          <p className="hero-sub">Practice students basic Filipino reading through voice recognition and basic counting through simple games.</p>
        </div>
         <img src={module} alt="BasaMatika app preview" className="hero-image" />
      </div>
    </section>
  );
};

export default Home;