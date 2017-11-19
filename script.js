var container = document.querySelector(".parallax");
var layers = document.querySelectorAll(".layer");

function shadow(event) {
    var width = container.offsetWidth;
    var height = container.offsetHeight;

    var walk = 800; // 80px

    var x = event.offsetX;
    var y = event.offsetY;
    var z = 0;
    
    if (this !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }

    var xWalk = Math.round((x / width * walk) - (walk / 2));
    var yWalk = Math.round((y / height * walk) - (walk / 2));

    layers.forEach(function(layer) {
        
        var depth = layer.dataset.depth;        
        layer.style.webkitTransform = `
translate3d(${xWalk*depth}px, ${yWalk*depth}px, ${z}px)`; 
    })

}

container.addEventListener("mousemove", shadow);