import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Contact page</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque autem
          provident magnam nihil rerum, iure quia maxime, beatae natus libero
          quis? Expedita temporibus animi quae, pariatur molestias doloribus
          labore porro itaque accusantium autem nulla ullam! Nulla rem ex,
          blanditiis eum laborum error quidem beatae vero odio veritatis natus
          est minus.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          illum laboriosam quidem. Quae quis quibusdam illum possimus, nemo
          magni placeat iusto tempore, officia recusandae assumenda error
          repudiandae provident alias laudantium.
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home page
      </button>
    </div>
  );
};

export default Contact;
