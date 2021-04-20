const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const navLinksMob = document.querySelectorAll('.nav__item-mob');
const progress = document.querySelector('.progress-bars-wrapper');
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const listItems = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('section');
const parent = document.querySelector('.portfolio');
const work = document.querySelector('#work');

let arr = [];

const progressBarPercents = [80, 75, 70, 65, 55, 50];
const data = {
	link: [
		'https://github.com/aksh-22/forkify',
		'https://github.com/aksh-22/news-grid-1',
		'https://github.com/aksh-22/githubfinder',
		'https://github.com/aksh-22/Hotel',
		'https://github.com/aksh-22/micropost',
		'https://github.com/aksh-22/pig-game',
		'https://github.com/aksh-22/validation-form',
		'https://github.com/aksh-22/weatherjs',
		'https://github.com/aksh-22/portfolio',
		'https://akash-mapty.netlify.app/',
	],
	class: [
		'jsApi all',
		'htmlCss all',
		'htmlCss all',
		'js all',
		'htmlCss all',
		'js all',
		'htmlCss all',
		'jsApi all',
		'htmlCss all',
		'jsApi all',
	],
	image: [
		'forkify.png',
		'news-grid.jpg',
		'Git-hub finder.jpg',
		'Hotel.jpg',
		'MicroPost.jpg',
		'Pig-game.jpg',
		'validation-form.jpg',
		'weather.jpg',
		'Portfolio-sample.jpg',
		'mapty.png',
	],
};

const createEl = (idTo) => {
	let html = `
		<a href="${data.link[idTo]}" class="portfolio__item ${data.class[idTo]}">
		<img src="img/${data.image[idTo]}" alt="" class="portfolio__img" />
		</a>
		`;
	parent.insertAdjacentHTML('beforeend', html);
	return html;
};

const showEl = (id) => {
	const classArr = [];
	const idArr = [];
	data.class.forEach((el, idTo) => {
		let newA = [];
		newA = el.split(' ');
		let check;
		if (id !== 'all') {
			check = newA[0];
		} else {
			check = newA[1];
		}
		// if (id!=='all') ? check=newA[0] : check = newA[1]
		if (check === id) {
			classArr.push(newA[0]);
			idArr.push(idTo);
			createEl(idTo, id);
		}
	});
	setTimeout(() => {
		document.querySelectorAll(`.${id}`).forEach((el) => {
			el.classList.add('show');
		});
	}, 300);
};

const deleteEl = () => {
	const portItem = document.querySelectorAll('.portfolio__item');
	portItem.forEach((e) => {
		e.parentNode.removeChild(e);
	});
};

const toggleClass = (e) => {
	document.querySelectorAll('.tag').forEach((el) => {
		el.classList.remove('active');
	});
	e.target.classList.add('active');
};

document.addEventListener('click', (e) => {
	const clickedId = e.target.id;
	if (e.target.parentElement.classList == 'filterUl') {
		toggleClass(e);
		deleteEl();
		showEl(clickedId);
	} else if (clickedId === 'toggle') {
		nav.classList.toggle('active');
	}
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.remove('active');
	});
});

window.addEventListener('scroll', () => {
	mainFn();
});

const mainFn = () => {
	sections.forEach((section, i) => {
		if (window.pageYOffset >= section.offsetTop - 10) {
			navLinksMob.forEach((navE) => {
				navE.classList.remove('active');
			});
			navLinksMob[i].classList.add('active');
		}
	});

	if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
		document.querySelectorAll('.progress-percent').forEach((el, i) => {
			el.style.width = `${progressBarPercents[i]}%`;
			el.previousElementSibling.firstElementChild.textContent =
				progressBarPercents[i];
		});
	}
};
showEl('all');

mainFn();
