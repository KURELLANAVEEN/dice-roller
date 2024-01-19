button.onclick = () => {
  let values = [];
  let images = [];
  const text = document.getElementById("text").value;
  const button = document.getElementById("button");
  const dresult = document.getElementById("dresult");
  const dimage = document.getElementById("dimage");
  const solution = document.getElementById("solution");

  for (let i = 0; i < text; i++) {
    let num = Math.floor(Math.random() * 6) + 1;
    values.push(num);
    images.push(
      `<img src="./images/${num}.png.png" alt="Dice ${num}" style='width:40px; height:40px'>`
    );
  }

  let flag = Boolean(text);
  if (!flag) {
    window.alert("Please enter a nnumber");
  } else {
    solution.style.textAlign = "center";
    solution.style.maxWidth = "400px";
    solution.style.margin = "auto";
    solution.style.fontFamily = "sans-serif, Arial, Helvetica";
    solution.style.backgroundColor = "hsla(0, 0%, 62%, 0.562)";
    solution.style.marginTop = "40px";
    solution.style.padding = "30px";
    solution.style.boxShadow = "5px 5px 5px hsla(0, 0%, 3%, 0.993)";
    solution.style.borderBottom = "rgb(2, 184, 41) 5px solid";
    solution.style.borderTop = "rgb(2, 184, 41) 5px solid";
    solution.style.borderRadius = "10px";
    dresult.style.margin = "10px";
    dresult.textContent = [...values];
    dimage.innerHTML = images.join(" ");
  }
};
