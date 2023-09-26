// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState} from "react";

export const ClimateContext = createContext()

export const ClimateProvider = (props) => {
    const [humidity, setHumidity] = useState(40)
    const [temperature, setTemperature] = useState(50)
    const [desiredTemp, setDesiredTemp] = useState(50)

    return (
        <ClimateContext.Provider value={{temperature, setTemperature, humidity, setHumidity, desiredTemp, setDesiredTemp}}>
            {props.children}
        </ClimateContext.Provider>
    )
}

export const useClimate = () => {
    return useContext(ClimateContext)
}