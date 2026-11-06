import './App.css';

function Header() {
  return (
    <header>
      <h1>KL University</h1>
      <p>Welcome to Our College</p>
    </header>
  );
}

function About() {
  return (
    <section>
      <h2>About Us</h2>
      <p>KL University provides quality education and helps students develop knowledge and skills for the future.</p>
    </section>
  );
}

function Courses() {
  return (
    <section>
      <h2>Our Courses</h2>
      <ul>
        <li>Computer Science and Engineering</li>
        <li>Artificial Intelligence and Machine Learning</li>
        <li>Electronics and Communication Engineering</li>
        <li>Mechanical Engineering</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>Email: info@kluniversity.in</p>
      <p>Location: Vaddeswaram, Vijayawada</p>
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      <About />
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
