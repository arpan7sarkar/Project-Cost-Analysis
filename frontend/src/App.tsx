
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Predict from './pages/Predict';
import Reports from './pages/Reports';
import Community from './pages/Community';
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes - Sign In/Sign Up */}
        <Route 
          path="/sign-in/*" 
          element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              <SignIn routing="path" path="/sign-in" />
            </div>
          } 
        />
        <Route 
          path="/sign-up/*" 
          element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              <SignUp routing="path" path="/sign-up" />
            </div>
          } 
        />
        
        {/* Protected Routes - Require Authentication */}
        <Route path="/*" element={
          <>
            <SignedIn>
              <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
                <Navbar />
                <div className="flex flex-1">
                  <Sidebar />
                  <main className="flex-grow p-6">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/projects/:id" element={<ProjectDetails />} />
                      <Route path="/predict" element={<Predict />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/community" element={<Community/>} />
                    </Routes>
                  </main>
                </div>
                <Footer />
              </div>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
