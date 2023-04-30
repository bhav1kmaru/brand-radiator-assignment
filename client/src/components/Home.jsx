import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

const Home = () => {
    const isMd=useMediaQuery(960)
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Brand Radiator</h1>
      <div
        style={{
          display: isMd ? "block" : "flex",
          justifyContent: "center",
          padding: "20px",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          style={{ backgroundColor: "black" }}
          src="https://brandradiator.com/images/BR-logo1.png"
        />
        <div>
          <h2>The Consulting,Branding & IT Maven</h2>
          <p>
            We are the team unifying creativity and technology to re-architect
            brands We are one of the splinters of Digital India
          </p>
        </div>
      </div>
      <div style={{padding:"20px",textAlign:"center"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}

export default Home