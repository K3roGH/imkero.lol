function enterSite() {
    const enterScreen = document.querySelector('.enter-screen');
    const video = document.getElementById('backgroundVideo');

    enterScreen.classList.add('fade-out');
    video.muted = false;
    video.play();
}
