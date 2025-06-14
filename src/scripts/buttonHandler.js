import { handleSearch } from './handleSearch';

const searchField = document.getElementById('search');

export function searchWeatherForecast() {
  const city = searchField.value;
  handleSearch(city);
}
