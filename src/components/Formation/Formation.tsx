import React from 'react'
import { IFormation } from '../../interfaces/IFormationStatistics'

interface Props {
    data: IFormation[]
}

const Formation: React.FC<Props> = ({ data }) => {
    return (
        <ul>
            {
                data.map((form, index) => (
                    <li key={index}>
                        {form.formation}
                    </li>
                ))
            }
        </ul>
    )
}

export default Formation