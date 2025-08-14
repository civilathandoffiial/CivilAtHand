import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientPage from './components/ClientPage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import LoginModal from './components/auth/LoginModal';
import RegisterModal from './components/auth/RegisterModal';
import { useAuth } from './contexts/AuthContext';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const switchToRegister = () => {
    closeLoginModal();
    openRegisterModal();
  };

  const switchToLogin = () => {
    closeRegisterModal();
    openLoginModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onLoginClick={openLoginModal}
        onRegisterClick={openRegisterModal}
      />
      
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <>
          <HeroSection />
          <ClientPage />
        </>
      )}
      
      <Footer />
      
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onSwitchToRegister={switchToRegister}
      />
      
      <RegisterModal 
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        onSwitchToLogin={switchToLogin}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
