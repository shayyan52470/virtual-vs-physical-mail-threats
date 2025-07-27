import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import FadeInFromBelow from '../../animationUtilities';
import { Navbar } from '../navbar';

export const AssignmentBriefLegalDocument = () => {
  const navigate = useNavigate();
  return (<>
    <Navbar />
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-6 text-center font-mono">
      <h1 className="text-4xl font-bold mb-6 text-primary">

        <Typewriter
          options={{delay: 50,}}
          onInit={(typewriter) => {
            typewriter.typeString('Covert Delivery: The Lawsuit')
              .start();
          }}
        />
      </h1>

      <FadeInFromBelow delay={1}>
        <div className="max-w-2xl bg-base-200 p-6 rounded-lg shadow-md">
          <p className="text-lg">
            You've been tasked with delivering a highly sensitive legal document — a lawsuit notice.
            The catch? It must be delivered in secret. You'll have to decide between physical or virtual delivery,
            balancing <strong>security</strong>, <strong>efficiency</strong>, and <strong>stealth</strong>. 
            Every decision you make will impact your outcome. Be cautious — interception or exposure could 
            compromise everything.
          </p>

          <p className="mt-4 text-md text-neutral-content">
            Ready to navigate the gray area between convenience and confidentiality?
          </p>
        </div>
      </FadeInFromBelow>

      <FadeInFromBelow delay={2}>
        <button
          className="btn btn-primary mt-8 text-lg px-8"
          onClick={() => navigate('/assignment/legal-document/client')}
        >
          Start
        </button>
      </FadeInFromBelow>
    </div>
  </>);
}