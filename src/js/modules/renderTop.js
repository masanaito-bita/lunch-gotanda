import { escapeHTML } from "./escapeHTML";
import { fetchShopInfo } from "./fetchShopInfo";

/**
 * トップページを表示する
 */
export const renderTop = (element) => {
  element.innerHTML = escapeHTML`
  <header class="header">
    <div class="header__text">
      <p>飲食店を提案します！</p>
    </div>
  </header>
  <main class="main">
    <div class="topWrapper">
      <p class="announce">条件を選んでください。</p>
      <form name="form" method="get" action="">
        <div class="buttonWrapper">
          <button value="1" type="button" name="range" class="selectButton selectButton--left js-selectRange1 js-chosenRange">
            <p class="text01">本丸から</p>
            <p class="text02">5分</p>
            <p class="text03">以内</p>
          </button>
          <button value="2" type="button" name="range" class="selectButton selectButton--right js-selectRange2 selectButton--disabled js-notChosenRange">
            <p class="text01">本丸から</p>
            <p class="text02">10分</p>
            <p class="text03">以内</p>
          </button>
        </div>
        <div class="buttonWrapper">
          <button value="0" type="button" name="range" class="selectButton selectButton--left js-selectSmoking0 js-chosenSmoking">
            <p class="text04">喫煙可含む</p>
            <div class="smokingIcon">
              <svg class="icon icon-tabler icon-tabler-smoking" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"></path><rect height="4" rx="1" width="18" x="3" y="13"></rect><line x1="8" x2="8" y1="13" y2="17"></line><path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"></path></svg>
            </div>
          </button>
          <button value="1" type="button" name="range" class="selectButton selectButton--right js-selectSmoking1 selectButton--disabled js-notChosenSmoking">
            <p class="text04">禁煙席のみ</p>
            <div class="smokingIcon">
              <svg class="icon icon-tabler icon-tabler-smoking-no" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"></path><line x1="8" x2="8" y1="13" y2="17"></line><path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"></path><line x1="3" x2="21" y1="3" y2="21"></line><path d="M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9"></path></svg>
            </div>
          </button>
        </div>
        <p class="searchButtonParent">
          <button type="button" class="searchButton js-search">検索する</button>
        </p>
      </form>
    </div>
  </main>
  <footer class="footer">
    <div>Powered by <a class="creditLink" href="http://webservice.recruit.co.jp/">ホットペッパー Webサービス</a></div>
    <div>©bitA Inc. 2022</div>
  </footer>
  `;

  // 距離ボタン選択
  const selectRange1 = document.querySelector(".js-selectRange1");
  const selectRange2 = document.querySelector(".js-selectRange2");

  selectRange2.addEventListener('click', () => {
    console.log(selectRange2.classList.contains('js-notChosenRange'));
    if (selectRange2.classList.contains('js-notChosenRange')) {
      console.log("changed......");
      selectRange2.classList.remove('selectButton--disabled');
      selectRange2.classList.remove('js-notChosenRange');
      selectRange2.classList.add('js-chosenRange');

      selectRange1.classList.remove('js-chosenRange')
      selectRange1.classList.add('js-notChosenRange')
      selectRange1.classList.add('selectButton--disabled')
    }
  })

  selectRange1.addEventListener('click', () => {
    console.log(selectRange1.classList.contains('js-notChosenRange'));
    if (selectRange1.classList.contains('js-notChosenRange')) {
      console.log("changed......");
      selectRange1.classList.remove('selectButton--disabled');
      selectRange1.classList.remove('js-notChosenRange');
      selectRange1.classList.add('js-chosenRange');

      selectRange2.classList.remove('js-chosenRange')
      selectRange2.classList.add('js-notChosenRange')
      selectRange2.classList.add('selectButton--disabled')
    }
  })

  // 喫煙ボタン選択
  const selectSmoking0 = document.querySelector(".js-selectSmoking0");
  const selectSmoking1 = document.querySelector(".js-selectSmoking1");

  selectSmoking0.addEventListener('click', () => {
    console.log(selectSmoking0.classList.contains('js-notChosenSmoking'));
    if (selectSmoking0.classList.contains('js-notChosenSmoking')) {
      console.log("changed......");
      selectSmoking0.classList.remove('selectButton--disabled');
      selectSmoking0.classList.remove('js-notChosenSmoking');
      selectSmoking0.classList.add('js-chosenSmoking');

      selectSmoking1.classList.remove('js-chosenSmoking')
      selectSmoking1.classList.add('js-notChosenSmoking')
      selectSmoking1.classList.add('selectButton--disabled')
    }
  })

  selectSmoking1.addEventListener('click', () => {
    console.log(selectSmoking1.classList.contains('js-notChosenSmoking'));
    if (selectSmoking1.classList.contains('js-notChosenSmoking')) {
      console.log("changed......");
      selectSmoking1.classList.remove('selectButton--disabled');
      selectSmoking1.classList.remove('js-notChosenSmoking');
      selectSmoking1.classList.add('js-chosenSmoking');

      selectSmoking0.classList.remove('js-chosenSmoking')
      selectSmoking0.classList.add('js-notChosenSmoking')
      selectSmoking0.classList.add('selectButton--disabled')
    }
  })

  const searchButton = document.querySelector('.js-search');
  searchButton.addEventListener('click', () => {
    const rangeValue = document.querySelector(".js-chosenRange").value;
    const smokingValue = document.querySelector(".js-chosenSmoking").value;
    fetchShopInfo(element, rangeValue, smokingValue);
  });
}
