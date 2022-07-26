const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
];
const app = document.querySelector("#app");
const ul = document.createElement("ul");

app.appendChild(ul);
for (let index = 0; index < fruitList.length; index++) {
    const li = document.createElement("li")
    ul.appendChild(li);
    li.textContent = fruitList[index];
}

