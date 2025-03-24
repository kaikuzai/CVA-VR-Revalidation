AFRAME.registerComponent('restart-trigger', {
    init: function () {
      var el = this.el

      el.addEventListener('abuttondown', function () {
        var menuScreen = document.querySelector("#recipe_menu")
        var menuScreenVisible = menuScreen.getAttribute('visible')
        var restartMenu = document.querySelector("#restart_menu")
        if ( restartMenu.getAttribute('visible') === true) {
          restartMenu.setAttribute('visible', false);
        }
        else if (restartMenu.getAttribute('visible' ) === false && !menuScreenVisible ) {
          restartMenu.setAttribute('visible', true);
        } else {
          return; 
        }
      });

      el.addEventListener('bbuttondown', function () {
        var restartMenu = document.querySelector("#restart_menu")
        if (restartMenu.getAttribute('visible') === true) {
          console.log("reload should trigger");
          window.location.reload();
        }
        else if (restartMenu.getAttribute('visible') === false) {
          console.log("Reload shouldn't trigger");
          return;
        }
      });}})