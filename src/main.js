const CARDS_COUNT = 5;
const EXTRA_SECTIONS_COUNT = 2;
const EXTRA_CARDS_COUNT = 2;

import {createNavigationTemplate} from "./view/navigation.js";
import {createProfileRankTemplate} from "./view/profile-rank.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createBoardTemplate} from "./view/films-board.js";
import {createFilmCardTemplate} from "./view/card.js";
import {createShowMoreTemplate} from "./view/show-more.js";
import {createFilmDetailsTemplate} from "./view/film-details.js";
import {createFilmsExtraTemplate} from "./view/extra-board.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const body = document.querySelector(`body`);
const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

render(header, createProfileRankTemplate(), `beforeend`);
render(main, createNavigationTemplate(), `beforeend`);
render(main, createSortingTemplate(), `beforeend`);
render(main, createBoardTemplate(), `beforeend`);

const board = main.querySelector(`.films`);
const films = board.querySelector(`.films-list__container`);

for (let i = 0; i < CARDS_COUNT; i++) {
  render(films, createFilmCardTemplate(), `beforeend`);
}

render(board, createShowMoreTemplate(), `beforeend`);
render(body, createFilmDetailsTemplate(), `beforeend`);

for (let i = 0; i < EXTRA_SECTIONS_COUNT; i++) {
  render(board, createFilmsExtraTemplate(), `beforeend`);
}
const extraBoard = board.querySelector(`.films-list--extra`);
const extraBoardTitle = extraBoard.querySelector(`h2`);
extraBoardTitle.textContent = `Top rated`;

const extras = board.querySelectorAll(`.films-list--extra .films-list__container`);
extras.forEach((extra) => {
  for (let j = 0; j < EXTRA_CARDS_COUNT; j++) {
    render(extra, createFilmCardTemplate(), `beforeend`);
  }
});
