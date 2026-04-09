import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, X, UserPlus } from 'lucide-react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../src/firebase';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (err: any) {
      if (
        err.code === 'auth/invalid-credential' || 
        err.code === 'auth/wrong-password' || 
        err.code === 'auth/user-not-found' ||
        err.code === 'auth/invalid-email'
      ) {
        setError('Password or Email Incorrect');
      } else {
        setError(err.message || 'An error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100 z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                {isRegistering ? <UserPlus className="text-white w-8 h-8" /> : <LogIn className="text-white w-8 h-8" />}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {isRegistering ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                {isRegistering ? 'Register to access the drive' : 'Enter your credentials to access the drive'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 disabled:opacity-70"
              >
                {isLoading ? 'Processing...' : (isRegistering ? 'Register' : 'Sign In')}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setError('');
                }}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                {isRegistering ? 'Already have an account? Sign in' : "Don't have an account? Register"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
