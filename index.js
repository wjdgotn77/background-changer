'use strict';

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

// 랜덤 6자리 색상코드 출력하는 함수
function getHexColor (){
  let numbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  let result = "#";

  for (let i = 0; i < 6; i++){
    const randomNum = Math.floor(Math.random() * numbers.length);
    result += numbers[randomNum];
  }
  return result;
}

// 클릭이벤트가 발생할 때마다 랜덤코드가 생성되고 출력되야함!!!
function handleClick(){
  const hexColor = getHexColor(); //이게 핵심임!
  h1.innerText = `HEX COLOR: ${hexColor}`;
  body.style.backgroundColor = `${hexColor}`;
}

function init(){
  btn.addEventListener("click",handleClick);
}
init();


