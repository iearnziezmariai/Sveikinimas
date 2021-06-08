var playAudio = () => {
    random = 1 + Math.floor(Math.random() * 10);
    random.toString();
    
    var audio = new Audio("Audio/" + random + ".wav");
    var playPromise = audio.play(); 

    if (playPromise !== undefined) {
        playPromise.then(function() {
            // Automatic playback started!
        }).catch(function(error) {
            // Automatic playback failed.
            // Show a UI element to let the user manually start playback.
            console.log(error);
        });
    }
}  
window.addEventListener('mousedown', e => {
    playAudio();
});