import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function SavedTime() {
  player.getCurrentTime().then(function (currtime) {
    localStorage.setItem('videoplayer-current-time', currtime);
  });
};
player.on('timeupdate', throttle(SavedTime, 1000));

function VideoTime() {
  const gettime = localStorage.getItem('videoplayer-current-time',);
  player
    .setCurrentTime(gettime)
    .then(function (e) {})
    .catch(function (error) {});
}
window.addEventListener('load', function () {
  VideoTime();
});
