import { useParams, useNavigate } from "react-router-dom";
// import { getMember } from "../data";
import { useEffect, useState } from "react";

function Member({ members }) {
  const [member, setMember] = useState("");
  const navigate = useNavigate();
  // we use the useParams hook to get the memberId from the URL
  // useParams returns an object with a key for each URL parameter
  let params = useParams(); // { memberId: 2 }

  
  useEffect(() => {
    const filteredMember = members.find(
      (member) => member.id === parseInt(params.memberId, 10)
      );
      console.log("filteredMember:", filteredMember);
    setMember(filteredMember);
  },[params.memberId, members]);

  // const {  username, email, address } = member;

  console.log("memeber in member.js:", member);

  function handleClick() {
    setMember(null);
    return navigate("/team", { replace: true });
  }

  if (member) {
    return (
      <main style={{ padding: "1rem", textAlign: "left" }}>
        <h2>{member.name}</h2>
        <p>Username: {member.username}</p> 
        <p>Email: {member.email}</p>
        <p>Address: {member.address.street}</p>
        <button onClick={handleClick}>Delete</button>
      </main>
    );
  }
}

export default Member;
