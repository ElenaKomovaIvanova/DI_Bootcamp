const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

let gemeInfoNames = gameInfo.map(user => `${user.username}!`);   
console.log(gemeInfoNames);

const winners = gameInfo.filter(user => user.score > 5).map(user => user.username);
console.log(winners);

let totalScore = gameInfo.reduce((accumulator, currentValue) => accumulator + currentValue.score,0);
console.log(totalScore);

