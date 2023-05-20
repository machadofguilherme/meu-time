import React from 'react';
import { P } from '../League/LeagueStyle'

interface Props {
    image: string;
    title: string;
}

const Image: React.FC<Props> = ({ image, title }) => {
    return (
        <section>
            {
                image && (
                    <div>
                        <img src={`${image}`} />
                        <P>{title}</P>
                        <p>
                            <span>Isso está certo?</span>
                        </p>
                    </div>
                )
            }
        </section>
    )
}

export default Image