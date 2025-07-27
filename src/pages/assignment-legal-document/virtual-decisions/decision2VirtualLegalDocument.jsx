import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import FadeInFromBelow from '../../../animationUtilities';
import { setFoundPersonalEmail, setGotMimAttackEmail } from '../../../localStorageHelpers';
import { Navbar } from '../../navbar';
import { ProgressBarManager } from '../ProgressBarManager';
import { ClientInfoButtonLegalDocument } from '../clientInfoButtonLegalDocument';
import { useSpeedPoint } from '../points';
import { possibleSearchResults, spoofedEmails } from './searchLists';

/**
 * This decision is for choosing an email
 * kept the name annonymous as it can change and vary what options you put
 * here later down the line - possibly add fax or other options
 * @returns 
 */
export const Decision2_Virtual_LegalDocument = () => {
  const navigate = useNavigate();
  const spendSpeed = useSpeedPoint();

  const [showButtons, setShowButtons] = useState(false);
  const [showinputEmail, setShowInputEmail] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [email, setEmail] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const workEmail = 'a.wells@unsw.edu.au';
  const personalEmail = 'awells.personal@gmail.com';

  const handleConfirm = () => {
    if (email.trim().toLowerCase() === workEmail.toLowerCase()) {
      spendSpeed();
      spendSpeed();
      navigate('/assignment/legal-document/virtual/decision3');
    } else if (email.trim().toLowerCase() === personalEmail.toLowerCase()) {
      setFoundPersonalEmail(true);
      navigate('/assignment/legal-document/virtual/decision3');
    } else {
      setFoundPersonalEmail(false);

      for (const spoofedEmail of spoofedEmails) {
        if (email.trim().toLowerCase() === spoofedEmail.trim().toLowerCase()) {
          setGotMimAttackEmail(true);
        }
      }
      navigate('/assignment/legal-document/virtual/decision3');
    }

    // This was for a previous iteration of the code, now is just here for bug checking
    setShowErrorModal(true);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (<>
    <Navbar />
    <div className="flex flex-col items-center text-center font-mono top-3">
      <div className="max-w-3xl">
        <h3 className="text-3xl mb-10">
          <Typewriter options={{delay: 50,}} 
            onInit={(typewriter) => {
              typewriter.typeString('Would you like to use his official or personal email?')
                .start()
                .pauseFor(2000)
                .callFunction(() => {
                  const cursor = document.querySelector('.Typewriter__cursor');
                  if (cursor) {
                    cursor.style.display = 'none';
                  }

                  setShowButtons(true);
                });;
            }}
          />
        </h3>
          
        {/* Button choices for personal or professional email */}
        {showButtons && (<FadeInFromBelow>
          <div className="flex flex-col sm:flex-row gap-6 fade-in">
            {/* Option 1 - Use Work Email */}
            <button
              onClick={() => setShowInputEmail(true)} // change path as needed
              className="btn btn-lg btn-primary btn-outline px-8 py-4 text-xl shadow-md flex-1"
            >
              Use Work Email
            </button>

            {/* Option 2 - Search Personal Email */}
            <button
              onClick={() => {
                setShowSearchBar(true);
                setShowSearchBar(true);
              }}
              className="btn btn-lg btn-primary btn-outline px-8 py-4 text-xl shadow-md flex-1"
            >
              Search for Personal Email
            </button>
          </div>
        </FadeInFromBelow>)}

        {showSearchBar && <>
          <div className="mt-8">
            <FadeInFromBelow>
              <SearchBarResults />
            </FadeInFromBelow>
          </div>
        </>}

        {showinputEmail && (<FadeInFromBelow >
          <br />
          <InputEmail
            email={email}
            setEmail={setEmail}
            handleConfirm={handleConfirm}
            showErrorModal={showErrorModal}
            handleRestart={handleRestart}
          />
        </FadeInFromBelow>)}
      </div>
    </div>

    <ClientInfoButtonLegalDocument />
    <ProgressBarManager />
  </>);
};

// eslint-disable-next-line react-refresh/only-export-components
const InputEmail = ({ email, setEmail, handleConfirm, showErrorModal, handleRestart }) => {
  return (<>
    <h3>Give the email below:</h3>
    <form 
      className="join"
      onSubmit={(e) => {
        e.preventDefault(); // prevent page reload
        handleConfirm();
      }}
    >
      
      <div>
        <label className="input validator join-item">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            placeholder="mail@site.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>
      <button className="btn btn-neutral join-item">Confirm</button>
    </form>
    {/* Modal */}
    {showErrorModal && (
      <dialog open className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">Incorrect Email!</h3>
          <p className="py-4">Oops! That email doesn't match the expected format. Please restart.</p>
          <div className="modal-action">
            <button onClick={handleRestart} className="btn btn-error">
              Restart
            </button>
          </div>
        </div>
      </dialog>)}
  </>);
}

// eslint-disable-next-line react-refresh/only-export-components
const SearchBarResults = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setExpandedIndex(null); // Collapse any open panel
  };

  const filteredResults = possibleSearchResults.filter(result => {
    if (searchTerm.toLowerCase().includes('unsw') || searchTerm.toLowerCase().includes('anthony') || searchTerm.toLowerCase().includes('wells')) {
      return result.relevant;
    } else {
      return true;
    }
  });

  return (
    <div className="flex flex-col items-center px-4">
      <input
        className="input input-bordered w-full max-w-xl mb-4"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for personal email..."
      />

      <div className="w-full max-w-xl h-[400px] overflow-y-scroll border border-gray-300 rounded-lg p-4 space-y-3 bg-white">
        {filteredResults.map((result, index) => (
          <div key={index} className="border-b pb-2">
            <div
              className="cursor-pointer hover:underline text-blue-600"
              onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
            >
              <p className="font-semibold">{result.title}</p>
              <p className="text-sm text-gray-500">{result.url}</p>
            </div>

            <Collapse isOpened={index === expandedIndex}>
              {result.names.length > 0 ? (
                <ul className="mt-2 ml-4 list-disc text-left">
                  {result.names.map((entry, i) => (
                    <li key={i}>
                      {entry.name}: <span className="text-green-700">{entry.email}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm mt-2 text-gray-400">No contact information found.</p>
              )}
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};