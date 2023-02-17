// DARK-MODE & LIGHT MODE ;

function darkModeLightMode(mode){
    const body = document.getElementById('body-bg');
    body.style.backgroundColor=mode;
}

// Working with the Dark Mode;
document.getElementById('dark').addEventListener('click',function(){
    const darkMode = darkModeLightMode('black');
})
// Working with the Light Mode;
document.getElementById('light').addEventListener('click',function(){
   const lightMode = darkModeLightMode('white');
})

// Toogler;
function togglerMenu(toggler1,toggler2){
    const xmark = document.getElementById('xmark');
    const bars = document.getElementById('bars');
    xmark.style.display=toggler1;
    bars.style.display=toggler2;
}
document.getElementById('bars').addEventListener('click',function(){
    const xmark = togglerMenu('block','none');
})
document.getElementById('xmark').addEventListener('click',function(){
    const xmark = togglerMenu('none','block');
})