import { useState } from "react";

const Landing = () => {
  const [message, setMessage] = useState("Welcome to the Landing Page!");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Have a great day!")}>
        Change Message
      </button>
    </div>
  );
};

export default Landing;