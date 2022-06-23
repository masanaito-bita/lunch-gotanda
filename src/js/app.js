import { renderTop } from "./modules/renderTop";
import { fetchShopInfo } from "./modules/fetchShopInfo";

(function () {
  console.log("reading app.js")
  const app = document.querySelector('.app');
  const searchButton = document.querySelector('.searchButton');
  searchButton.addEventListener('click', () => { fetchShopInfo(app) });

  renderTop(app);
  // fetchShopInfo(app);
}());
