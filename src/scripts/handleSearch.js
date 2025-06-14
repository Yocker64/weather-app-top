import { getTempSymbol } from '../index.js';

export function handleSearch(city) {
  // const img = document.querySelector('img');

  const tempDiv = document.getElementById('temperature');
  const cityDiv = document.getElementById('cityName');
  const stateDiv = document.getElementById('weather-state');
  const additionalInfoDiv = document.getElementById('additional-info');
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=85DNK7ZJCC7NDBVZBCKBZ6QL9`,
    {
      mode: 'cors',
    },
  )
    .then((response) => response.json())
    .then((response) => {
      const tempSymbol = getTempSymbol();
      tempDiv.innerHTML = `<span class="temp">${response.currentConditions.temp}</span> <span class="tempSym">${tempSymbol}</span>`;
      cityDiv.innerText = response.resolvedAddress;
      stateDiv.innerText = response.alerts[0].event;

      // Extract the icon into a variable
      const weatherIcon = response.currentConditions.icon;

      // Format the datetime for display (e.g., "03:27 AM")
      // Note: This assumes datetime is a string in "HH:MM:SS" format
      const [hours, minutes, seconds] =
        response.currentConditions.datetime.split(':');
      const formattedTime = new Date(
        0,
        0,
        0,
        parseInt(hours),
        parseInt(minutes),
        parseInt(seconds),
      ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      additionalInfoDiv.innerHTML = `
    <div class="weather-info">
        <p><strong>Time:</strong> ${formattedTime}</p>
        <p><strong>Feels Like:</strong> <span class="temp">${response.currentConditions.feelslike}</span> <span class="tempSym">${tempSymbol}</span></p>
        <p><strong>Humidity:</strong> ${response.currentConditions.humidity}%</p>
        <p><strong>Sunrise:</strong> ${response.currentConditions.sunrise}</p>
        <p><strong>Sunset:</strong> ${response.currentConditions.sunset}</p>
    </div>
`;
      console.log('Weather Icon:', weatherIcon);
      console.log('InnerHTML for display:\n');
    });
}
