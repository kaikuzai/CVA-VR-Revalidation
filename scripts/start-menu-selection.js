AFRAME.registerComponent("input-listen", {
    init: function () {
      let el = this.el;
      const ingedrientsList = document.querySelector("#recipe_list");
      const menu = document.querySelector("#recipe_menu");
      const chosenRecept = document.querySelector("#chosenRecept");
      const chosenReceptText = document.querySelector("#chosenReceptText");
      const correctFood = document.querySelectorAll(".correct");
      const incorrectFood = document.querySelectorAll(".incorrect");
      console.log("start-menu-shit", correctFood,incorrectFood)

      el.addEventListener("abuttondown", function (e) {
        menu.setAttribute('visible', false)
        chosenRecept.setAttribute('visible', true);
        chosenReceptText.setAttribute('value', 'Jij hebt gekozen om pannenkoeken te maken!'); 
        setTimeout(() => {
          chosenRecept.setAttribute('visible', false);
          chosenRecept.setAttribute('data-recept', 'pannenkoek');
          ingedrientsList.setAttribute('visible', true);
          // Turn correct foods visible loop
          correctFood.forEach(function (food) {
            console.log(food)
          food.setAttribute('visible', true);
          });
          // Turn incorrect foods visible loop 
          incorrectFood.forEach(function (food) {
          food.setAttribute('visible', true);
          });

        }, 2000);
      });

      el.addEventListener("bbuttondown", function (e) {
        console.log("Choice made")
        menu.setAttribute('visible', false)
        chosenRecept.setAttribute('visible', true);
        chosenReceptText.setAttribute('value', 'Jij hebt gekozen om taart te maken!'); 
        chosenRecept.setAttribute('data-recept', 'taart');
        setTimeout(() => {
          chosenRecept.setAttribute('visible', false);
          ingedrientsList.setAttribute('visible', true);
          // Turn correct foods visible loop
          correctFood.forEach(function (food) {
            console.log(food)
          food.setAttribute('visible', true);
          });
          // Turn incorrect foods visible loop 
          incorrectFood.forEach(function (food) {
          food.setAttribute('visible', true);
          });
          
        }, 2000);
      });
      
    }});