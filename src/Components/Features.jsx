import module from "../assets/module.png";

const Features = () => {
  return (
    <section className="features-container">
      <h1 className="feature-text">Features</h1>

      <div className="vr-games">

        <div className="vr-container">
        <img src = {module} alt="voice recognition" className="vr"/>
        <h5 className="voice-title">Voice Recognition</h5>
        <p>Enhance student basic reading in Filipino.</p>
        </div>


        <div className="games-container">
        <img src = {module} alt="drag-and-drop" className="games"/>
        <h5 className="game-title">Drag-and-Drop Games</h5>
        <p>Learn and apply through simple games.</p>
        </div>

        <div className="module-container">
        <img src = {module} alt="modules" className="module"/>
        <h5 className="module-title">Modules</h5>
        <p>Lessons for students in categories.</p>

      </div>

      </div>

      <div className="version-button">
        <a href="#download" className="download-btn2">BasaMatika V1.0</a>  
      </div>

      <p className="dl">Download now</p>

    </section>
  )
}

export default Features
