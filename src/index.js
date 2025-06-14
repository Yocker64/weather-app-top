import './styles/fontsAndReset.css';
import './styles/styles.css';
import cloubyDayImage from './images/cloudy-backgr.jpg';
import { searchWeatherForecast } from './scripts/buttonHandler';

const searchField = document.getElementById('search');
searchField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchWeatherForecast();
  }
});

document.body.style.backgroundImage = `url('${cloubyDayImage}')`;

const changeUnitButton = document.getElementById('changeUnit');

changeUnitButton.addEventListener('click', () => {
  if (changeUnitButton.innerHTML === '<strong>°C</strong> / °F') {
    changeUnitButton.innerHTML = '°C / <strong>°F</strong>';
    currentTempSymbol = '°C';
    convertTempAndSymbols(true);
  } else {
    changeUnitButton.innerHTML = '<strong>°C</strong> / °F';
    currentTempSymbol = '°F';
    convertTempAndSymbols(false);
  }
});

let currentTempSymbol = '°F'; // Internal state for the symbol

export function getTempSymbol() {
  return currentTempSymbol;
}

export function setTempSymbol(newSymbol) {
  currentTempSymbol = newSymbol;
  console.log(`Temperature symbol updated to: ${currentTempSymbol}`);
  // Optional: You could also dispatch a custom event here if other parts
  // of your app need to react immediately without being tightly coupled.
  // document.dispatchEvent(new CustomEvent('tempSymbolChanged', { detail: newSymbol }));
}

function convertTempAndSymbols(fahrenheit) {
  const temps = document.querySelectorAll('.temp');
  const tempSyms = document.querySelectorAll('.tempSym');

  temps.forEach((tempElement, index) => {
    const currentValue = parseFloat(tempElement.textContent);
    if (fahrenheit) {
      tempElement.textContent = fahrenheitToCelsius(currentValue);
    } else {
      tempElement.textContent = celsiusToFahrenheit(currentValue);
    }
  });
  tempSyms.forEach((tempSymsElement, index) => {
    tempSymsElement.textContent = currentTempSymbol;
  });
}

function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}
