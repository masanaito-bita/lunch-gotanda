const API_KEY = '244f51358beb91f3';
const AREA_GOTANDA = 'small_area=X086'
const FORMAT = 'format=json';
const IS_LUNCH = 'lunch=1';
const COUNT = 100
const proxyserver = 'https://cors-suzuki-app.herokuapp.com/';

const URL = `${proxyserver}http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&${FORMAT}&${AREA_GOTANDA}&${IS_LUNCH}&count=${COUNT}`;


/**
 * ランダムの整数を返す
 * @param {int} num
 * @returns
 */
const randomNumber = (num) => {
  return Math.floor( Math.random() * num + 1 );
}

const app = document.querySelector('.app');


/**
 * 飲食店情報を返す
 */
const fetchShopInfo = () => {

  // // 距離パラメータ
  // const selectRange = document.form.range;
  // const rangeNum = selectRange.selectIndex;
  // const RANGE = `range=${rangeNum}`;

  // // 禁煙席パラメータ
  // const selectSmoking = document.form.non_smoking;
  // const smokingNum = selectRange.selectIndex;
  // const NON_SMOKING = `non_smoking=${smokingNum}`;

  console.log('reading fetchShopInfo!!!')
  // fetch(`${URL}&${RANGE}&${NON_SMOKING}`).then(async function (response) {
  fetch(URL).then(async function (response) {
    if (!response.ok) {
      console.error("エラーレスポンス", response);
    } else {
      const dataJson = await response.json();
      const shop = dataJson.results.shop[randomNumber(COUNT)];
      const view = escapeHTML`
      <p>${shop.id}</p>
      <p class='shopGenreCatch'>${shop.genre.catch}</p>
      <h2>${shop.name}</h2>
      <p>${shop.genre.name}</p>
      <img src='${shop.logo_image}'></img>
      <p>${shop.open}</p>
      <p>${shop.budget.average}</p>
      <p>${shop.lat}</p>
      <p>${shop.lng}</p>
      <p>${shop.address}</p>
      <button class="searchButton">再検索</button>
      <a href="/">トップページへ戻る</a>
      <p>${shop.non_smoking}</p>
      `;
      // HTMLの挿入
      app.innerHTML = view;
      const searchButton = document.querySelector('.searchButton');
      searchButton.addEventListener('click', fetchShopInfo);
    }
  });
}


/**
 * トップページを表示する
 */
const renderTop = () => {
  console.log('reading renderTop!!!')
  const view = escapeHTML`
    <button class="searchButton">検索する</button>
  `;
  app.innerHTML = view;
  const searchButton = document.querySelector('.searchButton');
  searchButton.addEventListener('click', fetchShopInfo);
}


{/* <form name="form">
  <select name="range">
    <option value="1">5分</option>
    <option value="2">10分</option>
  </select>
  <select name="non_smoking">
    <option value="0">喫煙席含む</option>
    <option value="1">禁煙席のみ</option>
  </select>
  <button class="searchButton">検索する</button>
</form> */}


/**
 * HTML文字列をエスケープする
 * @param {string} str
 * @returns 変換された特定の記号
 */
function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/**
 * escapeSpecialChars関数をHTML文字列の中で呼び出す タグ関数
 * @param {Array} strings
 * @param  {...any} values
 * @returns
 */
function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === 'string') {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}

renderTop();
