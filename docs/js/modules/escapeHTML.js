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
 export function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === 'string') {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}
