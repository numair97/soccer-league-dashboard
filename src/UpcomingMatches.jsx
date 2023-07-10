import React from 'react'

const UpcomingMatches = ({ matches }) => {
    return (
        <div>
            <h2>Upcoming Matches</h2>
            {matches.map((match) => (
                <div key={match.id}>
                    <h3>{match.team1} vs {match.team2}</h3>
                    <p>Date: <span>{match.date}</span></p>
                    <p>Time: <span>{match.time}</span></p>
                </div>
            ))}
        </div>
    )
}

export default UpcomingMatches