function About( {imageSrc, aboutText} ) {
  return (
    <aside>
      <img src={imageSrc} alt="About Me" />
      <p>{aboutText}</p>
    </aside>
  );
}
export default About;