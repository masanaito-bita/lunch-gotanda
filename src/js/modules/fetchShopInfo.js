import { escapeHTML } from "./escapeHTML";
import { renderTop } from "./renderTop";

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


/**
 * 飲食店情報を返す
 */
export const fetchShopInfo = (element) => {
  // // 距離パラメータ
  // const rangeValue = document.querySelector(".js-selectRange").value;
  // const RANGE = `range=${rangeValue}`;
  // console.log(RANGE);

  // // 禁煙席パラメータ
  // const smokingValue = document.querySelector(".js-selectSmoking").value;
  // const SMOKING = `non_smoking=${smokingValue}`;
  // console.log(SMOKING);

  // fetch(`${URL}&${RANGE}&${SMOKING}`).then(async function (response) {
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
          <p>ここに行きませんか？</p>
        </div>
      </header>
      <main class="main">
        <div class="shopInfoWrapper">
          <div class="shopInfo">
            <div class="shopInfo__heading">
              <p class="shopGenreCatch">${shop.genre.catch}</p>
              <p class="shopName">${shop.name}</p>
              <p class="shopGenreName">${shop.genre.name}</p>
              <p class="shopInfo__shopImage">
                <img src="${shop.logo_image}" alt="${shop.name}" width="200" height="200">
              </p>
              <p class="creditImage">【画像提供:ホットペッパー グルメ】</p>
            </div>
            <div class="shopInfo__detail">
              <table class="table">
                <tr>
                  <th class="table__head">【営業時間】</th>
                </tr>
                <tr>
                  <td class="table__data">${shop.open}</td>
                </tr>
                <tr>
                  <th class="table__head">【平均予算】</th>
                </tr>
                <tr>
                  <td class="table__data">${shop.budget.average}</td>
                </tr>
              </table>
              <div class="linkParent">
                <a href=${detailLink} class="link">詳細を見る▶︎</a>
              </div>
              <div class="googleMap">
                <iframe width="300" height="250"
                  src="http://maps.google.co.jp/maps?output=embed&q=${shop.name}@${shop.address}&;
                  t=m&;z=20"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen
                  >
                </iframe>
              </div>
              <table class="table">
                <tr>
                  <th class="table__head">【住所】</th>
                </tr>
                <tr>
                  <td class="table__data">${shop.address}</td>
                </tr>
              </table>
            </div>
          </div>
          <p class="searchButtonParent">
            <button class="searchButton js-search">再検索する</button>
          </p>
          <div class="linkParent">
            <a href="/" class="link js-top">トップページに戻る</a>
          </div>
        </div>
      </main>
      <footer class="footer">
        <p class="footer__hotpepper">Powered by <a class="creditLink" href="http://webservice.recruit.co.jp/">ホットペッパー Webサービス</a></p>
        <p class="footer__credit">©bitA Inc. 2022</p>
      </footer>
      `;
      // HTMLの挿入
      element.innerHTML = view;
      const searchButton = document.querySelector('.js-search');
      searchButton.addEventListener('click', () => { fetchShopInfo(element) });
      const topLink = document.querySelector('.js-top');
      topLink.addEventListener('click', () => { renderTop(element) });
    }
  });
}
