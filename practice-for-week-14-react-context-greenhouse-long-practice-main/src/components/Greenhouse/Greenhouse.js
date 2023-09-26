import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

import { useClimate } from '../../context/ClimateContext';
import { useEffect } from 'react';

function Greenhouse() {
  const {themeName} = useTheme()

  return (themeName === "day") ? (
    <section>
      <img  className='greenhouse-img'
            src={dayImage}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  ) : (
    <section>
      <img  className='greenhouse-img'
            src={nightImage}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  )
}

export default Greenhouse;
