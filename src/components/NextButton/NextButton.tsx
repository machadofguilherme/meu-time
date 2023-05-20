import React from 'react'

interface Props {
    isDisable: boolean;
    next: () => void;
}

const NextButton: React
    .FC<Props> = ({ isDisable, next }) => {
    return (
        <button
            type="button"
            disabled={!isDisable}
            onClick={next}>
            Próximo
        </button>
    )
}

export default NextButton