AFRAME.registerComponent('collision-listener', {
  init: function () {
    var el = this.el;
    var bowlCollided = false;



    this.el.addEventListener('collide', (event) => {
      const bowlHitbox = event.detail.body.el; // bowl plane
      const otherEntity = event.target; // ingredient
      // checks if an ingredient collides with the bowl plane
      if (otherEntity && bowlHitbox.id === 'bowl' && !bowlCollided) {
        bowlCollided = true;
        // check if sound is already played
        if (!otherEntity.hasAttribute('sound-played')) {
          const ingredientName = otherEntity.id;
          const ingredientTextName = otherEntity.getAttribute('text-name');
          let audio;

          if (otherEntity.classList.contains('correct')) {
            audio = new Audio('assets/sounds/correct.mp3');

            let correct = document.querySelector('#recipe_finished');
            let correctCount = correct.getAttribute('correctIngredients');

            let recipeList = document.querySelector('#recipe_list');

            let bowl = document.querySelector('#bowl');
            
            // Increment the correctIngredients value
            correctCount = parseInt(correctCount) + 1;
            correct.setAttribute('correctIngredients', correctCount); // Update the correctIngredients attribute

            // Log the updated value of correctIngredients
            console.log(`Correct Ingredients: ${correctCount}`);  // This logs the current count of correct ingredients

            // Check if 5 correct ingredients are in the bowl
            if (correctCount === 5) {
              // Set the 'recipe_finished' entity visible
              correct.setAttribute('visible', true);
              recipeList.setAttribute('visible', false); // turns recipe list foetsie
              bowl.setAttribute('visible', false); // turns bowl foetsie

              let chosenRecepi = document.querySelector('#chosenRecept');
              let finished_recepi = chosenRecepi.getAttribute('data-recept');

              let pannenkoek = document.querySelector('#pannenkoek');
              let taart = document.querySelector('#taart');
              
              if(finished_recepi == 'pannenkoek'){
                pannenkoek.setAttribute('visible', true);
                const incorrectFood = document.querySelectorAll(".incorrect");
                incorrectFood.forEach(function (food) {
                  food.setAttribute('visible', false);
                  });
              }

              if(finished_recepi == 'taart'){
                taart.setAttribute('visible', true);
                const incorrectFood = document.querySelectorAll(".incorrect");
                incorrectFood.forEach(function (food) {
                  food.setAttribute('visible', false);
                  });
              }
            }

            // turns visibility off when ingredient hit the bowl plane
            setTimeout(() => {
              otherEntity.setAttribute('visible', false);
              var sceneEl = document.querySelector('a-scene');
              var ingredientId = sceneEl.querySelector(`[id=${otherEntity.id}]`);
              sceneEl.removeChild(ingredientId);
            }, 2000);

            let ingredientList = document.querySelector('#recipe_list_state');
            let ingredientText = ingredientList.getAttribute('text').value;

            // Example: replaces [ ] to [X]
            let regex = new RegExp(`\\[ \\] ${ingredientName}`, 'g');

            // Cross out the name of the ingredient using ingredientTextName
            const escapedName = ingredientTextName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const strikeRegex = new RegExp(`(${escapedName})`, 'g');
            const updatedText = ingredientText.replace(strikeRegex, `[X] $1 `);

            // updates ingredient list with the new value
            ingredientList.setAttribute('text', 'value', updatedText);
          } else {
            // plays audio when wrong ingredient is used
            audio = new Audio('assets/sounds/wrong.mp3');
          }

          audio.volume = 0.4;
          audio.play();

          // adds sound-played so sound only is played once
          otherEntity.setAttribute('sound-played', true);

          
        }
      } else {
        return;
      }
    });
  }
});
