import { useState } from "react";

export const ClientInfoButtonLegalDocument = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  return (
    <div className="font-mono">
      {/* Button fixed to bottom of page */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className={`btn 'btn-primary'`}
          onClick={handleOpen}
        >
          {/* {used ? 'Info Viewed' : 'View Client Info'} */}
          View Client Info
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <dialog open className="modal modal-open z-50">
          <div className="modal-box bg-base-200 border border-accent shadow-xl font-mono">
            <h3 className="text-xl font-bold mb-4 border-b border-accent pb-2">
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
            </svg> Identification File
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><strong>Name:</strong> Dr. Anthony Wells</p>
              <p><strong>DOB:</strong> 12 March 1981</p>
              <p><strong>Employee:</strong> UNSW – School of Politics</p>
              <p><strong>Sex:</strong> Male</p>
              <p><strong>Marital Status:</strong> Divorced</p>
              <p><strong>Address:</strong> 21 Bellmore Avenue, Sydney, NSW</p>
              <p><strong>Work Email:</strong> a.wells@unsw.edu.au</p>
              <p><strong>Note:</strong> He prefers urgent communication via his <em>personal email</em> listed on his blog or profile for his academic institute.</p>
            </div>

            <div className="modal-action mt-6">
              <button className="btn" onClick={() => setModalOpen(false)}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};