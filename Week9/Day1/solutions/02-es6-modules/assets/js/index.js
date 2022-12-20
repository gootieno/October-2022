import Game from "./game.js";
// same as just different name
// import GameFile from "./game.js";
import { randomString } from "./game.js";

window.onload = () => {
  console.log(randomString);
  const game = new Game();
  game.start();
};
