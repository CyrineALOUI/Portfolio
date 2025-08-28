import "./Hero.css";
import avatar from "../../assets/avatar.png";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Salut, je suis Cyrine 👋</h1>
        <p className="hero-subtitle">
          Développeuse Full-Stack passionnée par la création d’applications modernes et élégantes.
        </p>
        <button className="hero-btn">Contactez-moi</button>
      </div>
      <div className="hero-image">
         <img src={avatar} alt="Avatar Cyrine" /> 
      </div>
    </section>
  );
}