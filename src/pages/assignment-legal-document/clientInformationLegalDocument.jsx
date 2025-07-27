import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import FadeInFromBelow from '../../animationUtilities';
import { Navbar } from '../navbar';
import { ClientInfoButtonLegalDocument } from './clientInfoButtonLegalDocument';

export const ClientInformationLegalDocuments = () => {
  const navigate = useNavigate();

  return (<>
    <Navbar />
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-6 text-center font-mono">
      <h1 className="text-4xl font-bold mb-6 text-primary">
      
        {/* This style of type writer allows me to be faster */}
        <Typewriter
          options={{delay: 50,}}
          onInit={(typewriter) => {
            typewriter.typeString('Recipient Intelligence Briefing')
              .start();
          }}
        />
      </h1>

      <FadeInFromBelow delay={0.5}>
        <div className="max-w-3xl bg-base-200 p-6 rounded-lg shadow-lg space-y-5 text-left text-base-content">
          <p>
            The recipient is a high-profile academic affiliated with a major university. He lives in an upscale neighborhood in the city, and while his professional contact details are publicly listed on the university website, his work email is rarely monitored.
          </p>

          <p>
            Instead, he publicly shares a personal email address for urgent or time-sensitive matters. This address is easier to access but also more exposed — bad actors know this, and may attempt to intercept or spoof communication through this route.
          </p>

          <p>
            <strong>Important:</strong> The lawsuit you're delivering is highly sensitive. Leaks could jeopardize national interests and trigger political fallout. The government has quietly involved you to ensure secrecy.
          </p>

          <p>
            If this lawsuit becomes public before it reaches the recipient, it could be used against him by:
          </p>
        
          <ul className="list-disc list-inside ml-4">
            <li>Rival institutions with competing interests aiming to damage his reputation</li>
            <li>Political parties / nations seeking political leverage</li>
            <li>Opportunists (Or even a normal person) given leverage to extort him via blackmail</li>
          </ul>

          <p className="mt-4">
            The more efficient and discreet you are, the more you save the courts in time and resources — and the more you'll be rewarded. But if you slip up and cause a breach, delays or exposure, it'll cost everyone… including your final payout.
          </p>
        </div>
      </FadeInFromBelow>

      

      <FadeInFromBelow delay={3}>
        <button
          className="btn btn-primary mt-8 text-lg px-8"
          onClick={() => navigate('/assignment/legal-document/decision1')}
        >
          Proceed to First Choice
        </button>
      </FadeInFromBelow>

      
    </div>
    <FadeInFromBelow delay={3.5}>
        <ClientInfoButtonLegalDocument />
    </FadeInFromBelow>
  </>);
};

