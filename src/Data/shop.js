// import axios from 'axios';
import _items from './mock/items.json'
import _categories from './mock/categories.json'
import _latestMovie from './mock/items.json'
import _groups from './mock/group.json'

// const jsonUrl ="127.0.0.1:8181/allitem?limit=5&page=1";

// getProducts = async () => {
//     const res = await axios.get(jsonUrl);
// }

/**
 * Mocking client-server processing
 */

export const delayGroup = ms => new Promise(res => setTimeout(function () {
  return _groups
}, ms));

const TIMEOUT = 100

export default {
  getMovies: (cb, timeout) => setTimeout(() => cb(_items), timeout || TIMEOUT),
  getGroups: (cb, timeout) => setTimeout(() => cb(_groups), timeout || TIMEOUT),
  getCategories: (cb, timeout) => setTimeout(() => cb(_categories), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)

}
