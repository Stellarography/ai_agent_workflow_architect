import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import LandingPage from './pages/LandingPage';
import WorkflowCreation from './pages/WorkflowCreation';
import WorkflowEditor from './components/WorkflowEditor';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/workflows" element={<WorkflowCreation />} />
          <Route path="/workflows/edit" element={<WorkflowEditor />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;