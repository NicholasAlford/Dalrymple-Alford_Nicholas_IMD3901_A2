AFRAME.registerComponent('grow-cow-component', {
    schema: {},
    init : function(){
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#growSound');

        Context_AF.el.addEventListener('click', function(event){
            Context_AF.growCow();
            console.log("GROW CLICK");
            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });

    },
    growCow : function(){
        const Context_AF = this;
        let cow = document.getElementById('moo');
        console.log(cow);
        cow.setAttribute('scale',{ x: 2, y: 2, z: 2});
    }
});