const scores = {
	math: 87,
	english: 78,
	science: 68
}

console.log(scores.math);
console.log(scores['math']);

scores.math = 90;
console.log(scores.math);

const allScores = [
	{math: 87, english: 56, science: 48},
	{math: 45, english: 76, science: 89},
	{math: 67, english: 88, science: 78}
];

console.log(allScores);

const scores2 = {
	math: 87,
	english: 78,
	science: 68,
	messageEnglish: function(){
		console.log(`英語の点数は${this.english}点です`);
	}
}

scores2.messageEnglish();