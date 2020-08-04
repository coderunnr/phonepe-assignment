const Header = (title) => {

  return {
    render: `
    <div class="header">
      <span class="material-icons header-icon">
        directions_car
      </span>
      <span class="header-title">${title}</span>
    </div>
    `,
    afterRender: () => {
    }
  };
}

export default Header;