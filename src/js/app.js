import { renderTop } from "./modules/renderTop";
import { fetchShopInfo } from "./modules/fetchShopInfo";



(function () {
  //処理
  console.log("reading app.js")
// 選択されたパラメータを検索機能に渡す

// 渡されたviewを表示させる
const app = document.querySelector('.app');
const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', () => { fetchShopInfo(app) });

renderTop(app);
// fetchShopInfo(app);

}());
