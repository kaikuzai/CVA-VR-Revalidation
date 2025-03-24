AFRAME.registerComponent('collision-listener', {
    init: function () {
      const correctIngredients = ['Melk', 'Bloem', 'Eieren']; 

      this.el.addEventListener('collide', (event) => {
        const bowlHitbox = event.detail.body.el; // bowl plane
        const otherEntity = event.target; // ingredient
        
        // checks if a ingredient collides with the bowl plane
        if (otherEntity && bowlHitbox.id === 'bowl-plane') {

          // check if sound is already played
          if (!otherEntity.hasAttribute('sound-played')) {
            const ingredientName = otherEntity.id;
            let audio;

            if (otherEntity.classList.contains('correct')) {
              audio = new Audio('assets/sounds/correct.mp3');
              
              // turns visibility off when ingredient hit the bowl plane
              otherEntity.setAttribute('visible', false);

              let ingredientList = document.querySelector('#ingredient-list');
              let ingredientText = ingredientList.getAttribute('text').value;

              // replaces [ ] to [X]
              let regex = new RegExp(`\\[ \\] ${ingredientName}`, 'g');
              let updatedText = ingredientText.replace(regex, `[X] ${ingredientName}`);

              // updates ingredient list with the new value
              ingredientList.setAttribute('text', 'value', updatedText);
            } else {
              // plays audio when wrong ingredient is used
              audio = new Audio('assets/sounds/wrong.mp3');
            }

            audio.volume = 0.4;
            audio.play();

            // adds sound-played so sound only is played ones
            otherEntity.setAttribute('sound-played', true);
          }
        } else {
          console.log('No collision with the bowl.');
        }
      });
    }
  });