import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';

import StepOne from './Components/StepOne/StepOne';
import StepTwo from './Components/StepTwo/StepTwo';
import Result from './Components/Result/Result';

createStore({
  data: {
    firstName: '',
    lastName: '',
  }
});

export function App() {
  
  return (
    <StateMachineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepOne />} />
          <Route path="/stepTwo" element={<StepTwo />} />

          <Route path="/stepTwo/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </StateMachineProvider>

  );
}

export default App;
