const Hero = ({ text, backDrop }) => {
  return (
    <header className="bg-dark text-white p-5 hero-container">
      <h1 className="hero-title">{text}</h1>
      {backDrop && (
        <div
          className="hero-backdrop"
          style={{ backgroundImage: `url(${backDrop})` }}
        ></div>
      )}
    </header>
  );
};

export default Hero;
