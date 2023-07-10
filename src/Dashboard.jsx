import React from 'react'
import PlayerPerformance from './PlayerPerformance'
import TeamPerformance from './TeamPerformance'
import UpcomingMatches from './UpcomingMatches'

const Dashboard = ({players, teams, matches }) => {
    return (
        <>
            <PlayerPerformance players={players} />
            <TeamPerformance teams={teams} />
            <UpcomingMatches matches={matches} />
        </>
    )
}

export default Dashboard