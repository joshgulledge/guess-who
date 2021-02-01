$(document).ready(andGo);

function andGo() {
  const selector = randomNumber(0, people.length - 1);

  // prompt for selection
  $('.place-header-here').append(`
    <h1>
      Please select ${people[selector].name}
    </h1>

  `);

  // display all peeps
  people.forEach((obj) => {
    $('.place-image-here').append(`
    <div class="image-display">
    <img src="https://github.com/${obj.githubUsername}.png?size=250" alt="Profile image of ${obj.name}">
    </div>
    `);
  });
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
