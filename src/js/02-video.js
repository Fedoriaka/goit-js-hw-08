import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currtime = 0;
player.on('timeupdate', function (e) {
  currtime = e.seconds;
  localStorage.setItem('videoplayer-current-time', currtime);
});

function VideoTime() {
  const gettime = localStorage.getItem('videoplayer-current-time', currtime);
  player
    .setCurrentTime(gettime)
    .then(function (e) {})
    .catch(function (error) {});
}
window.addEventListener('load', function () {
  VideoTime();
});
