//Инициализация переменных
const newsSlider = document.querySelector('.news-slider');
const sliderLine = document.querySelector('.slider-line');
const images = document.querySelectorAll('.news-slider .slider-line img');
let curImage = 0;
let x1 = null;
let y1 = null;

console.log(images);

//Получение нажатий
document.addEventListener('touchstart', HandletouchStart, false);
document.addEventListener('touchmove', HandletouchMove, false);

//Настройка размеров слайдера
let imgWidth = document.querySelector('.slider-line').clientWidth;
let imgsHeight = document.querySelector('.slider-line').clientHeight;

rollSlider(0)

//Нажатие - старт
function HandletouchStart(event) {

  const FirstTouch = event.touches[0];
  x1 = FirstTouch.clientX;
  y1 = FirstTouch.clientY;

}

//Нажатие - движение
function HandletouchMove(event) {

  images.forEach(element => {

    console.log(event.target);
    if (event.target == element) {

      if (!x1 || !y1) {
        return false;
      }

      let x2 = event.touches[0].clientX;
      let y2 = event.touches[0].clientY;

      let xDiff = x2 -x1;
      let yDiff = y2 -y1;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        //r - l
        if (xDiff > 0) {
          curImage--;
          if (curImage < 0) {
            curImage = images.length - 1;
          }
        }
        else {
          curImage++;
          if (curImage >= images.length) {
            curImage = 0;
          }
        } 
        rollSlider(curImage);
      }
      else {
        //d - t
        if (yDiff > 0) console.log('down');
        else console.log('top');
      }
      
      x1 = null;
      y1 = null;

    }

});

}

//Передвинуть картинку слайдера
function rollSlider(curImage) {

  console.log(imgWidth);
  let curShift = curImage * (imgWidth/images.length);
  sliderLine.style.transform = 'translate(-' + curShift + 'px)';

  // let curTitle = "";
  // let newsTitle = document.getElementById('news-caption');

  // switch (curImage) {
  // case 0:
  //   curTitle = "Я - судостроитель. ВДЦ 'Океан'";
  //   break;
  // case 1:
  //   curTitle = "Праздник к нам приходит";
  //   break;
  // case 2:
  //   curTitle = "Выставка-форум 'Россия'. ВДХ";
  //   break;
  // case 3:
  //   curTitle = "Новогодний КВИЗ БК";
  //   break;
  // default:
  //   curTitle = "Лента новостей";
  // }

  // newsTitle.textContent = curTitle;
}