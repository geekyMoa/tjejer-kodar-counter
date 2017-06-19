(function() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var imageServiceBaseUrl = 'http://via.placeholder.com/';
  var moreCatsButton = document.getElementById('moreCats');
  var killCatsButton = document.getElementById('killCats');
  var catContainer = document.getElementById('catContainer')

  moreCatsButton.addEventListener('click', function(event){
    var catSize = getRandomInt(150, 300);
    var catElement = document.createElement('img');
    var catUrl = imageServiceBaseUrl + catSize + 'x' + catSize;

    catElement.setAttribute('src', catUrl);
    catElement.classList.add('CatMania-container-cat');
    
    catContainer.appendChild(catElement);
  });

  killCatsButton.addEventListener('click', function(event){
    catContainer.innerHTML = '';
  });

})();
