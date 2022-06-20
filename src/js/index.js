const API_KEY = '244f51358beb91f3';
const AREA_GOTANDA = 'small_area=X086'
const FORMAT = 'format=json';
const IS_LUNCH = 'lunch=1';
const URL = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&${FORMAT}&${AREA_GOTANDA}&${IS_LUNCH}`;

/**
 * hotpepper
 */
const search = () => {
  fetch(URL).then(response => {
    console.log(response.status);
    return response.json().then(function (results) {
        console.log(results);
      });
  });
}

const searchButton = document.querySelector('.js-search');
searchButton.addEventListener('click', search);

search();
