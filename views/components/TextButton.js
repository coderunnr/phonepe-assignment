const TextButton = (title,  click, id = '') => {

  return {
    render: `
      <button id="${id}" class="mdc-button">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">${title}</span>
      </button>
    `,
    afterRender: () => {
      document.getElementById(id).addEventListener('click', click);
    }
  };
}

export default TextButton;