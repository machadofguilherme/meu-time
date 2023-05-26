import React from "react";
import Chart from "react-apexcharts";

import { IGoal } from '../../interfaces/IGoal';

interface Props {
    data: ApexAxisChartSeries | IGoal;
}

const TeamChart: React.FC<Props> = ({ data }) => {
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: Object.keys(data)
        }
    }

    const series = [
        {
            name: 'Gols',
            data: Object.values(data).map(
                (item) => item.total
            ),
        },
    ];
    
    return (
        <>
            {
                series[0].data.length > 0 ? (
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        width="500"
                    />
                ) : (
                    <p>Carregando gráfico...</p>
                )
            }
        </>
    )
}

export default TeamChart