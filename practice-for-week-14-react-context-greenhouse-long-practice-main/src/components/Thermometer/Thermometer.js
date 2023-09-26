import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import { useEffect } from "react";


function Thermometer() {
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
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={desiredTemp}
        onAfterChange={(val) => {setDesiredTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;