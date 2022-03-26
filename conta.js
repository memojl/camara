function counter(id, start, end) {
    var i = (start>end)?start+1:start-1;
    var display = document.getElementById(id);
    var timer = setInterval(function() {
        if(i>end){i--;}else{i++;}
        if(i==end){clearInterval(timer);}
        display.innerHTML = i;
    }, 1000);
}
counter('display', 0, 10);
