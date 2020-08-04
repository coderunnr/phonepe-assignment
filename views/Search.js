import Input from './components/Input.js';

const Search = () => {
  const input = Input();
  return{
    render: `
    ${input.render}
  `,
    afterRender: () => {
      input.afterRender();
    }
  }
};

export default Search;
