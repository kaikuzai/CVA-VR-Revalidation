AFRAME.registerComponent('restart-look', {
    schema: {
        entityId: {type: 'selector'}
    },
    init: function () {
        var el = this.el 
        
    },
    tick: function (time, deltaTime) {
        const entity = this.data.entityId; 
        if (entity.getAttribute('material').color === 'red') {
            var restart_text = document.querySelector('#restart_text')
            restart_text.setAttribute('value', 'Spel wordt \n opnieuw gestart')
            setTimeout(() => {
                window.location.reload()
            }, 2000)
            
        }

    }
})