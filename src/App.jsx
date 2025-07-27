import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import './App.css'
import { AssignmentBriefLegalDocument } from './pages/assignment-legal-document/assignmentBriefLegalDocument'
import { ClientInformationLegalDocuments } from './pages/assignment-legal-document/clientInformationLegalDocument'
import { Decision1_LegalDocument } from './pages/assignment-legal-document/decision1_LegalDocument'
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
      </Routes>
    </Router>
  )
}

export default App
