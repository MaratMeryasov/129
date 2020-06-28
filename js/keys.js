class Keys {
  constructor() {
    document.addEventListener("keyup", (e) => {
      this._clear(e.code);
    });

    document.addEventListener("keydown", (e) => {
      this._set(e.code);
    });
  }

  _keyDown = [];

  _set(code) {
    this.keyDown[code] = true;
  }

  _clear(code) {
    this._keyDown[code] = false;
  }

  isDown(code) {
    return this._keyDown[code] === false;
  }
}

const key = new Keys();
