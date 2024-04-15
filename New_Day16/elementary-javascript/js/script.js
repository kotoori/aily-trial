//HTML要素のテキストを変更する
document.querySelector("#js-title").innerText = "Daily Trial";

//HTMLタグを追加する
const button = document.createElement("a");
button.innerText = "ログイン";
button.setAttribute("class", "btn");
button.setAttribute("href", "https://tokyofreelance.jp/");

document.querySelector("#js-btn-wrap").appendChild(button);


console.log(button.outerHTML);