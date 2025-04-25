"use client";
// pages/index.js
// pages/index.js
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Calendar, Building, FileText, Download, BookOpen, ThumbsUp, MessageSquare, Share2, X } from 'lucide-react';

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showResumeModal, setShowResumeModal] = useState(false);

  const router = useRouter();


  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowResumeModal(false);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showResumeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleButtonClick = (action) => {
    if (action === 'view') {
      setShowResumeModal(true);
    } else {
      setAlertMessage('Downloading CV...');
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  const handleBlogAction = (action) => {
    setAlertMessage(`${action} clicked!`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Sribatsha Dash - Profile</title>
        <meta name="description" content="Sribatsha Dash's professional profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Alert Message */}
      {showAlert && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-md shadow-lg z-50">
          {alertMessage}
        </div>
      )}

      {/* Resume Modal with Glassmorphism Effect */}
      {showResumeModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white border-opacity-30">
            {/* Modal Header */}
            <div className="border-b border-white border-opacity-20 px-6 py-4 flex justify-between items-center sticky top-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
              <h2 className="text-xl font-bold text-gray-900">Sribatsha Dash - Resume</h2>
              <button
                onClick={() => setShowResumeModal(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content - Resume */}
            <div className="p-6 bg-white bg-opacity-70">
              {/* Professional Summary */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Professional Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  Software Developer with experience in Web Development, Machine Learning, and AI. Currently pursuing B.Tech in Computer Science Engineering with hands-on experience through multiple internships and active participation in developer communities.
                </p>
              </div>

              {/* Work Experience */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Work Experience</h3>

                {/* Member at Technex */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-md font-semibold text-gray-900">Member</h4>
                    <span className="text-gray-600 text-sm">Mar 2025 - Present</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Technex, IIT (BHU) Varanasi · Internship</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Contributing to technology initiatives at IIT BHU's technical festival</li>
                  </ul>
                </div>

                {/* Google Developer Student Clubs */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-md font-semibold text-gray-900">Member</h4>
                    <span className="text-gray-600 text-sm">Apr 2025 - Present</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Google Developer Student Clubs ITER · Part-time</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Participating in developer community events and learning activities</li>
                    <li>Collaborating with peers on various tech projects</li>
                  </ul>
                </div>

                {/* Machine Learning Intern */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-md font-semibold text-gray-900">Machine Learning Intern</h4>
                    <span className="text-gray-600 text-sm">Mar 2025 - Apr 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">CodSoft · Internship</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Worked on machine learning projects and data analysis</li>
                    <li>Developed predictive models using Python and relevant ML libraries</li>
                  </ul>
                </div>

                {/* Intern at Prodigy InfoTech */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-md font-semibold text-gray-900">Intern</h4>
                    <span className="text-gray-600 text-sm">Mar 2025 - Apr 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Prodigy InfoTech · Internship</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Assisted in IT projects and software development tasks</li>
                    <li>Gained practical experience in industry standard practices</li>
                  </ul>
                </div>

                {/* Web Developer */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-md font-semibold text-gray-900">Web Developer</h4>
                    <span className="text-gray-600 text-sm">Jan 2025 - Feb 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">MotionCut · Internship</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Developed responsive web applications using modern frameworks</li>
                    <li>Collaborated with design and backend teams for integrated solutions</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
                <div className="mb-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-md font-semibold text-gray-900">B.Tech in Computer Science Engineering</h4>
                    <span className="text-gray-600 text-sm">2023 - 2027</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'HTML/CSS', 'React', 'Python', 'Machine Learning', 'Web Development',
                    'Frontend Development', 'Git', 'Data Analysis', 'AI'].map((skill) => (
                      <span key={skill} className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm border border-white border-opacity-30">
                        {skill}
                      </span>
                    ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Licenses & Certifications</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                  <li>
                    <div className="font-semibold">Career Essentials in Generative AI</div>
                    <div>Microsoft and LinkedIn · Issued Mar 2025</div>
                  </li>
                  <li>
                    <div className="font-semibold">Frontend Developer</div>
                    <div>HackerRank · Issued Mar 2025</div>
                  </li>
                  <li>
                    <div className="font-semibold">Generative AI: The Evolution of Thoughtful Online Search</div>
                    <div>LinkedIn · Issued Mar 2025</div>
                  </li>
                  <li>
                    <div className="font-semibold">Software Engineer Intern</div>
                    <div>HackerRank · Issued Mar 2025</div>
                    <div className="text-sm text-gray-600">Credential ID EDC92178F900</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-white border-opacity-20 px-6 py-4 flex justify-between items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
              <button
                onClick={() => setShowResumeModal(false)}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-gray-800 py-2 px-4 rounded-md hover:bg-opacity-30 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setAlertMessage('Downloading Resume...');
                  setShowAlert(true);
                  setTimeout(() => setShowAlert(false), 3000);
                }}
                className="bg-indigo-500 bg-opacity-80 backdrop-filter backdrop-blur-sm text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </div>
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
          <p className="text-lg text-gray-600">Software Developer</p>

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
              <h3 className="text-lg font-semibold text-gray-900">Member</h3>
              <div className="flex items-center gap-1 text-gray-600">
                <Calendar size={16} />
                <span>Mar 2025 - Present</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-gray-600 mb-3">
              <Building size={16} />
              <span>Technex, IIT (BHU) Varanasi</span>
            </div>

            <p className="text-gray-600">Contributing to technology initiatives at IIT BHU's technical festival.</p>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-white rounded-lg p-6 mb-5 shadow-sm border border-gray-200">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Machine Learning Intern</h3>
              <div className="flex items-center gap-1 text-gray-600">
                <Calendar size={16} />
                <span>Mar 2025 - Apr 2025</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-gray-600 mb-3">
              <Building size={16} />
              <span>CodSoft</span>
            </div>

            <p className="text-gray-600">Worked on machine learning projects and developed predictive models.</p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="w-full max-w-3xl mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Blog Posts</h2>
            <a href="#" className="text-indigo-500 hover:text-indigo-600 flex items-center gap-1">
              <BookOpen size={16} />
              <span>View All</span>
            </a>
          </div>

          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg p-6 mb-5 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Building Scalable Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">Learn about the best practices for building scalable cloud solutions using modern architectures...</p>

            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">April 20, 2025</span>

              <div className="flex gap-3">
                <button
                  onClick={() => handleBlogAction('Like')}
                  className="flex items-center gap-1 text-gray-500 hover:text-indigo-500"
                >
                  <ThumbsUp size={16} />
                  <span>24</span>
                </button>

                <button
                  onClick={() => handleBlogAction('Comment')}
                  className="flex items-center gap-1 text-gray-500 hover:text-indigo-500"
                >
                  <MessageSquare size={16} />
                  <span>8</span>
                </button>

                <button
                  onClick={() => handleBlogAction('Share')}
                  className="flex items-center gap-1 text-gray-500 hover:text-indigo-500"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg p-6 mb-5 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">React vs. Angular in 2025</h3>
            <p className="text-gray-600 mb-4">A comprehensive comparison of React and Angular frameworks for frontend development in 2025...</p>

            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">April 15, 2025</span>

              <div className="flex gap-3">
                <button
                  onClick={() => handleBlogAction('Like')}
                  className="flex items-center gap-1 text-gray-500 hover:text-indigo-500"
                >
                  <ThumbsUp size={16} />
                  <span>42</span>
                </button>

                <button
                  onClick={() => handleBlogAction('Comment')}
                  className="flex items-center gap-1 text-gray-500 hover:text-indigo-500"
                >
                  <MessageSquare size={16} />
                  <span>12</span>
                </button>

                <button
                  onClick={() => handleBlogAction('Share')}
                  className="flex items-center gap-1 text-gray-500 hover:text-indigo-500"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Read More Blog Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => {
                handleBlogAction('Read More');
                router.push("https://srivtx-blog.vercel.app/")
              }}
              className="bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600 transition-colors"
            >
              Read More Blogs
            </button>
          </div>
        </div>
      </div>
      {/* remove the black strap on the page */}


      {/* style as per upper styling */}
      {/* it should have the same styling as per the background of the header */}
      {/* Footer */}


      <div className="w-full bg-gray-100 py-6  relative">

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600">© 2025 Sribatsha Dash. All rights reserved.</p>

          {/* add all the link as per next link */}
          <div className="flex justify-center gap-4 mt-4">

            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/sribatsha-dash-bb3327241/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/srivtx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setAlertMessage('GitHub Profile');
                  setShowAlert(true);
                  router.push("https://github.com/srivtx")
                }}
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/srivtx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                X
              </a>
            </div>

          </div>
        </div>
        <div className='absolute inset-0'>
          <div className="absolute invisible md:visible lg:visible inset-0 overflow-hidden pointer-events-none">
            <div className="absolute invisible md:visible lg:visible -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute invisible md:visible lg:visible -bottom-20 -right-20 w-80 h-80 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute invisible md:visible lg:visible top-40 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}