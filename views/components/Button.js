const Button = (title, click, id) => {

  return {
    render: `
      <button id="${id}" class="mdc-button mdc-button--raised"">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">${title}</span>
      </button>
    `,
    afterRender: () => {
      const MDCRipple = mdc.ripple.MDCRipple;

      new MDCRipple(document.querySelector('.mdc-button'));

      document.getElementById(id).addEventListener('click', click);
    }
  };
}

export default Button;