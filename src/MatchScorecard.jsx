import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};


const MatchScorecard = ({ match }) => {
  const { team1, team2, team1Goals, team2Goals, goalkeeperSaves, highestScorer, mostAssists, bestDefense } = match;

  const data = {
    labels: ['Goals', 'Goalkeeper Saves', 'Highest Scorer', 'Most Assists', 'Best Defense'],
    datasets: [
      {
        label: team1,
        data: [team1Goals, goalkeeperSaves, highestScorer, mostAssists, bestDefense],
        backgroundColor: '#FF6384',
      },
      {
        label: team2,
        data: [team2Goals, goalkeeperSaves, highestScorer, mostAssists, bestDefense],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div>
      <h3>{team1} vs {team2}</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MatchScorecard;
