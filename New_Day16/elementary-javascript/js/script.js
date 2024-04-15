//id名で取得
console.log(document.querySelector("#js-title").outerHTML);
console.log(document.getElementById("js-title").outerHTML);

//class名で取得
const elements = document.querySelectorAll(".text");
console.log(elements);
for(let element of elements){
	console.log(element.outerHTML);
}

const elements2 = document.getElementsByClassName("text");
console.log(elements2);
for(let element of elements2){
	console.log(element.outerHTML);
}

//タグ名で取得
console.log(document.querySelector("h1").outerHTML);
const elements3 = document.getElementsByTagName("h1");
console.log(elements3);
for(let element of elements3){
	console.log(element.outerHTML);
}

//属性で取得
console.log(document.querySelector('[href="https://www.daily-trial.com/"]').outerHTML);

//実験
// const array = [1, 2, 3, 4, 5];
// const object = { name: "taro", age: 20 };
// console.log(array);
// console.log(object);
// console.log(document.querySelectorAll("#js-title"));

//メモ
//document全体ではなくjs-section内から探して取得したい場合、どう書く？
//↓
  //まず、js-section要素を取得
const section = document.querySelector("#js-section");
console.log(section);
  //js-section要素内の.textクラスをquerySelectorAllで取得
const elements4 = section.querySelectorAll(".text");
for(let element of elements4){
	console.log(element.outerHTML);
}
