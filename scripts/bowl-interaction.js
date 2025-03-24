AFRAME.registerComponent('collision-listener', {
    init: function () {

      var el = this.el 
      var bowlCollided = false; 

      this.el.addEventListener('collide', (event) => {
        const bowlHitbox = event.detail.body.el; // bowl plane
        const otherEntity = event.target; // ingredient
        // checks if a ingredient collides with the bowl plane
        if (otherEntity && bowlHitbox.id === 'bowl' && !bowlCollided) {
          bowlCollided = true; 
          // check if sound is already played
          if (!otherEntity.hasAttribute('sound-played')) {
            const ingredientName = otherEntity.id;
            const ingredientTextName = otherEntity.getAttribute('text-name');
            let audio;

            if (otherEntity.classList.contains('correct')) {
              audio = new Audio('assets/sounds/correct.mp3');
              
              // turns visibility off when ingredient hit the bowl plane
              setTimeout(() => {
                otherEntity.setAttribute('visible', false)
                var sceneEl = document.querySelector('a-scene');
                var ingredientId = sceneEl.querySelector(`[id=${otherEntity.id}]`);
                
                sceneEl.removeChild(ingredientId);
              }, 2000)


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

            // adds sound-played so sound only is played ones
            otherEntity.setAttribute('sound-played', true);
          }
        } else {
          return;
        }
      });
    }
  });