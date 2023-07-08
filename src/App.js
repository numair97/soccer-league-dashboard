import React from 'react';
import Dashboard from './Dashboard';
import MatchScorecard from './MatchScorecard';
import TeamSetup from './TeamSetup';

const App = () => {
  const players = [
    { id: 1, name: 'Player 1', stats: 'Stats 1' },
    { id: 2, name: 'Player 2', stats: 'Stats 2' },
    // Add more players
  ];

  const teams = [
    { id: 1, name: 'Team 1', stats: 'Stats 1' },
    { id: 2, name: 'Team 2', stats: 'Stats 2' },
    // Add more teams
  ];

  const matches = [
    {
      team1: 'Team 1',
      team2: 'Team 2',
      team1Goals: 3,
      team2Goals: 2,
      goalkeeperSaves: 5,
      highestScorer: 'Player 1',
      mostAssists: 'Player 2',
      bestDefense: 'Player 3',
      date: '2023-07-08', 
      time: '18:00'
    },
    // Add more match data
  ];

  const team1 = {
    name: 'Team 1',
    players: [
      { id: 1, name: 'Player 1' },
      { id: 2, name: 'Player 2' },
      // Add more players
    ],
  };

  return (
    <div>
      <Dashboard players={players} teams={teams} matches={matches} />
      {matches.map((match, index) => (
        <MatchScorecard key={index} match={match} />
      ))}
      <TeamSetup team={team1} />
    </div>
  );
};

export default App;
