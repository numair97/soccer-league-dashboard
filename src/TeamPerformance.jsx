import React from 'react'

const TeamPerformance = ({ teams }) => {
    return (
        <>
            <h1>Teams Performance</h1>
            {teams.map((team) => (
                <div key={team.id}>
                    <h3>Name: <span>{team.name}</span></h3>
                    <p>Stats: <span>{team.stats}</span></p>
                </div>
            ))}
        </>
    )
}

export default TeamPerformance