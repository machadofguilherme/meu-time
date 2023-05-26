import React from "react"
import { IPlayers } from "../../interfaces/IPlayers";
import { TableHead } from "./PlayersTableStyle";

interface Props {
    data: IPlayers[];
}

const PlayersTable: React.FC<Props> = ({ data }) => {    
    return (
        <table>
            <TableHead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>País de Origem</th>
                </tr>
            </TableHead>
            <tbody>
                {   
                    data.length > 0 && (
                        data?.map((player, index) => (
                            <tr key={index}>
                                <td>{player.player.name}</td>
                                <td>{player.player.age}</td>
                                <td>{player.player.nationality}</td>
                            </tr>
                            )
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default PlayersTable