import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import FadeInFromBelow from "../../animationUtilities";
import { Navbar } from "../navbar";

export const IntroToBadActors = () => {
  const [clickedActors, setClickedActors] = useState([]);
  const navigate = useNavigate();

  const actors = [
    {
      id: "hackers",
      label: "Hackers",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>

      ),
      description: "Hackers seek to breach systems, often motivated by curiosity, money, or political goals.",
      example: "An anonymous hacker leaks millions of user passwords from a social media site."
    },
    {
      id: "companies",
      label: "Companies",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21V7a1 1 0 0 1 1-1h4V3h8v3h4a1 1 0 0 1 1 1v14" />
          <path d="M3 21h18" />
          {/* <path d="M9 21V9" /> */}
          {/* <path d="M15 21V9" /> */}
          <path d="M9 10h6" />
          <path d="M9 13h6" />
          <path d="M9 16h6" />
          <path d="M9 19h6" />
        </svg>

      ),
      description: "Companies may act maliciously to sabotage competitors or gather unauthorized data.",
      example: "A rival firm launches spyware to track competitor product development."
    },
    {
      id: "governments",
      label: "Governments",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 11h18" />
          <path d="M5 11V7h14v4" />
          <path d="M2 21h20" />
          <path d="M6 21v-6" />
          <path d="M10 21v-6" />
          <path d="M14 21v-6" />
          <path d="M18 21v-6" />
          <path d="M12 3v4" />
          <path d="M9 7h6" />
        </svg>
      ),
      description: "Governments can spy or restrict access to information for national security or control.",
      example: "A foreign government hacks a voting system to manipulate election results."
    },
    {
      id: "scammers",
      label: "Scammers",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v10a4 4 0 1 1-4 4" />
          <path d="M16 6a4 4 0 1 0-8 0" />
        </svg>

      ),
      description: "Scammers exploit individuals through fake offers or phishing to steal money or info.",
      example: "A phishing email pretends to be a bank, tricking someone into giving away login details."
    },
    {
      id: "civilians",
      label: "Civilians",
      icon: (
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
        </svg>
      ),
      description: "Civilians may act selfishly when they realize systems can be gamed or exploited.",
      example: "A user repeatedly creates fake accounts to exploit a signup bonus system."
    }
  ];

  const openModal = (id) => {
    document.getElementById(`modal_${id}`).showModal();
  };

  const handleClose = (id) => {
    setClickedActors(prev => [...new Set([...prev, id])]);
  };

  const allClicked = clickedActors.length === actors.length;

  return (
    <>
      <Navbar />
      <div className="p-10 font-mono space-y-10">
        <h1 className="text-3xl font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Understanding Cyber Threat Actors")
                .start()
                .pauseFor(1000);
            }}
          />
        </h1>

        {(
          <FadeInFromBelow>
            <p className="text-xl">
              There are many actors who may try to intercept, alter or exploit messages and data in cyberspace. Here are a few common ones:
            </p>

            <div className="flex flex-wrap gap-10 justify-center">
              {actors.map(({ id, label, icon }) => (
                <div
                  key={id}
                  className={`card w-64 cursor-pointer ${clickedActors.includes(id) ? "opacity-50" : ""}`}
                  onClick={() => openModal(id)}
                >
                  <figure className="p-5">{icon}</figure>
                  <div className="card-body items-center">
                    <h2 className="card-title">{label}</h2>
                  </div>
                </div>
              ))}
            </div>

            {actors.map(({ id, label, description, example }) => (
              <dialog id={`modal_${id}`} className="modal" key={`modal_${id}`}>
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg">{label}</h3>
                  <p className="py-2">{description}</p>
                  <p className="italic text-sm text-gray-500">Example: {example}</p>
                  <div className="modal-action">
                    <button className="btn" onClick={() => handleClose(id)}>Close</button>
                  </div>
                </form>
              </dialog>
            ))}

            {allClicked && (
              <FadeInFromBelow>
                <div className="mt-10 space-y-4 text-lg max-w-2xl mx-auto">
                  <p>
                    Understanding these actors helps shape our security decisions. But securing systems against all of them without reducing efficiency or ease of use is difficult.
                  </p>
                  <p>
                    Sometimes, users reject secure systems simply because they're inconvenient or seem slower — even if they offer better protection.
                  </p>

                  <div className="text-center pt-6">
                    <button className="btn btn-primary" onClick={() => navigate("/assignment/legal-document/brief")}>
                      Next
                    </button>
                  </div>
                </div>
              </FadeInFromBelow>
            )}
          </FadeInFromBelow>
        )}
      </div>
    </>
  );
};
