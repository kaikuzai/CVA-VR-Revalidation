AFRAME.registerComponent("height-adjustment", {
    init: function () {
        let el = this.el 
    
            el.addEventListener("bbuttondown", function (e) {
                const heightAdjustmentScreen = document.querySelector('#height_adjustment_screen').getAttribute('visible'); 
                const proximityAdjustmentScreen = document.querySelector('#proximity_adjustment_screen').getAttribute('visible'); 

                if(heightAdjustmentScreen){
                    currentPosition = document.querySelector('#camera_entity').getAttribute('position')
                    const {x, y, z} = currentPosition; 
                    const newPosition = {x, y: y + 0.1, z};
                    console.log("current: ", currentPosition)
                    console.log("new: ", newPosition)
                    document.querySelector("#camera_entity").setAttribute('position', newPosition)
                    }; 
                    if(proximityAdjustmentScreen){
                    currentPosition = document.querySelector('#camera_entity').getAttribute('position')
                    const {x, y, z} = currentPosition; 
                    const newPosition = {x, y, z: z + 0.1};
                    console.log("current: ", currentPosition);
                    console.log("new: ", newPosition);
                    document.querySelector("#camera_entity").setAttribute('position', newPosition);
                }
            }); 
        
        
            el.addEventListener("abuttondown", function (e) {
                const heightAdjustmentScreen = document.querySelector('#height_adjustment_screen').getAttribute('visible'); 
                const proximityAdjustmentScreen = document.querySelector('#proximity_adjustment_screen').getAttribute('visible'); 

                if(heightAdjustmentScreen){
                    currentPosition = document.querySelector('#camera_entity').getAttribute('position')
                    const {x, y, z} = currentPosition; 
                    const newPosition = {x, y: y - 0.1, z};
                    console.log("current: ", currentPosition)
                    console.log("new: ", newPosition)
                    document.querySelector("#camera_entity").setAttribute('position', newPosition)
                    }; 
                    if(proximityAdjustmentScreen){
                    currentPosition = document.querySelector('#camera_entity').getAttribute('position')
                    const {x, y, z} = currentPosition; 
                    const newPosition = {x, y, z: z - 0.1};
                    console.log("current: ", currentPosition);
                    console.log("new: ", newPosition);
                    document.querySelector("#camera_entity").setAttribute('position', newPosition);
                    }
            })
    }
})