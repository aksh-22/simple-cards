const fs = require('fs');
const http = require('http');
const url = require('url');

const templateHome = fs.readFileSync(
	`${__dirname}/template/index.html`,
	'utf-8'
);
const templateCard = fs.readFileSync(
	`${__dirname}/template/card.html`,
	'utf-8'
);

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const replaceData = (template, el) => {
	let output = template.replace(/{%heading%}/g, el.heading);
	output = output.replace(/{%para%}/g, el.para);
	// console.log(output);
	return output;
};

const server = http.createServer((req, res) => {
	const pathName = req.url;
	// console.log(pathName);
	if (pathName === '/' || pathName === '/homepage') {
		res.writeHead(200, { 'Content-type': 'text/html' });
		// console.log(dataObj);

		const cardHtml = dataObj
			.map((el) => {
				return replaceData(templateCard, el);
				// console.log(el);
			})
			.join('');
		const output = templateHome.replace('{%card%}', cardHtml);
		res.end(output);
	} else if (pathName === '/api') {
		// console.log(productData);
		res.writeHead(200, { 'Content-type': 'application/json' });
		res.end(data);
	} else {
		res.writeHead(404);
		res.end('<h1>page not found</h1>');
	}
});

server.listen(8000, '127.0.0.1', () => {
	console.log('listening to port 8000');
});
