const React = require('react');
const UnorderedList = require('./UnorderedList');

const dependenciesArray = [
  'express - middleware for the node server',
  'react - for generating the views of the app',
  'react-dom - powers the rendering of elements to the DOM, typically paired with React',
  'webpack - for bundling all the javascript',
  'webpack-cli - command line support for webpack',
  'jsx-loader - allows webpack to load jsx files'
];

const componentsMade = [
  'HelloWorld - which is the view you are seeing now!',
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
];
let content;
function postData(url = '', data = {}) {
  // Значения по умолчанию обозначены знаком *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
    .then(response => response.json()); // парсит JSON ответ в Javascript объект
}
postData('/givemedata', {answer: 42})
  .then(data => console.log(JSON.stringify(data))) // JSON-строка полученная после вызова `response.json()`
  .catch(error => console.error(error));


/* the main page for the index route of this app */
const HelloWorld = function() {
  return (
    <div>
      <div className="blackboard">
        <a>
          <img className="logo" src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg'/>
        </a>
        
        <div className="btnBlock1">
          <div className="btn1">DISCOVER</div>
          <div className="btn1">MOVIES</div>
          <div className="btn1">TV SHOWS</div>
          <div className="btn1">PEOPLE</div>
        </div>
        
        <div className="btnBlock2">
          <div className="btn2">Popular</div>
          <div className="btn2">Top Rated</div>
          <div className="btn2">Upcoming</div>
          <div className="btn2">Now Playing</div>
        </div>
        
        <div className="btnBlock3">
          <div className="btn3">+</div>
          <div className="btn3">EN</div>
          <div className="btn3">LOGIN</div>
          <div className="btn3">SIGN UP</div>
        </div>
        
        <div className="btnBlock4">
          <div className="btn4">Apps</div>
          <div className="btn4">Forums</div>
          <div className="btn4">Leaderboard</div>
          <div className="btn4">Contribute</div>
          <div className="btn4">API</div>
          <div className="btn4">Support</div>
        </div>
      </div>
      <div className="searchBlock">
       <img className="sImg" src="http://cdn.onlinewebfonts.com/svg/img_103884.png"/>
        <input className="sinput" name="s" placeholder="Search for a movie, tv show, person ..." type="search"/>
     </div>
      <div className="hah">Popular movies</div>
      <div className="btns">
        <button className="btn">
          Filter
        </button>
        <button className="btn">
          View
        </button>
      </div>
      
      <div className="movies">
        <UnorderedList items={content} />
      </div>
    </div>
  );
}

module.exports = HelloWorld;