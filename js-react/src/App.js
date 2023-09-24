import "./App.css";

function App() {
  return (
    <div className="App">
      <aside
        id="border"
        className="border js-fullheight"
        style={{
          fontSize: "16px",
          top: 0,
          left: 0,
          position: "fixed",
          backgroundColor: "#1b130b",
          height: "100vh",
          width: "15%",
        }}
      >
        <div className="centerImage" style={{ padding: "20px" }}>
          <img
            src="Images/IMG_3723-removebg-preview.png"
            className="App-logo"
            alt=""
            style={{ height: "100px" }}
          />
          <h1 style={{ fontSize: "30px", color: "#FAF9F6" }}>
            <p>Saaketh Sodanapalli</p>
          </h1>
          <div>
            <nav>
              <ul style={{ listStyleType: "none", fontSize: "20px" }}>
                <li className="nav_place">
                  <a className="nav_buttons" href="#Introduction">
                    Introduction
                  </a>
                </li>
                <li className="nav_place">
                  <a className="nav_buttons" href="#Projects">
                    Projects
                  </a>
                </li>
                <li className="nav_place">
                  <a className="nav_buttons" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>

      <main style={{ marginLeft: "15%", backgroundColor: "#FAF9F6" }}>
        <header
          className="App-header"
          style={{
            backgroundImage:
              "url(Images/eugene-golovesov-12-LhcMD2Hg-unsplash.jpg)",
            padding: "0px",
            backgroundSize: "cover",
            backgroundAttachment: "fixed", // This creates the parallax effect
          }}
        >
          <h1
            style={{
              fontSize: "100px",
              fontFamily: "Roboto",
              marginLeft: "-40%",
              textAlign: "left",
            }}
          >
            Hi!
            <br />
            I'm Saaketh
          </h1>
          <a
            className="spec_button"
            href={`${process.env.PUBLIC_URL}/Images/logo512.png`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume Link
            <img
              className="spec_img"
              src="Images/pngwing.com.png"
              alt=""
              style={{ height: "25px", top: "10px" }}
            />
          </a>
        </header>

        <section className="sections1" id="Introduction">
          <h1 className="Header"> Introduction </h1>
          <p className="text-content" style={{ textIndent: "50px" }}>
            Hello and welcome to my website! My name is Saaketh Sodanapalli and
            I'm currently a sophomore at the University of Massachusetts Amherst
            majoring in Computer Engineering.
          </p>
          <p className="text-content" style={{ textIndent: "50px" }}>
            Other than coding, I like to workout a lot and am currently a part
            of my universities club swim team, with me making club nationals
            last year! I also like to read books, ranging from a wide amount of
            genres, from thrillers to high-fantasy. While I study computer
            engineering to gain knowledge on both the software and hardware
            aspects of computers, I am predisposed towards the software aspect
            of them, hoping expand my knowledge and hone my skills with real
            world projects.
          </p>
        </section>
        <section className="sections1" id="Projects">
          <h1 className="Header">Projects</h1>
          <h3>Snake and Tetris</h3>
          <p style={{ textIndent: "50px" }}>
            {" "}
            In my introductory programming course, ECE 122, I programmed the two
            games, Snake and Tetris. Utilizing Python and the Tkinter library, I
            crafted the visual displays and underlying mechanics to bring these
            games to life."
          </p>
          <div>
            <img
              src="/Images/Snake_game.png"
              alt=""
              style={{ width: "200px", height: "400px" }}
            />
            <img
              src="/Images/Tetris_game.png"
              alt=""
              style={{ width: "200px", height: "400px" }}
            />
          </div>
          <h3>This website!</h3>
          <p style={{ textIndent: "50px" }}>
            I developed this portfolio website utilizing React as the core
            framework, with Git serving as the version control system to
            efficiently manage and track the progress of the site.
          </p>
        </section>
        <section className="sections1" id="Contact">
          <h1 className="Header">Contact Me!</h1>
          <p>Email: saaketh1001@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/saaketh-sodanapalli-863a65228/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn Profile
            </a>
          </p>
          <p>Phone Number: (720)-319-1842 </p>
        </section>
      </main>
    </div>
  );
}

export default App;

/*
        <section className='sections1' id="Skills">
          <h1 className='Header'>My Skills</h1>
          <div className="container">
            <div className="section" style = {{ marginLeft:"20%"}}><h3>Software</h3></div>
              <ul style = {{listStyleType:"none",marginLeft:"-100px"}}>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
              </ul>
            <div className="section" style = {{marginLeft:"30%",fontSize:"25px"}}>Soft Skills</div>  
              <ul style = {{listStyleType:"none" ,marginLeft:"-80px",fontSize:"20px"}}>
                <li>
                  Communication
                  <div className="box"> I excel at communication by actively listening to others and expressing my thoughts based on feedback. My ability to adapt my communcation style to the intended audience helps me convey my point as well as build relationships and understand each other better</div>
                </li>
                <li>
                  Adaptability
                  <div className="box">Description of Adaptability</div>
                </li>
                <li>
                  Problem Solving
                  <div className="box">Description of Problem Solving</div>
                </li>
              </ul>
          </div>
        </section>
  */
