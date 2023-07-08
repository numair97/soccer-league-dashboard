import React from 'react'

const PlayerPerformance = ({ players }) => {
    return (
        <>
            <h1>Players Performance</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Stats</th>
                </tr>
                <tr>
                    {players.map((player) => (
                        <td key={player.id}>
                            <p>{player.name}</p>
                            <p>{player.stats}</p>
                        </td>
                    ))}
                </tr>
            </table>
        </>
    )
}

export default PlayerPerformance