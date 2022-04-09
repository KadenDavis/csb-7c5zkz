/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ShoppingCart extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Left", "./ShoppingCart/costumes/Left.svg", {
        x: 69.5,
        y: 59.19998500000003
      }),
      new Costume("Right", "./ShoppingCart/costumes/Right.svg", {
        x: 69.5,
        y: 59.19998500000004
      })
    ];

    this.sounds = [new Sound("Meow", "./ShoppingCart/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenIReceiveStart() {
    this.stage.vars.points = 0;
    this.broadcast("Catch");
    this.goto(0, -70);
    while (true) {
      if (this.keyPressed("left arrow") || this.keyPressed("a")) {
        this.costume = "Left";
        this.x += -5;
      }
      if (this.keyPressed("right arrow") || this.keyPressed("d")) {
        this.costume = "Right";
        this.x += 5;
      }
      yield;
    }
  }
}
