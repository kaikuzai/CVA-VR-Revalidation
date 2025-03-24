AFRAME.registerComponent('restart-trigger', {
    init: function () {
      var el = this.el

      el.addEventListener('abuttondown', function () {
        console.log("trigger pushed")
        var restartMenu = document.querySelector("#restart_menu")
        console.log("visiblilty: ", restartMenu.getAttribute('visible'))
        if ( restartMenu.getAttribute('visible') === true) {
          console.log("visible true scenario");
          restartMenu.setAttribute('visible', false);
        }
        else if (restartMenu.getAttribute('visible') === false) {
          console.log("visible false scenario");
          restartMenu.setAttribute('visible', true);
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