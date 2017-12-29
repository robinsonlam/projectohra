$(document).ready(() => {
  $('body').css('display', 'none');
  $('body').fadeIn(300);
  const nextPage = this.href;

  $('a').click((event) => {
    event.preventDefault();
    newLocation = event.target.href;

    $('body').fadeOut(200, newPage);
  }).bind(this);

  const newPage = () => {
    window.location = newLocation;
  };
});
