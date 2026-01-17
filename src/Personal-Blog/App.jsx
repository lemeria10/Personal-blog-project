import Header from "./Header/Header";
import About from "./About/About";
import BlogLogo from "../assets/nick.jpg";
import Article from "./Articlelist/Article";
import Footer from "./Footer/Footer";
import "../index.css";
function App() {
  const posts = [
    {
      id: 1,
      title: "About Me",
      date: "January 17, 2026",
      preview:
        "Hi, my name is Nick Lemeria, and I am from Kenya. I am passionate about technology and web development, and I enjoy learning new skills that challenge me and help me grow. In my free time, I love exploring innovative solutions and reading about tech trends.",
    },

    {
      id: 2,
      title: "My Background",
      date: "January 17, 2026",
      preview:
        "I studied at JKUAT and hold a degree in Operations Research. Currently, I am furthering my skills by studying Software Engineering at Moringa, where I am gaining hands-on experience in building modern web applications and improving my programming skills.",
    },

    {
      id: 3,
      title: "My Profession",
      date: "January 17, 2026",
      preview:
        "I am an aspiring software engineer with skills in web development, particularly in React and JavaScript. I am currently building projects to strengthen my coding abilities and aiming to grow into a full-stack developer role, contributing to meaningful tech solutions that solve real-world problems.",
    },
    {
  id: 4,
  title: "My Projects",
  date: "January 17, 2026",
  preview: "Check out some of the projects I’ve built and contributed to on my GitHub.",
  link: "https://github.com/lemeria10", 
}

  ];

  return (
    <>
    <Header name="My Personal Blog" />
    
    <div>
      
      <About imageSrc={BlogLogo} aboutText=" Welcome to my blog." />
      <p>Hello! Here you'll find some basic information about me.</p>
      <Article posts={posts} />
    </div>
      <Footer />
       </>  
  );
}
export default App;
