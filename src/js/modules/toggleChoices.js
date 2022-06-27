/**
 * 条件選択ボタンの値を選択する機能
 * @param {Element} notChoiceElement
 * @param {Element} choiceElement
 */
export const toggleChoices = (notChoiceElement, choiceElement) => {
  notChoiceElement.addEventListener('click', () => {
    const choice = (notChoiceElement.name === 'range') ? 'Range' : 'Smoking';

    if (notChoiceElement.classList.contains(`js-notChosen${choice}`)) {
      notChoiceElement.classList.remove(`selectButton--disabled`);
      notChoiceElement.classList.remove(`js-notChosen${choice}`);
      notChoiceElement.classList.add(`js-chosen${choice}`);

      choiceElement.classList.remove(`js-chosen${choice}`)
      choiceElement.classList.add(`js-notChosen${choice}`)
      choiceElement.classList.add(`selectButton--disabled`)
    }
  })
}
