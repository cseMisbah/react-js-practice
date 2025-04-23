import React from "react";

//for redirecting we can use UseNavigate
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla
        voluptas tempore laboriosam eum ipsum sit, veritatis, voluptatem numquam
        exercitationem accusantium, non impedit magnam dolorem possimus porro.
        Perspiciatis minus, asperiores magnam minima facere praesentium
        doloribus est voluptates expedita architecto nulla non natus obcaecati
        cumque at? Unde rem accusantium quasi odio?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo architecto
        tenetur sed dignissimos omnis nesciunt ex necessitatibus quasi! Deleniti
        natus aspernatur explicabo nobis temporibus pariatur reprehenderit
        laudantium totam error officiis!
      </p>
      <button onClick={() => navigate("/")}>Go to home</button>
    </div>
  );
};

export default Contact;
