// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import FadeInFromBelow from "../../animationUtilities";
import { getUserName } from "../../localStorageHelpers";
import { Navbar } from "../navbar";


export const IntroToMessageSending = () => {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  const [showRestOfContent, setShowRestOfContent] = useState(false);
  const [senderClicked, setSenderClicked] = useState(false);
  const [receiverClicked, setReceiverClicked] = useState(false);

  const SenderCard = () => (<div
    className={`card w-64 cursor-pointer ${senderClicked ? 'opacity-50' : ''}`}
    onClick={() => document.getElementById('sender_modal').showModal()}
  >
    <figure className="px-10 pt-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
      </svg>
    </figure>
    <div className="card-body items-center">
      <h2 className="card-title">Sender</h2>
    </div>
  </div>);

  const ReceiverCard = () => {
  return <div
      className={`card w-64 cursor-pointer ${receiverClicked ? 'opacity-50' : ''}`}
      onClick={() => document.getElementById('receiver_modal').showModal()}
    >
      <figure className="px-10 pt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
        </svg>
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">Receiver</h2>
      </div>
    </div>;
  }

  const SenderModal = () => (
    <dialog id="sender_modal" className="modal">
          <form method="dialog" className="modal-box">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
              <h3 class="text-lg font-bold">Sender</h3>
            </div>
            <p>
              The sender is the person initiating the mail. They package and dispatch the message with intent and address.
            </p>
            <p>
              They value the <strong>confidentiality</strong> of their message — that nothing gets leaked and it’s only read by the intended recipient.
            </p>
            <p>
              The sender also wants to be sure that <strong>no one can impersonate or alter</strong> their message during transit.
            </p>
          </div>

            <div className="modal-action">
              <button className="btn" onClick={() => setSenderClicked(true)}>Close</button>
            </div>
          </form>
        </dialog>);

  const ReceiverModal = () => (
    <dialog id="receiver_modal" className="modal">
      <form method="dialog" className="modal-box">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            width="40"
            height="40"
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8h8M8 12h6M8 16h4" />
          </svg>

            <h3 class="text-lg font-bold">Receiver</h3>
          </div>
          <p>
            The receiver is the intended destination. They open, read, and interpret the message when it arrives.
          </p>
          <p>
            They want to make sure the message is <strong>unchanged</strong> and truly from the right person — <strong>authenticated</strong> and <strong>verified</strong>.
          </p>
          <p>
            Imagine getting a fake letter from your bank with <strong>$2,000</strong> in fake fees. Or worse, a real letter where the invoice’s bank details were <strong>quietly altered</strong>. The consequences could be serious.
          </p>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => setReceiverClicked(true)}>Close</button>
        </div>
      </form>
    </dialog>);

  return (
    <>
      <Navbar />
      <div className="p-10 space-y-10 font-mono max-w-3xl">
        <h1 className="text-3xl font-bold">
          <Typewriter
            options={{delay: 50,}}
            onInit={(typewriter) => {
              typewriter.typeString('Let\'s try to understand what is sending mail?')
                .start()
                .pauseFor(1000)
                .typeString('<br />Whenever we send mail')
                .pauseFor(500)
                .callFunction(() => {
                  const cursor = document.querySelector('.Typewriter__cursor');
                  if (cursor) {
                    cursor.style.display = 'none';
                  }

                  setShowAnimation(true);
                })
                .pauseFor(2000)
                .callFunction(() => {
                  setShowRestOfContent(true);
                });
            }}
          />
        </h1>

        {showAnimation && (<FadeInFromBelow>
            <MailAnimation username={getUserName()}/>
          </FadeInFromBelow>)}
        {showRestOfContent && (<FadeInFromBelow>
          <p className="text-xl">
          <Typewriter
            options={{delay: 50,}}
            onInit={(typewriter) => {
              typewriter.typeString('It\'s a message with information that goes from one location to another. We have multiple people involved.')
                .start()
                .typeString('<br /><br /><br />At the bare minimum they are at least two.')
                .pauseFor(500)
                .callFunction(() => {
                  const cursor = document.querySelector('.Typewriter__cursor');
                  if (cursor) {
                    cursor.style.display = 'none';
                  }

                  setShowAnimation(true);
                })
                .pauseFor(2000)
                .callFunction(() => {
                  setShowRestOfContent(true);
                });
            }}
          />
          </p>
            
          

          <h2 className="text-2xl font-semibold">
             
          </h2>
          <h3>Click on both to learn more:</h3>

          {/* Flexbox with sender/receiver cards */}
          <div className="flex justify-around gap-10">
            <SenderCard />

            <ReceiverCard />
          </div>

          <SenderModal />

          <ReceiverModal />

          {senderClicked && receiverClicked && (
            <div className="flex justify-center mt-10">
              <button
                className="btn btn-primary"
                onClick={() => navigate('/intro-to-CIANA')}
              >
                Next
              </button>
            </div>
          )}

        </FadeInFromBelow>)}
      </div>
    </>
  );
};

/**
 * 
 * @param {string} username - Passed in as argument and is username 
 * @returns 
 */
const MailAnimation = ({username}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, 250],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        margin: "2rem auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sender */}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
          </svg>
        </div>
        <div>{username}</div>
      </div>

      {/* Mail Animation */}
      <motion.div
        animate={controls}
        style={{
          position: "absolute",
          left: "40px",
          top: "10px",
          fontSize: "1.8rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </motion.div>

      {/* Receiver */}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
          </svg>
        </div>
        <div>Bob</div>
      </div>
    </div>
  );
};