$(document).ready(andGo);
let selector;

function andGo() {
  selector = randomNumber(0, people.length - 1);

  renderData();

  // add event listener on images
  $(document).on('click', 'img', imgClicked);
}

function renderData() {
  // prompt for selection
  $('.place-header-here').append(`
    <h1>
      Please select ${people[selector].name}
    </h1>

  `);

  // display all peeps
  people.forEach((obj, index) => {
    let img = $(`
    <div class="image-display">
      <img src="https://github.com/${obj.githubUsername}.png?size=250" alt="Profile image of ${obj.name}" id="${index}">
    </div>
    `);

    img.find('img').data('person', obj);

    $('.place-image-here').append(img);
  });
}

function imgClicked() {
  // identify the person
  const whoAmI = $(this).data('person');

  console.log('whoAmI', whoAmI);
  console.log(people[selector].name);
  // see if "this" person matches the
  // name of the selector person

  if (whoAmI.name === people[selector].name) {
    alert('You are correct!');
    $('.place-header-here').empty();
    $('.place-image-here').empty();
    // make new selector
    selector = randomNumber(0, people.length - 1);
    // render data again
    renderData();
  } else {
    alert('Sorry, incorrect. Try again');
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
