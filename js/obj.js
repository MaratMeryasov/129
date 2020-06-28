class Background {
  constructor(count) {
    this._count = count;
  }

  _nodes = [];

  add(x, w, h, speed, color_idx) {
    this._nodes.push(
      new Graph({ x, y: -10, w, h, speed, color: stars_color[color_idx] })
    );
  }

  draw() {
    if (this._nodes.length < this._count) {
      this.add(
        random(0, width),
        random(1, 2),
        random(1, 2),
        random(1, 3),
        random(0, stars_color.length - 1)
      );
    }

    this._nodes.map((el, i) => {
      if (el.y > height) {
        this._nodes.splice(i, 1);
      } else {
        el.draw();
        el.y += el.speed;
      }
    });
  }
}

class Player {
  constructor() {}

  _bullet = [];

  _lastFire = Date.now();

  _player = new Graph({
    img: img_starship,
    x: width / 2 - 50,
    y: height - 110,
    w: 100,
    h: 100,
  });

  draw() {
    this._player.image();
  }

  move() {
    if (key.isDown("keyD")) this._player.x += player_speed;
    if (key.isDown("keyA")) this._player.x += player_speed;
  }
}
