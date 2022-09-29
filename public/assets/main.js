const modules = (() => {
  const AudioPlayer = (() => {
    function AudioPlayer(source) {
      const audio = document.createElement('audio');
      audio.setAttribute('src', source);
      document.body.appendChild(audio);
      this._audio = audio;
    }

    AudioPlayer.prototype.play = function (loop = false) {
      this._audio.play();
      loop &&
        this._audio.addEventListener('ended', () => {
          this._audio.play();
        });
    };

    AudioPlayer.prototype.isPlaying = function () {
      return !this._audio.paused;
    };

    AudioPlayer.prototype.stop = function () {
      this._audio.pause();
      this._audio.currentTime = 0;
    };

    return AudioPlayer;
  })();

  const INITIAL_DOCUMENT_TITLE = document.title;

  const setDocumentTitle = (targetCount) => {
    document.title = `(${targetCount}) ${INITIAL_DOCUMENT_TITLE}`;
  };

  const getRandom = (n) => Math.round(Math.random() * n);
  const getRandomMinMax = (min = 0, max = 100) => getRandom(max - min) + min;

  const getNodeList = (selector, context = document) =>
    context.querySelectorAll(selector);
  const getNode = (...args) => getNodeList(...args)[0];

  const on = (element, type, listener) => {
    element.addEventListener(type, listener);
    return () => element.removeEventListener(type, listener);
  };

  const animate = (() => {
    let stopAnimateId;
    return (render, fps) => {
      stopAnimateId = setInterval(render, 1000 / fps);
      return () => clearInterval(stopAnimateId);
    };
  })();

  return {
    AudioPlayer,
    setDocumentTitle,
    getRandom,
    getRandomMinMax,
    getNode,
    getNodeList,
    on,
    animate,
  };
})();

/* -------------------------------------------------------------------------- */

const {
  getNode: $,
  on,
  getRandomMinMax,
  animate,
  setDocumentTitle,
  AudioPlayer,
} = modules;

let targetCount;
let min = 38;
let max = 99;
let step = 1;
let count = 0;
let fps = 60;

const ticSound = new AudioPlayer('/assets/media/tic.mp3');
const shuffleSound = new AudioPlayer('/assets/media/shuffle.mp3');

const appElement = $('.App');
const countElement = $('.Count', appElement);
const buttonElement = $('.Button', appElement);

const countUp = () => (countElement.textContent = count);

const addAnimateStopClassName = () =>
  countElement.classList.add('animate-none');

const removeAnimateStopClassName = () =>
  countElement.classList.remove('animate-none');

const randomCountUp = () => {
  count = 0;
  targetCount = getRandomMinMax(min, max);

  setDocumentTitle(targetCount);
  removeAnimateStopClassName();
  shuffleSound.play(true);

  const stopAnimate = animate(() => {
    count += step;
    if (count >= targetCount) {
      count = targetCount;
      countUp();
      addAnimateStopClassName();
      stopAnimate();
      shuffleSound.stop();
    }
    countUp();
  }, fps);
};

const playTicSound = () => ticSound.play();

on(document, 'click', () => {});
on(buttonElement, 'click', randomCountUp);
on(buttonElement, 'mouseenter', playTicSound);
