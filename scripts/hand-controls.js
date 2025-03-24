AFRAME.registerComponent('phase-shift', {
    init: function () {
      var el = this.el
      el.addEventListener('gripdown', function () {
        el.setAttribute('collision-filter', {collisionForces: true})
      })
      el.addEventListener('gripup', function () {
        el.setAttribute('collision-filter', {collisionForces: false})
      })
    }
  });

  AFRAME.registerComponent('focus-listener', {
    init: function () {
        var el = this.el
        el.addEventListener('mouseenter', function () {
            var box = el.querySelector('a-box')
            box.setAttribute('visible', 'true')
        });
        el.addEventListener('mouseleave', function () {
            var box = el.querySelector('a-box')
            box.setAttribute('visible', 'false')

        });
    }
  });

  AFRAME.registerComponent('hover-listener', {
    init: function () {
        el.addEventListener('hover-over', function () {
            var box = el.querySelector('a-box')
            box.setAttribute('visible', 'true')
        });
        el.addEventListener('hover-end', function () {
            var box = el.querySelector('a-box')
            box.setAttribute('visible', 'true')
        });
    }
  });