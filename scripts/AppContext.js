import { createContext, useState } from "react";

export const AppContext = createContext ()
export const AppProvider = ({ childen }) => {
    const [teste, setTeste] = useState ('')
    const [detail, setDetail] = useState ({})

    return(
        <AppContext.Provider value = {{teste, setTeste, detail, setDetail}}>
            {childen}
        </AppContext.Provider>
    )
}