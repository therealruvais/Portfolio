import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Hero.css";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Hero = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <div
        id="home"
        className="hero-container"
      >
        <div className="hero-left">
          <h1 className="hero-title">Hi Iam Ruvais</h1>
          <div className="hero-whatido">
            <img
              className="hero-line"
              src="./img/line.png"
            />
            <h2 className="hero-subtitle">What I Do</h2>
          </div>
          <p className="hero-desc">
            I enjoy creating delightful, human-centered digital experiences.
          </p>
          <div className="social-icons">
            <a href="#">
              <BsGithub />
            </a>
            <a href="#">
              <BsLinkedin />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere
              args={[1, 100, 200]}
              scale={1.7}
            >
              <MeshDistortMaterial
                color="#c34eda"
                attach="material"
                distort={0.5}
                speed={1.5}
              />
            </Sphere>
          </Canvas>
          <img
            className="hero-img"
            src="./img/ai 2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
