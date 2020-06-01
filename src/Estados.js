import React, { useState } from 'react';

export const DEFAULT_CARD_STATE = {
    nombre: "hola",
    
};

export  const cardContext = React.createContext(DEFAULT_CARD_STATE);


export const useCard = props => {
    const [pais, setPais] = useState(DEFAULT_CARD_STATE);

    return(
        <cardContext.Provider value={[pais,setPais]}>
            {props.children}
        </cardContext.Provider>
    )

};

export const useCardState = () => {

    
};

