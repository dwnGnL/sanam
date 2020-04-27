let headerHeight = document.querySelector('#header').clientHeight;

window.onscroll = () => {
  window.pageYOffset >= headerHeight ? document.body.classList.add('sticky') : document.body.classList.remove('sticky')
}
