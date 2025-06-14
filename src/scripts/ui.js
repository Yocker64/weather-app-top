import clearNightBackgr from '../images/clear-night-backgr.jpeg';
import cloudyBackgr from '../images/cloudy-backgr.jpg';
import cloudyNightBackgr from '../images/cloudy-night-backgr.jpg';
import defaultImage from '../images/default.jpg';
import electricStormBackgr from '../images/electric-storm-backgr.jpeg';
import rainyDayBackgr from '../images/rainy-day-backgr.jpeg';
import rainyNightBackgr from '../images/rainy-night-backgr.jpg';
import snowyDayBackgr from '../images/snowy-day-backgr.jpeg';
import snowyNightBackgr from '../images/snowy-night-backgr.jpg';
import sunnyBackgr from '../images/sunny-backgr.jpg';

/**
 * Changes the background image of the document body based on a weather icon string.
 *

 */
export function changeWeatherBackground(weatherIcon) {
  // Define a mapping from weatherIcon strings to their respective imported image paths.
  const backgroundMap = {
    'clear-night': clearNightBackgr,
    cloudy: cloudyBackgr,
    'partly-cloudy-night': cloudyNightBackgr,
    storm: electricStormBackgr,
    rain: rainyDayBackgr,
    'rainy-day': rainyDayBackgr,
    'rainy-night': rainyNightBackgr,
    snow: snowyDayBackgr,
    'snowy-day': snowyDayBackgr,
    'snowy-night': snowyNightBackgr,
    sunny: sunnyBackgr,
    'clear-day': sunnyBackgr, // Assuming sunny-backgr.jpg for clear day
    default: defaultImage, // Default image
  };

  // Convert the weatherIcon to lowercase for case-insensitive matching
  const iconKey = weatherIcon.toLowerCase();

  // Get the background image URL from the map, or use the default if not found
  const newBackgroundUrl = backgroundMap[iconKey] || backgroundMap.default;

  // Apply the background styles to the document body
  const bodyStyle = document.body.style;
  bodyStyle.backgroundImage = `url('${newBackgroundUrl}')`;
}
