import ErrorPage from '@/components/NotFound';
import ProtectedRoutes from '@/components/ProtectedRoutes';
import { UserAuthentication } from '@/modules/auth/userAuthForm';
import { Home } from '@/modules/home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <main>
      <Routes>
        <Route path="/auth" element={<UserAuthentication />} />
        <Route path="/" element={<Navigate to="/home" />} />

        {/* private routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<ErrorPage />} />

      </Routes>

    </main>
  )
}

export default App
