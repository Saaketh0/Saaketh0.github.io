import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside id="border" className="border js-fullheight" style={{ color: '#000000', fontSize: '16px', top: 0, left: 0, position: 'fixed', backgroundColor: "#d4d4d4", height: "100vh", width: "15%" }}>
        <div className='centerImage' style={{ padding: "20px" }}>
          <img src={logo} className="App-logo" alt="logo" style={{ height: "100px", filter: 'brightness(0%)' }} />
          <h1>
            <p>
              Saaketh Sodanapalli
            </p>
          </h1>
          <div className="navBar">
            <nav>
              <ul>
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

      <main style={{ marginLeft: "15%" }}>
        <header className="App-header">
          <p>
            Saaketh Sodanaplli intro
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <section id="Introduction">
          <h1>Introduction</h1>
          <p className="text-content">
            Hello, my name is Saaketh Sodanapalli and I'm currently a sophomore at the University of Massachusetts Amherst majoring in Computer Engineering. I like to...
          </p>
        </section>

        <section id="Skills">
          <h1>Skills</h1>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            {/* Add more skills as needed */}
          </ul>
        </section>

        <section id="Projects">
          <h1>Projects</h1>
          <p>Project 1: Description...</p>
          <p>Project 2: Description...</p>
          {/* Add more projects as needed */}
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