AFRAME.registerComponent("input-listen", {
    init: function () {
      let el = this.el;
      const ingedrientsList = document.querySelector("#recipe_list");
      const menu = document.querySelector("#recipe_menu");
      const startMenu = document.querySelector("#start_menu");
      const informationMenu = document.querySelector("#information_menu");
      const chosenRecept = document.querySelector("#chosenRecept");
      const chosenReceptText = document.querySelector("#chosenReceptText");
      const correctFood = document.querySelectorAll(".correct");
      const incorrectFood = document.querySelectorAll(".incorrect");
      console.log("start-menu-shit", correctFood,incorrectFood)
      count = 0;
      
      el.addEventListener("triggerdown", function (e) {
        console.log("triggerdown", e.target.id);
        console.log(count)
       if(count === 0){
          startMenu.setAttribute('visible', false);
          informationMenu.setAttribute('visible', true)
       }
          console.log(count)
          if (count === 1){
            informationMenu.setAttribute('visible', false)
            menu.setAttribute('visible', true)
          }
          if (count === 2){
            triggerdownMenu(e.target.id);
          }
            count++;
       }
      );

      function triggerdownMenu(hand){
        menu.setAttribute('visible', false)
        chosenRecept.setAttribute('visible', true);
        if (hand === "lhand"){
        chosenReceptText.setAttribute('value', 'Jij hebt gekozen om pannenkoeken te maken!'); 
        chosenRecept.setAttribute('data-recept', 'pannenkoek');
        }
        if (hand === "rhand"){
          chosenReceptText.setAttribute('value', 'Jij hebt gekozen om taart te maken!'); 
          chosenRecept.setAttribute('data-recept', 'taart');
        }
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
        }, 5000)
  }
    }});