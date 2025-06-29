import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://humble-xylophone-r476pp96wqrwfx6vp-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>
                <ul>
                  {team.members.map(member => (
                    <li key={member._id}>{member.username}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
