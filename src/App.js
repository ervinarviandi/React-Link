import ParticlesBg from "particles-bg";
import { BsGlobe } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import "./App.css";

function App() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="profile text-center">
            {/* <img src={ervinarviandiImage} width={100} alt="profile" className="img-thumbnails rounded-circle" /> */}
            <img src="/ervinarviandi.jpg" className="img-thumbnails" />
            <div className="description">
              <h1>Ervin Arviandi</h1>
              <p>Frontend Developer</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <a href="/some-url" className="btn-action">
              <BsGlobe />
              <span>Portfolio</span>
            </a>
            <a href="https://www.showwcase.com/ervinarviandi" className="btn-action">
              <BsLink45Deg />
              <span>Showcase</span>
            </a>
            <a href="https://github.com/ervinarviandi" className="btn-action">
              <BsGithub />
              <span>Github</span>
            </a>
            <a href="https://www.instagram.com/ervinarviandi/" className="btn-action">
              <BsInstagram />
              <span>Instagram</span>
            </a>

            <div className="stack">
              <SiTailwindcss />
              <SiReact />
              <SiBootstrap />
              <SiNextdotjs />
            </div>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
