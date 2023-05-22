/* 
DESCRIPTION:
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
*/

function buildTower(num) {
    let tower = [];
  
    for (let i = 1; i <= num; i++) {
      let spaces = " ".repeat(num - i);
      let stars = "*".repeat(i * 2 - 1);
      let floor = spaces + stars + spaces;
      tower.push(floor);
    }
  
    return tower;
  }
  console.log(buildTower(4))