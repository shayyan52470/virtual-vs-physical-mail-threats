import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import './App.css'
import { AssignmentBriefLegalDocument } from './pages/assignment-legal-document/assignmentBriefLegalDocument'
import { ClientInformationLegalDocuments } from './pages/assignment-legal-document/clientInformationLegalDocument'
import { Decision1_LegalDocument } from './pages/assignment-legal-document/decision1_LegalDocument'
import { ResultsPageLegal } from './pages/assignment-legal-document/resultLegal'
import { Decision2_Virtual_LegalDocument } from './pages/assignment-legal-document/virtual-decisions/decision2VirtualLegalDocument'
import { Decision3_Virtual_LegalDocument } from './pages/assignment-legal-document/virtual-decisions/decision3VirtualLegalDocument'
import { IntroToBadActors } from './pages/background/introToBadActors'
import { IntroToCIANA } from './pages/background/introToCIANA'
import { IntroToMessageSending } from './pages/background/introToMessageSending'
import { Dashboard } from './pages/dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/intro-to-message-sending" element={<IntroToMessageSending />} />
        <Route path="/intro-to-CIANA" element={<IntroToCIANA />} />
        <Route path="/intro-to-bad-actors" element={<IntroToBadActors />} />

        /* This is information for legal document assignment */
        <Route path="/assignment/legal-document/brief" element={<AssignmentBriefLegalDocument />} />
        <Route path="/assignment/legal-document/client" element={<ClientInformationLegalDocuments />} />

        <Route path="/assignment/legal-document/decision1" element={<Decision1_LegalDocument />} />

        <Route path="/assignment/legal-document/virtual/decision2" element={<Decision2_Virtual_LegalDocument />} />

        <Route path="/assignment/legal-document/virtual/decision3" element={<Decision3_Virtual_LegalDocument />} />

        <Route path="/assignment/legal-document/result" element={<ResultsPageLegal />} />
      </Routes>
    </Router>
  )
}

export default App
