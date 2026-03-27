let hoverSound: HTMLAudioElement | null = null;
let isEnabled = false;

// Call this once after the user clicks anywhere
export const enableHoverSound = () => {
  if (!hoverSound) {
    hoverSound = new Audio("/sounds/audio.m4a");
    hoverSound.load(); // preload the sound
  }
  isEnabled = true;
};

// Call this on hover after enableHoverSound has run
export const playHoverSound = () => {
  if (isEnabled && hoverSound) {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {
      // Optional: ignore errors if user hasn't interacted
    });
  }
};
