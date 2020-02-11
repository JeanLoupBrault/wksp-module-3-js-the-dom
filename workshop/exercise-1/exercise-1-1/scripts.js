//Exercise 1.1
const mainDiv = document.getElementById('main');

//create all the elements
// const htmlPage = document.createElement('html');
// const headOfPage = document.createElement('head');
// const headMeta = document.createElement('meta');
// const headTitle = document.createElement('title');
// const bodyOfPage = document.createElement('body');
// const bodyDiv = document.createElement('div');
const divH1 = document.createElement('h1');
const divP = document.createElement('p');
const divH2 = document.createElement('h2');
const divPtwo = document.createElement('p');
const divPthree = document.createElement('p');
const divPfour = document.createElement('p');
const divA = document.createElement('a');
const image = document.createElement('img');
// const bodyScript = document.createElement('script');

//add content to the elements
// htmlPage.innerText = "lang = 'en.'";
// headOfPage.innerText = "";
// headMeta.innerText = "charset = 'utf-8'";
// headTitle.innerText = "Exercise 1-1'";
// bodyOfPage.innerText = "";
// bodyDiv.innerText = "id="main"";
divH1.innerText = "The best How I Met Your Mother episode (according to fans)";
divP.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
divH2.innerText = "The Slap Bet (Season 2, Episode 9)";
divPtwo.innerText = "IMDB Rating: 9.5";
divPthree.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
divPfour.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
divA.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
divA.innerText = "Source";
// bodyScript.innerText = "src="scripts.js"";
image.src = './images/robin-sparkles.jpg';
image.alt = 'Robin Sparkles';


//add content to the page
// document.html.appendChild(htmlPage);
// document.html.appendChild(headOfPage);
// document.head.appendChild(headMeta);
// document.head.appendChild(headTitle);
// document.body.appendChild(bodyOfPage);
// document.body.appendChild(bodyDiv);
mainDiv.appendChild(divH1);
mainDiv.appendChild(divP);
mainDiv.appendChild(divH2);
mainDiv.appendChild(divPtwo);
mainDiv.appendChild(divPthree);
mainDiv.appendChild(divPfour);
// document.body.appendChild(divA);
// document.body.appendChild(bodyScript);
mainDiv.appendChild(image);
mainDiv.appendChild(source);

// add link to css
const head = document.getElementsByTagName('head');
const headLink = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
head[0].appendChild(stylesheet);