import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import bgSound from '../assets/what-goes-up-must-go-down-looping-tune-225706.mp3';
import { setChoseVirtual, setFoundPersonalEmail, setGotMimAttackEmail } from '../localStorageHelpers';
import { resetBars } from './assignment-legal-document/points';

// Stole sound effects library from this article:
// https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/

// Sound stolen from here
// https://pixabay.com/users/yo-tu-45000291/

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Set `loop: true` to keep the background sound playing
  const [play, { stop }] = useSound(bgSound, {
    volume: 0.3,
    loop: true,
  });

  const toggleSound = () => {
    if (isMuted) {
      play(); // start the looped playback again
    } else {
      stop(); // stop playback
    }
    setIsMuted(!isMuted);
  };

  const handleSave = () => {
    console.log('Save clicked');
  };

  const handleLoad = () => {
    console.log('Load clicked');
  };

  const handleRestart = () => {
    resetBars();
    setFoundPersonalEmail(false);
    setGotMimAttackEmail(false);
    setChoseVirtual(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm relative z-50">
        {/* Left hamburger */}
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Center title */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" onClick={() => navigate("/home")}>
            Virtual v/s Physical Mail
          </a>
        </div>

        {/* Right mute/unmute button */}
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => {toggleSound()}}
          >
            {isMuted ? (
              // Muted icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14l-5-5H2V10h2l5-5zM15 9l6 6M21 9l-6 6" />
              </svg>
            ) : (
              // Unmuted icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14l-5-5H2V10h2l5-5zM15 10a3 3 0 010 4m3-6a6 6 0 010 8" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && <Sidebar handleSave={handleSave} handleLoad={handleLoad} handleRestart={handleRestart}/>}
    </>
  );
};

const Sidebar = ({handleSave, handleLoad, handleRestart}) => {
  return (<div className="fixed top-0 left-0 h-full w-60 bg-base-200 shadow-lg p-4 z-40">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul className="space-y-3">
            <li>
              <button className="btn btn-outline btn-block" onClick={handleSave}>
                Save
              </button>
            </li>
            <li>
              <button className="btn btn-outline btn-block" onClick={handleLoad}>
                Load
              </button>
            </li>
            <li>
              <button className="btn btn-error btn-block" onClick={handleRestart}>
                Restart
              </button>
            </li>
          </ul>
        </div>);
}