import './styles/fontsAndReset.css';
import './styles/styles.css';
import defaultImage from './images/default.jpg';
import { searchWeatherForecast } from './scripts/buttonHandler';

// eslint-disable-next-line import/no-mutable-exports
export let currentTempSymbol = '°F'; // Internal state for the symbol

document.body.style.backgroundImage = `url('${defaultImage}')`;

const searchField = document.getElementById('search');
searchField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchWeatherForecast();
  }
});

const changeUnitButton = document.getElementById('changeUnit');

changeUnitButton.addEventListener('click', () => {
  if (changeUnitButton.innerHTML === '<strong>°C</strong> / °F') {
    changeUnitButton.innerHTML = '°C / <strong>°F</strong>';
    currentTempSymbol = '°F';
    convertTempAndSymbols(false);
  } else {
    changeUnitButton.innerHTML = '<strong>°C</strong> / °F';
    currentTempSymbol = '°C';
    convertTempAndSymbols(true);
  }
});

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

  temps.forEach((tempElement) => {
    const currentValue = parseFloat(tempElement.textContent);
    if (fahrenheit) {
      tempElement.textContent = fahrenheitToCelsius(currentValue);
    } else {
      tempElement.textContent = celsiusToFahrenheit(currentValue);
    }
  });
  tempSyms.forEach((tempSymsElement) => {
    tempSymsElement.textContent = currentTempSymbol;
  });
}

function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

export function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}
