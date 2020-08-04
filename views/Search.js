import Header from './components/Header.js';
import Input from './components/Input.js';
import ListItem from './components/ListItem.js';
import Button from './components/Button.js';

import result from '../mocks/routeData.js';

const Search = () => {

  const onSearchClick = () => {
    if (true || document.getElementById('search-start').value && document.getElementById('search-end').value) {
      document.querySelector('.search-result-container').innerHTML = items.map((item) => {
        return item.render;
      }).join('\n') 
      return;
    }
    alert('Please Enter Start and Destination');
  };
  const header = Header('LOGIN TO APP');
  const start = Input('Start From', 'search-start');
  const end = Input('Destination', 'search-end');

  const search = Button('Search', onSearchClick, 'search-btn');

  const items = result.map((item) => {
    return ListItem(item);
  })

  return{
    render: `
    ${header.render}
    <div class="search-container">
      <section class="search-input-container">
        <div class="search-start-container">
          ${start.render}
        </div>
        <div class="search-end-container">
          ${end.render}
        </div>
      </section>
      ${search.render}
      <section class="search-result-container">
      </section>
    </div>
  `,
    afterRender: () => {
      start.afterRender();
      end.afterRender();
      search.afterRender();
      items.map((item) => {
        return item.afterRender();
      })
    }
  }
};

export default Search;
