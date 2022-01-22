import Storage from './storage.js';
import Display from './chart.js';
import View from './view.js';

export default class App {
  constructor(root) {
    console.log(root);
    new Display(root);
  }
}
