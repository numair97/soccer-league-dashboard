import React from 'react';

const TeamSetup = ({ team }) => {
  return (
    <div>
      <h3>{team.name} Lineup</h3>
      <ul>
        {team.players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamSetup;
