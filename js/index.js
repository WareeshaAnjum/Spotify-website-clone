let a = document.getElementById('audio')
function aplay(){
    a.play();
    document.querySelector('btn-action .fa-play').computedStyleMap.display='none;'
}