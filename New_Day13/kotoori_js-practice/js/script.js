let todoList = ['服を買いに行く','写真を撮る', '打ち合わせ', 'JS勉強' , 'react勉強'];

//①for ofを使ってtodoListの中身をconsole.logで表示する
// for(let todo of todoList){
// 	console.log(todo);
// }

//②for文(カウントアップ)を使ってtodoListの中身をconsole.logで表示する
// for(let i = 0 ; i < todoList.length ; i++){
// 	console.log(todoList[i]);
// }

//③forEachを使ってtodoListの中身をconsole.logで表示する
todoList.forEach(function(todo){
	console.log(todo);
});