const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

import Bird from "../actors/Bird.js";
import Cactus from "../actors/Cactus.js";
import Cloud from "../actors/Cloud.js";
import Dino from "../actors/Dino.js";
import sprites from "../sprites.js";
import { playSound } from "../sounds.js";
import {
  loadFont,
  loadImage,
  getImageData,
  randBoolean,
  randInteger,
} from "../utils.js";
import GameRunner from "./GameRunner.js";
// Verificar si el dispositivo es móvil

export default class DinoGame extends GameRunner {
  constructor(width, height) {
    super();
    this.width = null;
    this.height = null;
    this.canvas = this.createCanvas(width, height);
    this.canvasCtx = this.canvas.getContext("2d");
    this.spriteImage = null;
    this.spriteImageData = null;

    /*
     * units
     * fpa: frames per action
     * ppf: pixels per frame
     * px: pixels
     */
    this.defaultSettings = {
      bgSpeed: 8, // ppf
      birdSpeed: 7.2, // ppf
      birdSpawnRate: 240, // fpa
      birdWingsRate: 15, // fpa
      cactiSpawnRate: 100, // fpa
      cloudSpawnRate: 50, // fpa
      cloudSpeed: 2, // ppf
      dinoGravity: 0.6, // ppf
      dinoGroundOffset: 4, // px
      dinoLegsRate: 6, // fpa
      dinoLift: 22, // ppf
      scoreBlinkRate: 20, // fpa
      scoreIncreaseRate: 6, // fpa
    };

    this.state = {
      settings: { ...this.defaultSettings },
      birds: [],
      cacti: [],
      clouds: [],
      dino: null,
      gameOver: false,
      groundX: 0,
      groundY: 0,
      isRunning: false,
      level: 0,
      score: {
        blinkFrames: 0,
        blinks: 0,
        isBlinking: false,
        value: 0,
      },
    };
  }
  // ref for canvas pixel density:
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#correcting_resolution_in_a_%3Ccanvas%3E
  createCanvas(width, height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const scale = window.devicePixelRatio;

    this.width = width;
    this.height = height;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.width = Math.floor(width * scale);
    canvas.height = Math.floor(height * scale);
    ctx.scale(scale, scale);

    document.body.appendChild(canvas);
    return canvas;
  }

  async preload() {
    const { settings } = this.state;
    const [spriteImage] = await Promise.all([
      loadImage("./assets/sprite.png"),
      loadFont("./fonts/ABCFavoritMono-Light.woff", "Favorit"),
    ]);
    this.spriteImage = spriteImage;
    this.spriteImageData = getImageData(spriteImage);
    const dino = new Dino(this.spriteImageData);

    if (isMobile) {
      dino.width *= 2;
      dino.height *= 2;
    }

    dino.legsRate = settings.dinoLegsRate;
    dino.lift = settings.dinoLift;
    dino.gravity = settings.dinoGravity;
    dino.x = 25;
    dino.baseY = this.height - settings.dinoGroundOffset;
    this.state.dino = dino;
    this.state.groundY = this.height - sprites.ground.h / 2;

    const errorMessage = document.getElementById("error-message");
    errorMessage.style.fontSize = isMobile ? "5vw" : "20px"; // Adjust font size for mobile
    errorMessage.style.width = isMobile ? "90%" : "65%"; // Adjust font size for mobile
    errorMessage.style.fontWeight = isMobile ? "300" : "300"; // Adjust font size for mobile
    errorMessage.style.top = isMobile ? "35%" : "300"; // Adjust font size for mobile
    errorMessage.style.textAlign = isMobile ? "center" : "center";
    errorMessage.style.backgroundColor = "transparent";
    errorMessage.textContent = isMobile
      ? "OOPS, THIS PAGE DOES NOT EXIST ANYMORE... TAP THE SCREEN TO FIND THE WAY."
      : "OOPS, THIS PAGE DOES NOT EXIST ANYMORE... USE ↑ AND ↓ TO FIND THE WAY.";
  }

  onFrame() {
    const { state } = this;

    this.drawBackground();
    // this.drawFPS()
    this.drawGround();
    this.drawClouds();
    this.drawDino();
    this.drawScore();

    if (state.isRunning) {
      this.drawCacti();

      if (state.level > 3) {
        this.drawBirds();
      }

      if (state.dino.hits([state.cacti[0], state.birds[0]])) {
        playSound("game-over");
        state.gameOver = true;
      }

      if (state.gameOver) {
        this.endGame();
      } else {
        this.updateScore();
      }
    }
  }

  onInput(type) {
    const { state } = this;
    const errorMessage = document.getElementById("error-message");

    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);

    switch (type) {
      case "jump": {
        if (state.isRunning) {
          if (state.dino.jump()) {
            playSound("jump");
          }
        } else {
          this.resetGame();
          state.dino.jump();
          playSound("jump");
        }
        break;
      }

      case "duck": {
        if (state.isRunning) {
          state.dino.duck(true);
        }
        break;
      }

      case "stop-duck": {
        if (state.isRunning) {
          state.dino.duck(false);
        }
        break;
      }
    }
  }

  resetGame() {
    this.state.dino.reset();
    Object.assign(this.state, {
      settings: { ...this.defaultSettings },
      birds: [],
      cacti: [],
      gameOver: false,
      isRunning: true,
      level: 0,
      score: {
        blinkFrames: 0,
        blinks: 0,
        isBlinking: false,
        value: 0,
      },
    });

    // Eliminar el contenedor de botones del DOM
    const buttonContainer = document.querySelector(".button-container");
    if (buttonContainer) {
      buttonContainer.remove();
    }

    // Iniciar el juego nuevamente
    this.start();
  }

  endGame() {
    const padding = 15;

    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "AGAIN";
    playAgainButton.addEventListener("click", () => {
      this.resetGame();
    });

    const homeButton = document.createElement("button");
    homeButton.textContent = "HOME";
    homeButton.addEventListener("click", () => {
      buttonContainer.remove();
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.style.position = "absolute";
    buttonContainer.style.width = isMobile ? "80vw" : "40vw"; // Adjust width for mobile
    buttonContainer.style.display = "grid";
    buttonContainer.style.top = "30%";
    buttonContainer.style.gridTemplateRows = "auto";
    buttonContainer.style.gridTemplateColumns = "50% 50%";
    buttonContainer.style.justifyItems = "center";

    // Estilos para los botones
    playAgainButton.style.fontFamily = "Favorit";
    playAgainButton.style.fontSize = isMobile ? "5vw" : "20px"; // Adjust font size for mobile
    playAgainButton.style.padding = isMobile ? "10%" : "5%"; // Adjust padding for mobile
    playAgainButton.style.backgroundColor = "#FFFFFF";
    playAgainButton.style.color = "#000000";
    playAgainButton.style.border = "none";
    playAgainButton.style.cursor = "pointer";
    playAgainButton.style.width = "max-content";
    playAgainButton.style.textDecoration = "underline";
    playAgainButton.style.textDecorationThickness = "1.5px";

    homeButton.style.padding = isMobile ? "10%" : "5%"; // Adjust padding for mobile
    homeButton.style.fontSize = isMobile ? "5vw" : "20px"; // Adjust font size for mobile
    homeButton.style.fontFamily = "Favorit";
    homeButton.style.backgroundColor = "#FFFFFF";
    homeButton.style.width = "max-content";
    homeButton.style.color = "#000000";
    homeButton.style.border = "none";
    homeButton.style.cursor = "pointer";
    homeButton.style.textDecoration = "underline";
    homeButton.style.textDecorationThickness = "1.5px";
    homeButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
    homeButton.addEventListener("touchstart", () => {
      window.location.href = "index.html";
    });

    buttonContainer.appendChild(playAgainButton);
    buttonContainer.appendChild(homeButton);
    document.body.appendChild(buttonContainer);

    this.state.isRunning = false;
    this.drawScore();
    this.stop();
  }

  increaseDifficulty() {
    const { birds, cacti, clouds, dino, settings } = this.state;
    const { bgSpeed, cactiSpawnRate, dinoLegsRate } = settings;
    const { level } = this.state;

    if (level > 4 && level < 8) {
      settings.bgSpeed++;
      settings.birdSpeed = settings.bgSpeed * 0.8;
    } else if (level > 7) {
      settings.bgSpeed = Math.ceil(bgSpeed * 1.1);
      settings.birdSpeed = settings.bgSpeed * 0.9;
      settings.cactiSpawnRate = Math.floor(cactiSpawnRate * 0.98);

      if (level > 7 && level % 2 === 0 && dinoLegsRate > 3) {
        settings.dinoLegsRate--;
      }
    }

    for (const bird of birds) {
      bird.speed = settings.birdSpeed;
    }

    for (const cactus of cacti) {
      cactus.speed = settings.bgSpeed;
    }

    for (const cloud of clouds) {
      cloud.speed = settings.bgSpeed;
    }

    dino.legsRate = settings.dinoLegsRate;
  }

  updateScore() {
    const { state } = this;

    if (this.frameCount % state.settings.scoreIncreaseRate === 0) {
      const oldLevel = state.level;

      state.score.value++;
      state.level = Math.floor(state.score.value / 100);

      if (state.level !== oldLevel) {
        playSound("level-up");
        this.increaseDifficulty();
        state.score.isBlinking = true;
      }
    }
  }

  drawBackground() {
    this.canvasCtx.fillStyle = "#FFFFFF";
    this.canvasCtx.fillRect(0, 0, this.width, this.height);
  }

  drawGround() {
    const { state } = this;
    const { bgSpeed } = state.settings;
    const groundImgWidth = sprites.ground.w / 2;

    this.paintSprite("ground", state.groundX, state.groundY);
    state.groundX -= bgSpeed;

    // append second image until first is fully translated
    if (state.groundX <= -groundImgWidth + this.width) {
      this.paintSprite("ground", state.groundX + groundImgWidth, state.groundY);

      if (state.groundX <= -groundImgWidth) {
        state.groundX = -bgSpeed;
      }
    }
  }

  drawClouds() {
    const { clouds, settings } = this.state;

    this.progressInstances(clouds);
    if (this.frameCount % settings.cloudSpawnRate === 0) {
      const newCloud = new Cloud();
      newCloud.speed = settings.bgSpeed;
      newCloud.x = this.width;
      newCloud.y = randInteger(20, 80);
      clouds.push(newCloud);
    }
    this.paintInstances(clouds);
  }

  drawDino() {
    const { dino } = this.state;

    dino.nextFrame();
    this.paintSprite(dino.sprite, dino.x, dino.y);
  }

  drawCacti() {
    const { state } = this;
    const { cacti, settings } = state;

    this.progressInstances(cacti);
    if (this.frameCount % settings.cactiSpawnRate === 0) {
      // randomly either do or don't add cactus
      if (!state.birds.length && randBoolean()) {
        const newCacti = new Cactus(this.spriteImageData);
        newCacti.speed = settings.bgSpeed;
        newCacti.x = this.width;
        newCacti.y = this.height - newCacti.height - 2;
        cacti.push(newCacti);
      }
    }
    this.paintInstances(cacti);
  }

  drawBirds() {
    const { birds, settings } = this.state;

    // Verificar si es un dispositivo móvil
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isMobile) {
      return; // No mostrar pájaros en dispositivos móviles
    }

    this.progressInstances(birds);
    if (this.frameCount % settings.birdSpawnRate === 0) {
      // Aleatoriamente agregar o no agregar un pájaro
      if (randBoolean()) {
        const newBird = new Bird(this.spriteImageData);
        newBird.speed = settings.birdSpeed;
        newBird.wingsRate = settings.birdWingsRate;
        newBird.x = this.width;
        // Asegurarse de que los pájaros estén siempre al menos 5px más altos que un dinosaurio agachado
        newBird.y =
          this.height -
          Bird.maxBirdHeight -
          Bird.wingSpriteYShift -
          5 -
          sprites.dinoDuckLeftLeg.h / 2 -
          settings.dinoGroundOffset;
        birds.push(newBird);
      }
    }
    this.paintInstances(birds);
  }

  drawScore() {
    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
    const { canvasCtx, state } = this;
    const { isRunning, score, settings } = state;
    let shouldDraw = true;
    let drawValue = score.value;
    let fontSize = 23;

    let isScoreCounting = score.value > 0;

    if (isRunning && score.isBlinking) {
      score.blinkFrames++;

      if (score.blinkFrames % settings.scoreBlinkRate === 0) {
        score.blinks++;
      }

      if (score.blinks > 7) {
        score.blinkFrames = 0;
        score.blinks = 0;
        score.isBlinking = false;
      } else {
        if (score.blinks % 2 === 0) {
          drawValue = Math.floor(drawValue / 100) * 100;
        } else {
          shouldDraw = false;
        }
      }
    }

    if (isScoreCounting && shouldDraw) {
      if (isMobile()) {
        fontSize = 60;
      }

      const paddingPercentage = 20;
      const paddingValue = Math.floor(fontSize * 5 * (paddingPercentage / 100));

      this.paintText(
        (drawValue + "").padStart(5, "0"),
        this.width - paddingValue,
        0,
        {
          font: "Favorit",
          size: `${fontSize}px`,
          align: "right",
          baseline: "top",
          color: "#000000",
        }
      );
    }
  }

  /**
   * For each instance in the provided array, calculate the next
   * frame and remove any that are no longer visible
   * @param {Actor[]} instances
   */
  progressInstances(instances) {
    for (let i = instances.length - 1; i >= 0; i--) {
      const instance = instances[i];

      instance.nextFrame();
      if (instance.rightX <= 0) {
        // remove if off screen
        instances.splice(i, 1);
      }
    }
  }

  /**
   * @param {Actor[]} instances
   */
  paintInstances(instances) {
    for (const instance of instances) {
      this.paintSprite(instance.sprite, instance.x, instance.y);
    }
  }

  paintSprite(spriteName, dx, dy) {
    const { h, w, x, y } = sprites[spriteName];
    this.canvasCtx.drawImage(
      this.spriteImage,
      x,
      y,
      w,
      h,
      dx,
      dy,
      w / 2,
      h / 2
    );
  }

  paintText(text, x, y, opts) {
    const { font = "serif", size = "12px" } = opts;
    const { canvasCtx } = this;

    canvasCtx.font = `${size} ${font}`;
    if (opts.align) canvasCtx.textAlign = opts.align;
    if (opts.baseline) canvasCtx.textBaseline = opts.baseline;
    if (opts.color) canvasCtx.fillStyle = opts.color;
    canvasCtx.fillText(text, x, y);
  }
}
