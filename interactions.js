(function() {

  // PLANERING:
  // fånga eventet när plus klickas
  // fånga eventet när minus klickas
  // fånga värdet i number-span:en
  // räkna om värdet i number-span:en
  // printa ut nya värdet i number-span:en

  var counter = document.getElementById('counter');
  var ticks = Array.from(document.getElementsByClassName('Counter-tick'));
  var numberSpan = document.getElementsByClassName('Counter-number')[0];
  var number = parseInt(numberSpan.innerHTML);

  // vi loopar igenom alla ticks så att vi kan titta på varje
  // tick för sig.
  ticks.forEach(function(tick) {

    // för varje tick lägger vi till en event listener,
    // som lyssnar på när användaren klickar på något.
    tick.addEventListener('click', function(event) {

        // vi lägger elementet som användaren klickade på
        // i en ny variabel, clickedElement
        var clickedElement = event.target;

        // OM innehållet i det element som användaren klickade på
        // är ett plus, öka på number-variabeln med 1.
        if (clickedElement.innerHTML === '+') {
          number = number + 1;
        } else if (clickedElement.innerHTML === '-') {
          // ^ om clickedElement istället innehöll ett minus...

          // kolla om number-variabeln är större än 0.
          if (number > 0) {
            // i så fall, minska number-variabeln med 1.
            number = number - 1;
          }
          // Om number-variabeln var mindre än 0, gör ingenting alls.
        }

        // Om man klickar på minustecknet och number-variabeln är
        // mindre än eller lika med 0, lägg till en CSS-klass som tar bort
        // "länk-pilen" när man hovrar över minustecknet.
        if (clickedElement.innerHTML === '-' && number <= 0) {
          clickedElement.classList.add('js-is-arrow', 'js-is-prohibited');
        } else if(clickedElement.innerHTML === '+') {
          clickedElement.classList.remove('js-is-arrow', 'js-is-prohibited');
        }

        // Lägg till vårt nya nummer i span:en med klassen .Counter-number.
        numberSpan.innerHTML = number;
    });
  });

})();
