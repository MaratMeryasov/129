class Keys {
  constructor() {
    document.addEventListener("keyup", (e) => {
      this._clear(e.keyCode);
    });

    document.addEventListener("keydown", (e) => {
      this._set(e.keyCode);
    });
  }

  _keyDown = [];

  _set(code) {
    this._keyDown[code] = true;
  }

  _clear(code) {
    this._keyDown[code] = false;
  }

  isDown(code) {
    return this._keyDown[code] === true;
  }
}

const key = new Keys();
