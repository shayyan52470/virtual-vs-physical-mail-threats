import useSound from "use-sound";
import happinessSfx from '../../assets/sfx/loseHappyPoint.mp3';
import resourceSfx from '../../assets/sfx/loseResourcePoint.mp3';
import speedSfx from '../../assets/sfx/loseSpeedPoint.mp3';
import { getHappiness, getResources, getSpeed, MAX_POINTS, setHappiness, setResources, setSpeed } from "../../localStorageHelpers";

// Sound hooks (can be used inside components)
export const useSpeedPoint = () => {
  const [playSpeed] = useSound(speedSfx, { volume: 0.5 });

  return () => {
    const current = getSpeed();
    if (current > 0) {
      setSpeed(current - 1);
      playSpeed();
    }
  };
};

export const useResourcePoint = () => {
  const [playResources] = useSound(resourceSfx, { volume: 0.5 });

  return () => {
    const current = getResources();
    if (current > 0) {
      setResources(current - 1);
      playResources();
    }
  };
};

export const useHappinessPoint = () => {
  const [playHappiness] = useSound(happinessSfx, { volume: 0.5 });

  return () => {
    const current = getHappiness();
    if (current > 0) {
      setHappiness(current - 1);
      playHappiness();
    }
  };
};

export const resetBars = () => {
  setSpeed(MAX_POINTS);
  setResources(MAX_POINTS);
  setHappiness(MAX_POINTS);
};

// Expose getters
export const getPoints = () => ({
  speed: getSpeed(),
  resources: getResources(),
  happiness: getHappiness(),
});