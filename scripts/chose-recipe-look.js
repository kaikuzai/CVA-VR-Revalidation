AFRAME.registerComponent('chose-recipe-look', {
    schema: {
        entityId: {type: 'selector'}
    },
    init: function () {
        var el = this.el 
        
    },
    tick: function (time, deltaTime) {

        const ingedrientsList = document.querySelector("#recipe_list");
      const menu = document.querySelector("#recipe_menu");
      const chosenRecept = document.querySelector("#chosenRecept");
      const chosenReceptText = document.querySelector("#chosenReceptText");
      const chosenReceptPlane = document.querySelector("#planeRecept");
      const correctFood = document.querySelectorAll(".correct");
      const incorrectFood = document.querySelectorAll(".incorrect");

        const entity = this.data.entityId; 

        if (entity.getAttribute('chosen') === 'pancakes') {
            menu.setAttribute('visible', false)
            chosenRecept.setAttribute('visible', true);
            chosenReceptText.setAttribute('value', 'Jij hebt gekozen om pannenkoeken te maken!'); 
            chosenRecept.setAttribute('data-recept', 'pannenkoek');
            setTimeout(() => {
                
                chosenReceptPlane.setAttribute('visible', false);
                chosenReceptText.setAttribute('visible', false);
                ingedrientsList.setAttribute('visible', true);
                // Turn correct foods visible loop
                correctFood.forEach(function (food) {
                food.setAttribute('visible', true);
                });
                // Turn incorrect foods visible loop 
                incorrectFood.forEach(function (food) {
                food.setAttribute('visible', true);
                });

        }, 5000);
            
        }

        if (entity.getAttribute('chosen') === 'cake'){
            menu.setAttribute('visible', false)
        chosenRecept.setAttribute('visible', true);
        chosenReceptText.setAttribute('value', 'Jij hebt gekozen om taart te maken!'); 
        chosenRecept.setAttribute('data-recept', 'taart');
        setTimeout(() => {
                
            chosenReceptPlane.setAttribute('visible', false);
            chosenReceptText.setAttribute('visible', false);
            ingedrientsList.setAttribute('visible', true);
            // Turn correct foods visible loop
            correctFood.forEach(function (food) {
            food.setAttribute('visible', true);
            });
            // Turn incorrect foods visible loop 
            incorrectFood.forEach(function (food) {
            food.setAttribute('visible', true);
            });
          }, 5000);
        }

    }
})