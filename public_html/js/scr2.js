var intervalValue = 5000,
        items = 10,
        sw = 1;
window.onload = function () {
     window.setInterval(function() {
     toggling();
     }, intervalValue);
};
toggling = function () {
    //console.log('[' + performance.now() + '] myFunc fired, sw = ' + sw);
    if (sw === items) {
        document.getElementById('sideItem' + sw).classList.remove('selected');
        document.getElementById('centerItem' + sw).classList.remove('active');
        sw = 1;
        document.getElementById('sideItem' + sw).classList.add('selected');
        document.getElementById('centerItem' + sw).classList.add('active');
    }
    else {
        document.getElementById('sideItem' + sw).classList.remove('selected');
        document.getElementById('centerItem' + sw).classList.remove('active');
        sw++;
        document.getElementById('sideItem' + sw).classList.add('selected');
        document.getElementById('centerItem' + sw).classList.add('active');
    }
};