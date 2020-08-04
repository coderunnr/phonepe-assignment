const ListItem = (item) => {
  
  const { name, id, eta, rating, route, car, available } = item;

  return {
    render: `
    <div id="${id}" class="search-result-item">
    <span class="material-icons item-result-icon">
      account_circle
    </span>
      <div>
        <div>
          <span class="search-result-title">${name}</span>
          <span class="search-result-eta">${eta} away</span>
        </div>
        <div>
          <span>route:</span>
          <span class="search-result-bold">${route}</span>
        </div>
        <div>
          <span>car:</span>
          <span class="search-result-bold">${car}</span>
        </div>
        <div>
          <span>seats available:</span>
          <span class="search-result-bold">${available}</span>
        </div>
      </div>
      <div class="search-result-rating">
        <span>${rating} |</span>
        <span class="material-icons">
          star_rate
        </span>
      </div>
    </div>
    `,
    afterRender: () => {

    }
  };
}

export default ListItem;