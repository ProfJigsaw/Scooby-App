const _SWOOMCC = /\b([bcdfghjklmnpqrstvwxyz])+/i;
const scoobyInput = document.getElementById('inputText');
const scoobyfyBtn = document.getElementById('scoobyfy');
const scoobySays = document.getElementById('scooby-says');
const resultPanel = document.getElementById('result-panel');

scoobyfyBtn.addEventListener('click', () => {
	(scoobyInput.value === "" || scoobyInput.value.replace(/(\s)+/, "") === "")	?
		(
			scoobySays.style.display = 'none',
			resultPanel.setAttribute('class', 'invalid-input'),
			resultPanel.style.display = 'block',
			resultPanel.innerHTML = "Please, enter some text!"
		)
			:
		(
			scoobySays.style.display = 'block',
			resultPanel.setAttribute('class', 'valid-input'),
			resultPanel.style.display = 'block',
			resultPanel.innerHTML = scoobyInput.value
			.split(" ")
			.map(word => testAndReplace(word))
			.join(" ")
			.toLowerCase()
		);
});

function testAndReplace(word){
	return _SWOOMCC.test(word) ? word.replace(_SWOOMCC, 'r') : word;
}