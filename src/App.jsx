import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './page/Home';
import Starred from './page/Starred';
import MainLayout from './components/MainLayout';
import Show from './page/Show';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Starred" element={<Starred />} />
            </Route>
            <Route path="/show/:showId" element={<Show />} />
            <Route path="*" element={<div>Not Found</div>} />


          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
