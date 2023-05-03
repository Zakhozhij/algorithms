const app = document.querySelector("#app");
const appChilds = JSON.stringify(app.innerHTML.trim());

function findMaxLevel(str) {
  let maxLevel = 0,
    curLevel = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<" && str[i + 1] !== "/") {
      curLevel++;
    } else if (str[i] === "<" && str[i + 1] === "/") {
      if (curLevel > maxLevel) {
        maxLevel = curLevel;
      }
      curLevel--;
    }
  }
  return maxLevel;
}

console.log(findMaxLevel(appChilds));
