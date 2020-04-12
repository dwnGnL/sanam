let desctopParalax = true;

paralaxControl();
window.addEventListener('resize', paralaxControl);
window.addEventListener('mousemove', movingElement);

function paralaxControl() {
  if (document.body.clientWidth < 992) {
    desctopParalax = false;
    document.body.style.backgroundPosition = 'center'
  } else {
    desctopParalax = true;
  };
};

function movingElement(event) {
  if (desctopParalax) {
    let left = event.clientX / 100;
    let top = event.clientY / 66;

    document.body.style.backgroundPosition = -left + 'px ' + -top + 'px'
  };
};