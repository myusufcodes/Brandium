export const playSound = () => {
    const audio = new Audio("/tick.mp3");
    audio.currentTime = 0;
    audio.play().catch(() => {
        console.error("Click Anywhere on the site and then the audio will work. This error occurs because of audio autoPlay policies")
    })
}