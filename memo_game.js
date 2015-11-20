var currentPlayer = 'one'
var first_pick = 0
var second_pick = 0
var first_pick_card
// var score2
var back_card = 'images/Back_card.jpeg'
var front_card = ['images/img1.png', 'images/img2.png', 'images/img2.png', 'images/img1.png', 'images/img3.png', 'images/img3.png', 'images/img4.jpeg', 'images/img4.jpeg', 'images/img5.png', 'images/img5.png', 'images/img6.png', 'images/img6.png', 'images/img7.png', 'images/img7.png', 'images/img8.png', 'images/img8.png', 'images/img9.png', 'images/img9.png']
// var num_matches = 0.5 * (front_card.length)

front_card.sort(function () { return 0.5 - Math.random() })

var body = document.querySelector('body')
body.addEventListener('click', function (event) {
  var card = event.target
  if (card.className !== 'cards') return  // get out of the function if click not on card.
  card.src = front_card[card.id]

  if (first_pick) {
    second_pick = front_card[card.id]
    if (currentPlayer === 'one') {
      if (first_pick === second_pick) { // check if same pic for both cards

      } else {
        setTimeout(function () {
          card.src = back_card
          first_pick_card.src = back_card
        }, 2000)
      }
    // }else if (currentPlayer === 'two') {
      first_pick = 0
      second_pick = 0
    }
  } else {
    first_pick = front_card[card.id]
    first_pick_card = card
    second_pick = 0
  }
})
