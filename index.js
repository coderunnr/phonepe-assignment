import Login from './views/Login.js';
import Signup from './views/Signup.js';
import Search from './views/Search.js';

const routes = {
  '/': Login,
  'search': Search,
  'signup': Signup
};


const router = async () => {

  const content = null || document.getElementById('main_container');

  const url = window.location.href.split('#')[1] || '/';
  
  let page = routes[url]();
  content.innerHTML = page.render;
  page.afterRender();

}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);