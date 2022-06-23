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
  return Math.floor(Math.random() * num + 1);
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
      const detailLink = `https://www.hotpepper.jp/str${shop.id}/`;
      const view = escapeHTML`
      <header class="header">
        <div class="header__text">
          ここに行きませんか？
        </div>
      </header>
      <main class="main">
        <div class="shopInfoWrapper">
          <div class="shopInfo">
            <div class="shopInfo__heading">
              <p class="shopGenreName">${shop.genre.catch}</p>
              <p class="shopName">${shop.name}</p>
              <p class="shopGenreName">${shop.genre.name}</p>
              <p class="shopInfo__shopImage">
                <img src="${shop.logo_image}" alt="${shop.name}">
              </p>
              <p class="creditImage">【画像提供:ホットペッパー グルメ】</p>
            </div>
            <div class="shopInfo__detail">
              <table class="table">
                <tr>
                  <th class="table__title">【営業時間】</th>
                </tr>
                <tr>
                  <td class="table__body">${shop.open}</td>
                </tr>
                <tr>
                  <th class="table__title">【平均予算】</th>
                </tr>
                <tr>
                  <td class="table__body">${shop.budget.average}</td>
                </tr>
              </table>
              <a href=${detailLink}>詳細を見る</a>
              <div class="googleMap">
                <p>${shop.lat}</p>
                <p>${shop.lng}</p>
              </div>
              <table class="table">
                <tr>
                  <th class="table__title">【住所】</th>
                </tr>
                <tr>
                  <td class="table__body">${shop.address}</td>
                </tr>
              </table>
            </div>
          </div>
          <button class="searchButton">
            別の店を探す
          </button>
          <a href="/">トップページに戻る</a>
        </div>
      </main>
      <footer>
        <p>Powered by <a href="http://webservice.recruit.co.jp/">ホットペッパー Webサービス</a></p>
        <p>©︎bitA Inc. 2022</p>
      </footer>
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
