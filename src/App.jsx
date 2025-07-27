import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import './App.css'
import { AssignmentBriefLegalDocument } from './pages/assignment-legal-document/assignmentBriefLegalDocument'
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
        <Route path="/intro-to-bad-actors" element={<IntroToCIANA />} />
        <Route path="/assignment/legal-document/brief" element={<AssignmentBriefLegalDocument />} />
      </Routes>
    </Router>
  )
}

export default App
