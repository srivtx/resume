// use client
'use client';


// pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Calendar, Building, FileText, Download } from 'lucide-react';

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleButtonClick = (action) => {
    setAlertMessage(action === 'view' ? 'Viewing Resume...' : 'Downloading CV...');
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>srivtx - Profile</title>
        <meta name="description" content="srivtx's professional profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Alert Message */}
      {showAlert && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-md shadow-lg">
          {alertMessage}
        </div>
      )}

      {/* Header with Background Effect */}
      <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16 relative">
        {/* Background Circle Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-100 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-40"></div>
        </div>

        {/* Profile Header Content */}
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sribatsha Dash</h1>
          <p className="text-lg text-gray-600">Software eveloper</p>

          <div className="flex gap-4 mt-5 justify-center">
            <button
              onClick={() => handleButtonClick('view')}
              className="flex items-center gap-2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
            >
              <FileText size={16} />
              View Resume
            </button>

            <button
              onClick={() => handleButtonClick('download')}
              className="flex items-center gap-2 bg-white text-gray-800 border border-gray-200 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area (white background) */}
      <div className="w-full bg-white p-4 flex flex-col items-center">
        {/* Profile Completion */}
        <div className="w-full max-w-3xl mb-10 mt-10">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Profile Completion</span>
            <span className="text-indigo-500 font-semibold">85%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
            <div className="bg-indigo-500 h-full rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>

          {/* Experience Card 1 */}
          <div className="bg-white rounded-lg p-6 mb-5 shadow-sm border border-gray-200">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Senior Software Engineer</h3>
              <div className="flex items-center gap-1 text-gray-600">
                <Calendar size={16} />
                <span>2020 - Present</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-gray-600 mb-3">
              <Building size={16} />
              <span>Tech Corp</span>
            </div>

            <p className="text-gray-600">Led development of cloud-based solutions and mentored junior developers.</p>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-white rounded-lg p-6 mb-5 shadow-sm border border-gray-200">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Software Engineer</h3>
              <div className="flex items-center gap-1 text-gray-600">
                <Calendar size={16} />
                <span>2018 - 2020</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-gray-600 mb-3">
              <Building size={16} />
              <span>StartupXYZ</span>
            </div>

            <p className="text-gray-600">Developed and maintained multiple web applications using React and Node.js.</p>
          </div>
        </div>
      </div>
    </div>
  );
}