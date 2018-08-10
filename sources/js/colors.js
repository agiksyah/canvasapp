var colors = ['black', 'white', 'grey', 'blue', 'indigo', 'orange', 'yellow', 'red', 'green', 'violet'];

for(i=0, n=colors.length;i<n;i++){
    var swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(swatch);
}

function setColor(color){
    context.fillStyle = color;
    context.strokeStyle = color;
    var active = document.getElementsByClassName('active')[0];
    if (active){
        active.className = 'swatch';
    }
}

function setSwatch(e){
    //identify swatch
    var swatch = e.target;
    //set color
    setColor(swatch.style.backgroundColor);
    //give active class
    swatch.className += ' active ';
    
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});