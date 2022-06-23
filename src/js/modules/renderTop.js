import { escapeHTML } from "./escapeHTML";

/**
 * トップページを表示する
 */
export const renderTop = (element) => {
  const view = escapeHTML`
  <form name="form" method="get" action="">
    <select name="range">
      <option value="1">5分</option>
      <option value="2">10分</option>
    </select>
    <select name="non_smoking">
      <option value="0">喫煙席含む</option>
      <option value="1">禁煙席のみ</option>
    </select>
  </form>
  `;
  element.innerHTML = view;
}
