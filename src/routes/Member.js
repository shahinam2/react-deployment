import { useParams } from "react-router-dom";
import { getMember } from "../data";

function Member() {
  // we use the useParams hook to get the memberId from the URL
  // useParams returns an object with a key for each URL parameter
  // and the corresponding segments of the URL as the value
  let params = useParams(); // { memberId: 2 }
  const {name, username, email, address} = getMember(parseInt(params.memberId, 10));

  return (
    <main style={{ padding: "1rem", textAlign: "left" }}>
      <h2>{name}:</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Address: {address.street}</p>
    </main>
  )
}

export default Member;