import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Users, UserDetail} from './pages';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-sky-800 grid place-content-center text-center">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/users' exact Component={Users} />
          <Route path='/users/:id' Component={UserDetail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}