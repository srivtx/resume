// use client
'use client';


// pages/index.js
// pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Calendar, Building, FileText, Download, Moon, Sun } from 'lucide-react';

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme based on user preference when component mounts
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleButtonClick = (action) => {
    setAlertMessage(action === 'view' ? 'Viewing Resume...' : 'Downloading CV...');
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col items-center dark:bg-gray-900 transition-colors duration-300">
        <Head>
          <title>John Doe - Profile</title>
          <meta name="description" content="John Doe's professional profile" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md z-50 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-600" />}
        </button>

        {/* Alert Message */}
        {showAlert && (
          <div className="fixed top-4 left-4 bg-gray-800 dark:bg-gray-700 text-white py-2 px-4 rounded-md shadow-lg z-50">
            {alertMessage}
          </div>
        )}

        {/* Header with Background Effect */}
        <div className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900 py-16 relative transition-colors duration-300">
          {/* Background Circle Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 dark:bg-blue-800 rounded-full opacity-50 transition-colors duration-300"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-100 dark:bg-blue-800 rounded-full opacity-60 transition-colors duration-300"></div>
            <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-100 dark:bg-blue-800 rounded-full opacity-40 transition-colors duration-300"></div>
          </div>

          {/* Profile Header Content */}
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">John Doe</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">Senior Software Engineer</p>

            <div className="flex gap-4 mt-5 justify-center">
              <button
                onClick={() => handleButtonClick('view')}
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                <FileText size={16} />
                View Resume
              </button>

              <button
                onClick={() => handleButtonClick('download')}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full bg-white dark:bg-gray-900 p-4 flex flex-col items-center transition-colors duration-300">
          {/* Profile Completion */}
          <div className="w-full max-w-3xl mb-10 mt-10">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Profile Completion</span>
              <span className="text-indigo-500 dark:text-indigo-400 font-semibold transition-colors duration-300">85%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden transition-colors duration-300">
              <div className="bg-indigo-500 dark:bg-indigo-400 h-full rounded-full transition-colors duration-300" style={{ width: '85%' }}></div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Experience</h2>

            {/* Experience Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Senior Software Engineer</h3>
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <Calendar size={16} />
                  <span>2020 - Present</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
                <Building size={16} />
                <span>Tech Corp</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Led development of cloud-based solutions and mentored junior developers.</p>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Software Engineer</h3>
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <Calendar size={16} />
                  <span>2018 - 2020</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
                <Building size={16} />
                <span>StartupXYZ</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Developed and maintained multiple web applications using React and Node.js.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}