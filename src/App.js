import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Filler from "./routes/Filler";
import Team from "./routes/Team";
import Member from "./routes/Member";
import NotFound from "./routes/NotFound";
import "./App.css";

function App() {
  const [members, setMembers] = useState();

  useEffect(() => {
    async function getMembers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setMembers(data);
    }
    getMembers();
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Filler />} />
          <Route path="home" element={<Filler />} />
          <Route path="team" element={<Team members={members}/>}>
            <Route path=":memberId" element={<Member members={members} />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
