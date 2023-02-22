import { NavLink, Outlet } from "react-router-dom";
import { getMembers } from "../data";

function Team() {
  const members = getMembers();

  return (
    <div style={{ display: "flex" }}>
      <nav style={{
        borderRight: "solid 1px",
        padding: "1rem"
      }}>
        {members.map(member => (
          <NavLink
            style={{ display: "block", margin: "1rem 0", textAlign: "right" }}
            to={`/team/${member.id}`}
            key={member.id}
          >
            {member.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}

export default Team;