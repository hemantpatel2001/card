let cardsArr = ['clubs-A', 'clubs-2', 'clubs-3', 'clubs-4', 'clubs-5', 'clubs-6', 'clubs-7', 'clubs-8', 'clubs-9', 'clubs-10', 'clubs-J', 'clubs-Q', 'clubs-K', 'diamonds-A', 'diamonds-2', 'diamonds-3', 'diamonds-4', 'diamonds-5', 'diamonds-6', 'diamonds-7', 'diamonds-8', 'diamonds-9', 'diamonds-10', 'diamonds-J', 'diamonds-Q', 'diamonds-K', 'hearts-A', 'hearts-2', 'hearts-3', 'hearts-4', 'hearts-5', 'hearts-6', 'hearts-7', 'hearts-8', 'hearts-9', 'hearts-10', 'hearts-J', 'hearts-Q', 'hearts-K', 'spades-A', 'spades-2', 'spades-3', 'spades-4', 'spades-5', 'spades-6', 'spades-7', 'spades-8', 'spades-9', 'spades-10', 'spades-J', 'spades-Q', 'spades-K']
playerData = {}
function suffleCard() {
  cardsArr.sort(function () {
    return Math.round(Math.random() * 1234) % 2 == 0 ? 1 : -1;
  })
}

document.getElementById("ditribue-card").addEventListener("click", () => {
  suffleCard()

  var playerVal = document.getElementById("player").value
  var cpyCardArr = [...cardsArr]
  var cardNumberToPlayer = Math.floor(cardsArr.length / playerVal)
  for (var i = 1; i <= playerVal; i++) {
    playerData[`player-${i}`] = cpyCardArr.splice(0, cardNumberToPlayer)
    updateUi()
  console.log(playerData)
  }

})
function updateUi() {
  stringHtml = ""
  for (player in playerData) {
    let rowData = `<tr>
   <td>${player}</td>
   <td>${playerData[player].join("||")}</td></tr>`
    stringHtml += rowData
  }
  document.getElementById("tbody").innerHTML = stringHtml
}

/*one by one*/

// function suffleArr() {
//   cardsArr.sort(function () {
//     return random = Math.floor(Math.random() * 1235) % 2 == 0 ? 1 : -1;
//   })
// }

// function playerInGame(playerNumber) {
//   for (var i = 1; i <= playerNumber; i++) {
//     playerData[`player-${i}`] = []
//   }
// }
// document.getElementById("ditribue-card").addEventListener("click", () => {
//   const playerNumber = parseInt(document.getElementById("player").value)
//   suffleArr()
//   playerInGame(playerNumber)
//   cardsArr.forEach((card, index) => {
//     const cardPerPlayer = (index % playerNumber) + 1
//     playerData[`player-${cardPerPlayer}`].push(card)
//     updateUi()
//   })

// })

// function updateUi() {
//     stringHtml = ""
//     for (player in playerData) {
//       let rowData = `<tr>
//      <td>${player}</td>
//      <td>${playerData[player].join("**")}</td></tr>`
//       stringHtml += rowData
//     }
//     document.getElementById("tbody").innerHTML = stringHtml
//   }