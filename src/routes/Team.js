import { NavLink, Outlet, useSearchParams } from "react-router-dom";
// import { getMembers } from "../data";

function Team({ members }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const members = getMembers();
  // console.log("members:", members);

  if (members) {
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({ filter: "" });
              }
            }}
          />
          {members
            .filter((member) => {
              let filter = searchParams.get("filter");
              // console.log(filter);
              if (!filter) {
                return true;
              }
              let name = member.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((member) => (
              <NavLink
                style={{
                  display: "block",
                  margin: "1rem 0",
                  textAlign: "right",
                }}
                to={`/team/${member.id}`}
                key={member.id}
              >
                {member.name}
              </NavLink>
            ))}
        </nav>
        <Outlet  />
      </div>
    );
  }
}

export default Team;
