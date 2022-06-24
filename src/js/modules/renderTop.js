import {escapeHTML} from "./escapeHTML";
import {fetchShopInfo} from "./fetchShopInfo";

/**
 * トップページを表示する
 */
export const renderTop = (element) => {
  element.innerHTML = escapeHTML`
  <form name="form" method="get" action="">
    <select name="range" class="js-selectRange">
      <option value="1">5分</option>
      <option value="2">10分</option>
    </select>
    <select name="smoking" class="js-selectSmoking">
      <option value="0">喫煙席含む</option>
      <option value="1">禁煙席のみ</option>
    </select>
    <button type="button" class="searchButton js-search">検索する</button>
  </form>
  `;

  const searchButton = document.querySelector('.js-search');
  searchButton.addEventListener('click', () => {
    const rangeValue = document.querySelector(".js-selectRange").value;
    const smokingValue = document.querySelector(".js-selectSmoking").value;
    fetchShopInfo(element, rangeValue, smokingValue);
  });
}
