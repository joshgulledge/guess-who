console.log('Here are all the available people:', people);

$(document).ready(andGo);

function andGo() {
  console.log('jquery loaded');
  people.forEach((obj) => {
    $('.place-here').append(`
    <div class="image-display">
    <img src="https://github.com/${obj.githubUsername}.png?size=250" alt="Profile image of ${obj.name}">
    </div>
    `);
  });
}
