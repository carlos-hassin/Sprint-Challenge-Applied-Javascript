// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res) => {

	// Capturing article arrays from response
	const javaScript = res.data.articles.javascript;
	const bootStrap = res.data.articles.bootstrap;
	const technology = res.data.articles.technology;
	const jQuery = res.data.articles.jquery;
	const node = res.data.articles.node;

	// Entering card data
	javaScript.forEach(article => cardsContainer.appendChild(createCard(article)));
	bootStrap.forEach(article => cardsContainer.appendChild(createCard(article)));
	technology.forEach(article => cardsContainer.appendChild(createCard(article)));
	jQuery.forEach(article => cardsContainer.appendChild(createCard(article)));
	node.forEach(article => cardsContainer.appendChild(createCard(article)));
})


function createCard(obj) {

	// Create elements
	const card = document.createElement('div');
	const cardHeadline = document.createElement('div');
	const cardAuthor = document.createElement('div');
	const imageContainer = document.createElement('div');
	const image = document.createElement('img');
	const authorName = document.createElement('span');

	// Add Element Classes
	card.classList.add('card');
	cardHeadline.classList.add('headline');
	cardAuthor.classList.add('author');
	imageContainer.classList.add('img-container');

	// Add content to elements
	cardHeadline.textContent = obj.headline;
	image.setAttribute('src', `${obj.authorPhoto}`);
	authorName.textContent = `By ${obj.authorName}`;

	// Create HTML Structure
	card.appendChild(cardHeadline);
	card.appendChild(cardAuthor);
	cardAuthor.appendChild(imageContainer);
	cardAuthor.appendChild(authorName);
	imageContainer.appendChild(image);

	return card;
}
