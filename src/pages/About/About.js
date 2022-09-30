import React from "react";
import { RTE } from "../../components/RTE";

const About = () => {

  const getData = (data) => {
    console.log('data =====', data)
    fetch("https://mukhicorporation.com/thorient/information/about/edit-about", {
      method: "POST",
      //   headers: { "Content-Type": "application/json" },
      body: data,
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  }
  return (
    <div>
      <RTE getData={getData} />
    </div>
  );
};

export default About;
