import './styles/fontsAndReset.css';
import './styles/styles.css';
import cloubyDayImage from './images/cloudy-backgr.jpg';

document.body.style.backgroundImage = `url('${cloubyDayImage}')`;

// const img = document.querySelector('img');
// fetch(
//   'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=85DNK7ZJCC7NDBVZBCKBZ6QL9',
//   {
//     mode: 'cors',
//   },
// )
//   .then((response) => response.json())
//   .then((response) => {
//     const paragrapgh = document.querySelector('p');
//     paragrapgh.innerText = response.currentConditions.temp;
//     console.log(response);
//   });
