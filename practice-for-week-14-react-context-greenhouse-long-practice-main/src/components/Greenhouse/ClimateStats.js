import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect } from 'react';

function ClimateStats() {
  const  {humidity} = useClimate()
  const {temperature, setTemperature} = useClimate()
  const {desiredTemp, setDesiredTemp} = useClimate()

  useEffect(() => {
    const timer = setTimeout(() => {
      if(temperature < desiredTemp) {
        setTemperature(temperature + 1)
      } else if(temperature > desiredTemp) {
        setTemperature(temperature - 1)
      } 
    }, 1000);
    return () => clearTimeout(timer);
  }, [temperature, desiredTemp]);


  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;