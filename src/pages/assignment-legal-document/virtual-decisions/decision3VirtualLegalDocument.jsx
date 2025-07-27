import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { setChoseNewEmail, setChoseNewWorkEmail, setChosePersonalEmail, setSecuredCommunications, setSecurePassword } from "../../../localStorageHelpers";
import { Navbar } from "../../navbar";
import { ClientInfoButtonLegalDocument } from "../clientInfoButtonLegalDocument";
import { useResourcePoint } from "../points";
import { ProgressBarManager } from "../ProgressBarManager";


export const Decision3_Virtual_LegalDocument = () => {
  const navigate = useNavigate();
  const loseResourcePoint = useResourcePoint();
  
  const [questionStep, setQuestionStep] = useState(1);
  const [emailPassword, setEmailPassword] = useState("");

  const handleSenderChoice = (choice) => {
    if (choice === "personal") setChosePersonalEmail(true);
    if (choice === "server") {
      loseResourcePoint();
      setChoseNewWorkEmail(true)
    };
    if (choice === "new") setChoseNewEmail(true);
    setQuestionStep(2);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const password = emailPassword.trim();

    // Regex: 8+ chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special char
    const isSecure = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
    setSecurePassword(isSecure);
    setQuestionStep(3);
  };

  const handleStoreDecision = (choice) => {
    setSecuredCommunications(choice);
    setQuestionStep(4); // Done
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto flex flex-col gap-8 text-center font-mono">

        {/* Question 1: Where to send from */}
        {questionStep >= 1 && (
          <>
            <div className="text-xl font-bold text-primary">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("From where would you like to send the email?")
                    .start()
                    .callFunction(() => {
                      const cursor = document.querySelector('.Typewriter__cursor');
                      if (cursor) {
                        cursor.style.display = 'none';
                      }
                    });
                }}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button className="btn btn-primary btn-outline" onClick={() => handleSenderChoice("personal")}>
                Use Personal Email
              </button>
              <button className="btn btn-primary btn-outline" onClick={() => handleSenderChoice("server")}>
                Create Mailing Server From Scratch
              </button>
              <button className="btn btn-primary btn-outline" onClick={() => handleSenderChoice("new")}>
                Create New Email Address
              </button>
            </div>
          </>
        )}

        {/* Question 2: Password Input */}
        {questionStep >= 2 && (
          <>
            <div className="text-xl font-bold text-primary">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("What password would you like to use for the email?")
                    .start()
                    .callFunction(() => {
                      const cursor = document.querySelector('.Typewriter__cursor');
                      if (cursor) {
                        cursor.style.display = 'none';
                      }
                    });
                }}
              />
            </div>
            <form onSubmit={handlePasswordSubmit} className="mt-4 flex flex-wrap justify-center gap-2">
              <input
                type="password"
                className="input input-bordered w-full max-w-md"
                placeholder="Enter email password"
                value={emailPassword}
                onChange={(e) => setEmailPassword(e.target.value)}
                required
              />
              <button className="btn btn-neutral" type="submit">Submit</button>
            </form>

          </>
        )}

        {/* Question 3: Store or Delete */}
        {questionStep >= 3 && (
          <>
            <div className="text-xl font-bold text-primary">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Do you want to store the email after sending or delete it for confidentiality?")
                    .start()
                    .callFunction(() => {
                      const cursor = document.querySelector('.Typewriter__cursor');
                      if (cursor) {
                        cursor.style.display = 'none';
                      }
                    });
                }}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button className="btn btn-success" onClick={() => handleStoreDecision("store")}>
                Store It
              </button>
              <button className="btn btn-error" onClick={() => handleStoreDecision("delete")}>
                Delete for Confidentiality
              </button>
            </div>

          </>
        )}

        {questionStep === 4 && (
          <div className="mt-8 p-4 rounded-lg shadow text-center flex flex-col items-center gap-4">
            <button className="btn btn-primary" onClick={() => navigate("/assignment/legal-document/result")}>
              See Results
            </button>
          </div>
        )}
        
      </div>

      <ClientInfoButtonLegalDocument />
      <ProgressBarManager />
    </>
  );
};
