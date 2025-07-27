import {
  getChoseNewEmail,
  getChoseNewWorkEmail,
  getChosePersonalEmail,
  getChoseVirtual,
  getFoundPersonalEmail,
  getGotMimAttackEmail,
  getResources,
  getSecurePassword,
  getSecuredCommunications,
  getSpeed,
  getUsedWorkEmail,
} from "../../localStorageHelpers";
import { Navbar } from "../navbar";

export const ResultsPageLegal = () => {
  const speed = getSpeed();
  const resources = getResources();
  const totalValue = ((speed + resources) * 10000) / 10;

  const choseVirtual = getChoseVirtual();
  const choseNewEmail = getChoseNewEmail();
  const choseNewWorkEmail = getChoseNewWorkEmail();
  const chosePersonalEmail = getChosePersonalEmail();
  const usedWorkEmail = getUsedWorkEmail();
  const usedPersonalEmail = getFoundPersonalEmail();
  const gotMimAttack = getGotMimAttackEmail();
  const securePassword = getSecurePassword();
  const securedComms = getSecuredCommunications();

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 prose">
        <h1 className="text-4xl font-bold mb-6 text-primary">📊 Simulation Results</h1>

        <p className="mb-4 text-xl">
          <strong>Total Money Value Earned (out of $10,000):</strong> ${totalValue.toLocaleString()}
        </p>

        {/* Speed */}
        <SpeedFeedback speed={speed} />

        {/* Virtual Email Sections */}
        {choseVirtual && (
          <VirtualMailResults
            chosePersonalEmail={chosePersonalEmail}
            choseNewEmail={choseNewEmail}
            choseNewWorkEmail={choseNewWorkEmail}
            usedPersonalEmail={usedPersonalEmail}
            usedWorkEmail={usedWorkEmail}
            gotMimAttack={gotMimAttack}
          />
        )}

        {/* Password */}
        <PasswordFeedback securePassword={securePassword} />

        {/* Storage */}
        <StorageFeedback choseVirtual={choseVirtual} securedComms={securedComms} />

        {/* CIANA Final Verdict */}
        <FinalVerdict />
      </div>
    </>
  );
};

const SpeedFeedback = ({ speed }) => {
  if (speed >= 3) return null;

  return (
    <p className="mb-4 text-warning">
      ⚠️ Due to a low speed score ({speed}/5), your documents were delayed.
      Courts experienced processing bottlenecks, and rescheduling added financial strain.
      <strong>This reduced both your credibility and efficiency.</strong>
    </p>
  );
};

const VirtualMailResults = ({
  chosePersonalEmail,
  choseNewEmail,
  choseNewWorkEmail,
  usedPersonalEmail,
  usedWorkEmail,
  gotMimAttack,
}) => {
  return (
    <>
      <h2 className="text-2xl mt-6 mb-2 font-bold">📧 Virtual Mailing Results</h2>

      {chosePersonalEmail && (
        <p className="mb-3 text-success">
          ✅ Using your personal email (like Gmail) was a secure and trusted method.
          Gmail uses <a href="https://support.google.com/mail/answer/180707" target="_blank" className="link link-primary">SPF</a>,
          <a href="https://support.google.com/mail/answer/180707?hl=en#dkim" target="_blank" className="link link-primary">DKIM</a>,
          and <a href="https://support.google.com/mail/answer/180707?hl=en#dmarc" target="_blank" className="link link-primary">DMARC</a>
          to prevent spoofing and prove message authenticity (integrity & authenticity in CIANA).
        </p>
      )}

      {choseNewEmail && (
        <p className="mb-3 text-error">
          ❌ You used a brand new email address. These are suspicious to recipients.
          Without proper SPF/DKIM/DMARC, it’s impossible to authenticate your identity.
          Your emails may have gone to spam, violating both <strong>Authenticity</strong> and <strong>Availability</strong>.
        </p>
      )}

      {choseNewWorkEmail && (
        <p className="mb-3 text-error">
          ⚠️ You created your own mailing server (e.g., using your website).
          While it may appear professional, these are vulnerable without initial security setup.
          Attackers could forge your domain emails without SPF/DKIM protections.
          <strong>Integrity</strong> and <strong>Authenticity</strong> are at risk.
        </p>
      )}

      {usedPersonalEmail && (
        <p className="mb-3 text-success">✅ You found the right email address!</p>
      )}

      {usedWorkEmail && (
        <p className="mb-3 text-warning">
          ❗ Using the university/work email introduced bureaucratic delays.
          He could easily argue that he never received anything and all our efforts to email him would be wasted.
          <strong>Confidentiality</strong> and <strong>Authenticity</strong> were jeopardized.
        </p>
      )}

      {!usedWorkEmail && !usedPersonalEmail && gotMimAttack && (
        <p className="mb-3 text-error">
          💀 A MiM (Man-in-the-Middle) attack occurred!
          The email content was intercepted and altered. The recipient was later blackmailed.
          <a className="link link-secondary" href="https://www.imperva.com/learn/application-security/man-in-the-middle-attack/" target="_blank">Learn about MiM attacks</a>.
          <strong>This broke all 5 CIANA principles.</strong>
        </p>
      )}

      {!usedWorkEmail && !usedPersonalEmail && !gotMimAttack && (
        <p className="mb-3 text-error">
          ❌ You got the wrong email address. Everything was leaked. Before being leaked,
          the recipient saw it as an opportunity to make money. You are now fined and jailed
          for leaking court documents.
        </p>
      )}
    </>
  );
};

const PasswordFeedback = ({ securePassword }) => (
  <>
    <h2 className="text-2xl mt-6 mb-2 font-bold">🔐 Password Security</h2>
    {securePassword ? (
      <p className="text-success">
        ✅ Your password was strong and met all criteria. No breaches occurred via brute force attacks.
      </p>
    ) : (
      <p className="text-error">
        ❌ Your password was weak and cracked. Attackers accessed the email system.
      </p>
    )}
  </>
);
