import "../assets/css/styles.css";


function App() {
  return (
    <div id="main">

      <div id="header">

        <div className="logo">
          <h1>PAPAYA HIGH</h1>
          <p>NAIL BAR</p>
        </div>

        <ul id="nav">

          <li><a href="/">Home</a></li>

          <li><a href="/">About us</a></li>

          <li>
            <a href="/">
              Services
              <span className="ti-angle-down" ></span>
            </a>

  
          </li>

          <li><a href="/">Testimonials</a></li>

        </ul>

        <button className="book-btn">
          Book services
        </button>

      </div>

    </div>
  );
}

export default App;