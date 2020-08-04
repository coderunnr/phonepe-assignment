const Input = (title, id, type = 'text') => {

  return {
    render: `
    <label class="mdc-text-field mdc-text-field--outlined input-container ${id}">
      <input type="${type}" id="${id}" class="mdc-text-field__input" aria-labelledby="my-label-id">
      <span class="mdc-notched-outline">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <span class="mdc-floating-label" id="my-label-id">${title}</span>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>
  </label>
    `,
    afterRender: () => {
      const MDCTextField = mdc.textField.MDCTextField;

      // To make multiple inputs function independently
      new MDCTextField(document.querySelector(`.${id}`));
    }
  };
}

export default Input;