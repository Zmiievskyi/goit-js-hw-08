import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let time = 0;


player.on(
  'timeupdate',
  _.throttle(e => {
    console.log(e.seconds);
    time = e.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  }, 1000)
);


player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (time) {
    // console.log(time);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });