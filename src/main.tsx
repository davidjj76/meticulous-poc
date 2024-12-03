import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);

async function startApp() {
  await tryLoadAndStartRecorder({
    recordingToken: 'tIhUp6iEjgvoUAPVbJbNmHL36sqCmyEgzpqo03Du',
    isProduction: false,
  });
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

startApp();
