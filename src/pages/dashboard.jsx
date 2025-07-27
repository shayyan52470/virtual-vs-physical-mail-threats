import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { getUserName, setUserName } from '../localStorageHelpers';
import { Navbar } from './navbar';



export const Dashboard = () => {
  const navigate = useNavigate();

  const [canShowNameInput, setCanShowNameInput] = useState(false);
  const [confirmSubmission, setConfirmSubmission] = useState(false);

  const showNameInput = () => {
    if (!canShowNameInput) {
      setCanShowNameInput(true);
    }
  }

  

  // Not conventional, but for the sake of allowing me to refer to other
  // functions within this component I put it in here instead of outside the
  // component
  

  return (
    <>
    <Navbar />
    <div className="centre top-3">
      <h1 className="text-6xl text-center font-mono">
        {/* https://www.npmjs.com/package/typewriter-effect */}
        <Typewriter
          options={{delay: 50,}}
          onInit={(typewriter) => {
            typewriter.typeString('Welcome to this')
              .start()
              .pauseFor(2000)
              .typeString('<br />interactive experience')
              .pauseFor(500)
              .typeString('.')
              .pauseFor(500)
              .typeString('.')
              .pauseFor(500)
              .typeString('.')
              .typeString('<br /> <br /> <br />What is your name? <br />')
              .callFunction(() => {
                const cursor = document.querySelector('.Typewriter__cursor');
                if (cursor) {
                  cursor.style.display = 'none';
                }

                // Show the input or do anything else
                showNameInput();
              });
          }}
        />

        {(canShowNameInput && <NameRequestInputBox setConfirmSubmission={setConfirmSubmission} />)}
        <br />

        {(confirmSubmission && <Typewriter
          options={{delay: 50,}}
          onInit={(typewriter) => {
            typewriter.typeString('Great! Nice to meet you ' + getUserName())
              .start()
              .typeString('<br /> Let\'s get started')
              .pauseFor(1000)
              .callFunction(() => {
                navigate('/intro-to-message-sending');
              });
          }}
        />)}
        
      </h1>
    </div>
    </>
  )
}

/**
 * Is a component for requesting the user's name
 * @param {function} setConfirmationSubmission : Function to handle submission confirmation 
 * @returns 
 */
const NameRequestInputBox = ({setConfirmSubmission}) => {
  const [name, setName] = useState('');

  const submitUsername = (inputName) => {
    setUserName(inputName);
    setName(inputName);
    setConfirmSubmission(true);
  }

  return (<form
    onSubmit={(e) => {
      e.preventDefault(); // prevent page reload
      submitUsername(name);
    }}
  >
    <div className="flex justify-center items-center w-full mt-10">
      <div>
        <label className="input input-lg">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19a6 6 0 00-12 0M9 11a4 4 0 100-8 4 4 0 000 8z"
              />
            </g>
          </svg>
          <input 
            type="text" 
            placeholder="Your Name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <div className="validator-hint hidden">Enter your name</div>
      </div>

      <button 
        className="btn btn-neutral input-lg ml-5"
      >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[1em] w-[1em] text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>

      </button>
    </div>
  </form>);
}