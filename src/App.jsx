import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-sky-800 grid place-content-center text-center">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/users' Component={Users} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}