import React from "react"
import { IGames } from "../../interfaces/IGames";

interface Props {
    data: IGames[];
}

const GameTable: React.FC<Props> = ({ data }) => {    
    return (
        <table>
            <thead>
                <tr>
                    <th>T. J.</th>
                    <th>T. V.</th>
                    <th>T. D.</th>
                    <th>T. E.</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    data.length > 0 && (
                        data?.map((game, index) => (
                            <tr key={index}>
                                <td>{game?.fixtures.played.total}</td>
                                <td>{game?.fixtures.wins.total}</td>
                                <td>{game?.fixtures.loses.total}</td>
                                <td>{game?.fixtures.draws.total}</td>
                            </tr>
                            )
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default GameTable