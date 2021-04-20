const parent = document.querySelector('.portfolio');
const proxy = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://127.0.0.1:8000/api/data.json';

// const data = () => {};

async function funcName() {
	fetch(`${proxy}${url}`)
		.then((response) => response.json())
		.then((data) => console.log(data));
}

// fetch('http://127.0.0.1:8000/api')
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));

funcName();
// const data = {
// 	link: [
// 		'https://github.com/aksh-22/forkify',
// 		'https://github.com/aksh-22/news-grid-1',
// 		'https://github.com/aksh-22/githubfinder',
// 		'https://github.com/aksh-22/Hotel',
// 		'https://github.com/aksh-22/micropost',
// 		'https://github.com/aksh-22/pig-game',
// 		'https://github.com/aksh-22/validation-form',
// 		'https://github.com/aksh-22/weatherjs',
// 		'https://github.com/aksh-22/portfolio',
// 		'https://akash-mapty.netlify.app/',
// 	],
// 	class: [
// 		'jsApi all',
// 		'htmlCss all',
// 		'htmlCss all',
// 		'js all',
// 		'htmlCss all',
// 		'js all',
// 		'htmlCss all',
// 		'jsApi all',
// 		'htmlCss all',
// 		'jsApi all',
// 	],
// 	image: [
// 		'forkify.png',
// 		'news-grid.jpg',
// 		'Git-hub finder.jpg',
// 		'Hotel.jpg',
// 		'MicroPost.jpg',
// 		'Pig-game.jpg',
// 		'validation-form.jpg',
// 		'weather.jpg',
// 		'Portfolio-sample.jpg',
// 		'mapty.png',
// 	],
// };

const createEl = (i) => {
	let html = `
		<a href="${data.link[i]}" class="portfolio__item ${data.class[i]}">
			<img src="img/${data.image[i]}" alt="" class="portfolio__img" />
		</a>
		`;
	parent.insertAdjacentHTML('beforeend', html);
	return html;
};

const run = () => {
	for (let i = 0; i < data.class.length; i++) {
		createEl(i);
	}
};

// export default run;
