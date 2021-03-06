let width, height;

const ctx = (() => {
  const _cnv = document.createElement("canvas"),
    _ctx = _cnv.getContext("2d");

  const _resize = () => {
    width = _cnv.width = window.innerWidth;
    height = _cnv.height = window.innerHeight;
  };

  _resize();
  window.addEventListener("resize", _resize);

  document.querySelector(".canvas").appendChild(_cnv);

  return _ctx;
})();

const _rendered = (() => {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
})();

let _game = () => console.log("Game is not loaded");

const setGame = (game) => {
  if (typeof game === "function") _game = game;
};

const startGame = (game) => {
  setGame(game);

  _game();
  _rendered(startGame);
};
