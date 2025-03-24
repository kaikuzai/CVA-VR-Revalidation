AFRAME.registerComponent("input-listen", {
    init: function () {
      let el = this.el;
      const startScreen = document.querySelector("#start-screen");
      const ingedrientsList = document.querySelector("#ingredients-list");
      const menu = document.querySelector("#menu");
      const chosenRecept = document.querySelector("#chosenRecept");
      const chosenReceptText = document.querySelector("#chosenReceptText");
      const correctFood = document.querySelectorAll(".correct");
      const incorrectFood = document.querySelectorAll(".incorrect");
      console.log(correctFood,incorrectFood)

      el.addEventListener("abuttonup", function (e) {
        console.log("A-button ingedrukt!", e.target.id);
        menu.setAttribute('visible', 'false')
        chosenRecept.setAttribute('visible', 'true');
        chosenReceptText.setAttribute('value', 'Jij hebt gekozen om pannenkoeken te maken!'); 
        setTimeout(() => {
          chosenRecept.setAttribute('visible', 'false');
          chosenReceptText.setAttribute('value', '');
          startScreen.setAttribute('visible', 'true');
          ingedrientsList.setAttribute('visible', 'true');
          correctFood.forEach(function (food) {
        food.setAttribute('visible', 'true');
        });
        incorrectFood.forEach(function (food) {
        food.setAttribute('visible', 'true');
         });
        }, 7000);
      });
      
      el.addEventListener("bbuttonup", function (e) {
        console.log("b-button ingedrukt!", e.target.id);
        menu.setAttribute('visible', 'false')
        chosenRecept.setAttribute('visible', 'true');
        chosenReceptText.setAttribute('value', 'Jij hebt gekozen om taart te maken!'); 
        setTimeout(() => {
          chosenRecept.setAttribute('visible', 'false');
          chosenReceptText.setAttribute('value', '');
          startScreen.setAttribute('visible', 'true');
          ingedrientsList.setAttribute('visible', 'true');
          correctFood.forEach(function (food) {
        food.setAttribute('visible', 'true');
        });
        incorrectFood.forEach(function (food) {
        food.setAttribute('visible', 'true');
         });
        }, 7000);
      });
    }});