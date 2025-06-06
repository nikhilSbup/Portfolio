import React from 'react';

const About = () => {
  return (
    <>
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-5'>About</h1>

      {/* About */}
      <h2 className='text-green-500 font-semibold text-xl mb-4'>🙋 About Me</h2>
      <p>
        I’m Nikhil Kumar Singh, a passionate MCA student from Bhilai with a strong foundation in software development, web technologies, and cybersecurity. I have completed over 15 certifications and developed multiple projects, including AI-based assistants and face recognition systems. With experience in Python, JavaScript, Flutter, and backend frameworks, I aim to become a skilled full-stack developer. I'm a quick learner, eager to take on challenges, and driven by curiosity and innovation in the tech world.
      </p>

      {/* Education */}
      <br />
      <h2 className='text-green-500 font-semibold text-xl mb-4'>🎓 Education</h2>

      <div className='space-y-6'>
        <div>
          <h3 className='text-lg font-bold'>Master of Computer Applications (MCA)</h3>
          <p className='text-sm text-gray-600'>2024 – 2026 | Sri Balaji University, Pune</p>
          <ul className='list-disc list-inside ml-4 text-sm text-gray-700'>
            <li>Subjects: Software Development, Flutter & Dart, Web Development</li>
            <li>Also includes Python, JavaScript, UI/UX, and Computer Organization</li>
            <li>Currently completed 2 semesters</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold'>Bachelor of Computer Applications (BCA)</h3>
          <p className='text-sm text-gray-600'>2021 – 2024 | Sai College, Bhilai</p>
          <ul className='list-disc list-inside ml-4 text-sm text-gray-700'>
            <li>Subjects: Programming Fundamentals, DBMS, Java, Networking</li>
            <li>Data Structures and Algorithms</li>
            <li>Completed with strong academic performance</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold'>Higher Secondary (12th), Science Stream</h3>
          <p className='text-sm text-gray-600'>2021 | CBSE</p>
          <ul className='list-disc list-inside ml-4 text-sm text-gray-700'>
            <li>Subjects: Physics, Chemistry, Mathematics, Computer Science</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold'>Secondary School (10th)</h3>
          <p className='text-sm text-gray-600'>2019 | CBSE</p>
          <ul className='list-disc list-inside ml-4 text-sm text-gray-700'>
            <li>Passed with distinction</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <br />
      <h2 className='text-green-500 font-semibold text-xl mb-4'>🛠️ Skills</h2>
      <ul className='list-disc list-inside ml-4 text-sm text-gray-700 grid grid-cols-2 md:grid-cols-3 gap-x-10'>
        <li>Python, Java, JavaScript</li>
        <li>Flutter & Dart, React.js</li>
        <li>HTML, CSS, Bootstrap, Tailwind</li>
        <li>MySQL, PostgreSQL, Firebase</li>
        <li>Git & GitHub, REST APIs</li>
        <li>Cybersecurity Fundamentals</li>
        <li>AI Chatbots & Face Recognition</li>
        <li>UI/UX Design Principles</li>
      </ul>

      {/* Certifications */}
      <br />
      <h2 className='text-green-500 font-semibold text-xl mb-4'>📜 Certifications</h2>
      <ul className='list-disc list-inside ml-4 text-sm text-gray-700'>
        <li>Google IT Support Specialization</li>
        <li>Python for Everybody (University of Michigan - Coursera)</li>
        <li>Introduction to Cybersecurity (Cisco)</li>
        <li>Foundations of Data Science (IBM)</li>
        <li>Version Control with Git (Coursera)</li>
        <li>Responsive Web Design (freeCodeCamp)</li>
        <li>AI for Everyone (Andrew Ng - Coursera)</li>
        <li>And 8+ more in Software Development & Security</li>
      </ul>
        <br />
        
        {/* Objective */}
      <h2 className='text-green-500 font-semibold text-xl mb-2'>🎯 Objective</h2>
      <p className='mb-6'>
        My mission is to become a highly skilled full-stack developer and software engineer, contributing to impactful tech solutions. I strive to continuously grow in areas like AI, cybersecurity, and modern web/mobile development, blending creativity with technology to build innovative, real-world applications.
      </p>
      <hr />
    </div> 
    </>
  );
};

export default About;
