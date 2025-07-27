// CIANAIntro.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeInFromBelow from "../../animationUtilities";
import { Navbar } from "../navbar";

const CIANA_ELEMENTS = [
  {
    id: "confidentiality",
    label: "Confidentiality",
    description: "Ensures that information is only accessible to those who are authorized.",
    consequence: "If compromised, sensitive data like passwords, personal identity, or medical records can be leaked, leading to privacy breaches or identity theft."
  },
  {
    id: "integrity",
    label: "Integrity",
    description: "Assures that information is trustworthy and accurate, not tampered with or altered.",
    consequence: "If integrity is broken, a bank account number could be changed in an invoice — sending funds to a scammer."
  },
  {
    id: "availability",
    label: "Availability",
    description: "Guarantees reliable access to information and systems when needed.",
    consequence: "A denial-of-service attack on a hospital could prevent doctors from accessing patient records during an emergency."
  },
  {
    id: "non-repudiation",
    label: "Non-Repudiation",
    description: "Prevents parties from denying their actions, like sending or receiving a message.",
    consequence: "A user could falsely deny making a critical request or transaction, leading to disputes or legal issues."
  },
  {
    id: "authentication",
    label: "Authentication",
    description: "Confirms that users and systems are who they claim to be.",
    consequence: "Without authentication, attackers can impersonate trusted users and gain unauthorized access."
  }
];

export const IntroToCIANA = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState({});
  const [activeModal, setActiveModal] = useState(null);

  const toggleCheck = (id) => {
    setChecked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    if (!checked[id]) setActiveModal(id);
  };

  const allChecked = CIANA_ELEMENTS.every(item => checked[item.id]);

  return (
    <>
      <Navbar />
      <div className="p-10 space-y-6 font-mono">
        <h1 className="text-3xl font-bold">Understanding CIANA</h1>
        <p className="text-lg max-w-3xl">
          In summary, if we combine the concerns of the Receiver and Sender, we end up making different security models that highlight what values we want to prioritise in sending any information. Physically or Virtually. 
          <br />
          <br />
          CIA is one model (<i>You can learn more about it using the resources provided later</i>), however the model we will discuss is CIANA as it is more a comprehensive model in cybersecurity that outlines five core principles necessary for a secure system. Each part plays a crucial role in protecting data and communication, from ensuring privacy to proving identity.
        </p>

        <div className="space-y-4">
          {CIANA_ELEMENTS.map(({ id, label }) => (
            <div key={id} className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-lg">{label}</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={!!checked[id]}
                  onChange={() => toggleCheck(id)}
                />
              </label>
            </div>
          ))}
        </div>

        {/* Modals */}
        {CIANA_ELEMENTS.map(({ id, label, description, consequence }) => (
          <dialog
            key={id}
            id={`${id}_modal`}
            className={`modal ${activeModal === id ? "modal-open" : ""}`}
          >
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">{label}</h3>
              <p className="py-2">{description}</p>
              <p className="italic text-sm text-gray-600">Example: {consequence}</p>
              <div className="modal-action">
                <button className="btn" onClick={() => setActiveModal(null)}>Close</button>
              </div>
            </form>
          </dialog>
        ))}

        {/* Final Insight */}
        {allChecked && (
          <FadeInFromBelow>
            <div className="mt-10 border-t pt-6 max-w-4xl text-lg space-y-4">
              <h2 className="text-2xl font-semibold">Balancing Security vs Usability</h2>
              <p>
                While CIANA provides an essential framework for securing systems, implementing every component rigorously can often lead to inefficiencies. Too many security checks or authentication layers can create friction and slow down workflows.
              </p>
              <p>
                This friction causes users to find workarounds or abandon best practices altogether, believing security is a hindrance rather than a necessity. Balancing ease of use with robust protection remains one of cybersecurity’s greatest challenges.
              </p>
            </div>

            <br />
            <div> 
              <h2 className="text-lg"><strong>You can learn more here: </strong></h2>
              <ul>
                <li>CIANA is very comprehensive and more can be found here: 
                  <a href="https://www.hoppersroppers.org/security/Risk/0-CIANA.html" target="_blank" rel="noopener noreferrer" className="link">
                    Hoppers Roppers – CIANA Breakdown
                  </a> 
                </li>
                <li>Many institutes also teach CIA, however it is not as encompassing: 
                  <a href="https://informationsecurity.wustl.edu/guidance/confidentiality-integrity-and-availability-the-cia-triad/" target="_blank" rel="noopener noreferrer" className="link">
                    Washington University – CIA Triad Overview
                  </a>

                </li>
              </ul>
            </div>
          
            <div className="mt-10 flex justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/intro-to-bad-actors");
                }}
              >
                Next
              </button>
            </div>
          </FadeInFromBelow>
        )}
      </div>
    </>
  );
};
