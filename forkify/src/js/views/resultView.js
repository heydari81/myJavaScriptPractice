import View from './View.js';
import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'nothing';
  _defaultMessage = 'default Message';
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(res => this._generateMarkupPreview(res)).join('');
  }
  _generateMarkupPreview(res) {
    return `<li class="preview">
            <a class="preview__link" href="#${res.id}">
              <figure class="preview__fig">
                <img src="${res.image}" alt="${res.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${res.title}</h4>
                <p class="preview__publisher">${res.publisher}</p>
              </div>
            </a>
          </li>`;
  }
}
export default new ResultsView(); // explain later
