// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FadeInFromBelow from '../../animationUtilities';
import { getUserName } from '../../localStorageHelpers';
import { Navbar } from '../navbar';
import { ClientInfoButtonLegalDocument } from './clientInfoButtonLegalDocument';
import { ProgressBarManager } from './ProgressBarManager';

export const Decision1_LegalDocument = () => {
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 3000); // Delay until animation is done

    return () => clearTimeout(timer);
  }, []);

  return (<>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 gap-8 px-4">

      {/* Animation Area */}
      <div className="relative w-full max-w-md h-40">
        {/* Sender Icon */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-center flex flex-col">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
            <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <p className="text-sm font-semibold mt-2">{getUserName()}</p>
        </div>

        {/* Moving Document */}
        <motion.div
          initial={{ x: 60 }}
          animate={{ x: 180 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute top-1/2 transform -translate-y-1/2"
        >
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="text-accent"
          >
            <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM15 8V3.5L20.5 9H16a1 1 0 0 1-1-1z" />
            <path d="M8 10 L16 10 z" stroke="white"/>
            <path d="M8 13 L14 13 z" stroke="white"/>
            <path d="M8 16 L16 16 z" stroke="white"/>
          </svg>
        </motion.div>

        {/* Receiver Icon */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-center flex flex-col">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
            <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <p className="text-sm font-semibold mt-2 text-center">Dr. Anthony Wells</p>
        </div>
      </div>

      {/* Choice Buttons */}
      {showChoices && (
        <motion.div
          className="flex flex-col items-center gap-4 fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg font-medium text-center">How would you like to deliver the legal document?</p>
          <div className="flex gap-6">
            <button className="btn btn-primary btn-outline">
              Scan & Send Virtually
            </button>
            <button className="btn btn-neutral">
              Deliver Physically
            </button>
          </div>
        </motion.div>
      )}
      
    </div>
    <FadeInFromBelow delay={3.5}>
        <ClientInfoButtonLegalDocument />
    </FadeInFromBelow>
    <ProgressBarManager />
  </>);
};
