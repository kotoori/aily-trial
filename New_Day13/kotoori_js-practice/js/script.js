let firstName = '太郎';
let lastName = '山田';
// console.log(firstName + " " + lastName + "さん");

console.log(`${firstName} ${lastName}さん`);

function say(firstName, lastName) {
	console.log(`${firstName} ${lastName}さん、こんにちは`);
}
say('太郎', '山田');
say('花子', '鈴木');
say('ジョン', 'スミス');

//円の面積を求める計算
let radius = 10;
const pai = 3.14;

let area = radius * radius * pai;
console.log(area);

function calcCircleArea(radius) {
	const pai = 3.14;

	let area = radius * radius * pai;
	return area;
}
console.log(calcCircleArea(10));
console.log(calcCircleArea(100));


function showMessage(message = 'No message') {
	console.log(message);
}
showMessage('おはようございます');
showMessage('こんにちは');
showMessage(123);
showMessage(123 * 10);

function double(num) {
	return num * 2;
}
console.log( double(2));
