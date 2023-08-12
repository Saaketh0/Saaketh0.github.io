import './App.css';

function App() {

  return (
    <div className="App">
      <aside id="border" className="border js-fullheight" style={{fontSize: '16px', top: 0, left: 0, position: 'fixed', backgroundColor: "#d4d4d4", height: "100vh", width: "15%" }}>
        <div className='centerImage' style={{ padding: "20px" }}>
          <img src= "logo512.png" className = "App-logo" alt="" style={{ height: "100px", filter: 'brightness(100%)' }} />
          <h1 style={{fontSize:"30px"}}>
            <p>
              Saaketh Sodanapalli
            </p>
          </h1>
          <div className="navBar">
            <nav>
              <ul style={{ listStyleType: 'none' , fontSize:"20px"}}>
                <li>
                  <a href="#Introduction">Introduction</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#Timeline">Timeline</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>

      <main style={{ marginLeft: "15%", fontFamily: 'Arial, sans-serif'}}>
        <header className="App-header" style={{ backgroundImage:"url(denis-kirichkov-PVQcdxcFxfQ-unsplash.jpg)",padding:"0px",backgroundSize:"cover"}}>
          <h1 style={{fontSize:'100px', font:"roboto" ,marginLeft:"-50%",textAlign:"left"}}>
            Hi!
            <br></br>
            I'm Saaketh
          </h1>
        </header>

        <section id="Introduction" style={{paddingBottom: '20px',  padding: "0px 100px 0px 100px" }}>
          <h1 style={{fontSize:"50px", textAlign:"left"}}> Introduction </h1>
          <p className="text-content">
            Hello and welcome to my website! My name is Saaketh Sodanapalli and I'm currently a sophomore at the University of Massachusetts Amherst majoring in Computer Engineering.
            Other than coding, I like to workout a lot and am currently a part of my universities club swim team as well as read books, ranging from self-improvement books to mystery.
            While I study computer engineering to gain knowledge on both the software and hardware aspects of computers, I am predisposed towards the software aspect of them, hoping
            expand my knowledge and skills solving real world problems.
          </p>
        </section>

        <section id="Skills" style={{marginBottom: '20px'}}>
          <h1>Skills</h1>
          <ul style={{ listStyleType: 'none' }}>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </section>

        <section id="Projects">
          <h1>Projects</h1>
            <h3>
              Snake and Tetris
            </h3>
              <p> For my introduction to programming class, ECE 122, I was tasked with designing the games Snake and Tetris using python and tkinter to display the games</p>
              <img scr="Snake_game.png" alt="" />
            <h3>
              This website!
            </h3>
              <p>This website was created using React using git to manage the website.</p>
        </section>

        <section id="Timeline">
          <h1>Timeline</h1>
          <p>2021: Started at University of Massachusetts Amherst</p>
          {/* Add more timeline events as needed */}
        </section>

        <section id="Contact">
          <h1>Contact</h1>
          <p>Email: saaketh@example.com</p>
          <p>LinkedIn: link_to_profile</p>
          {/* Add more contact details as needed */}
        </section>
      </main>
    </div>
  );
}

export default App;