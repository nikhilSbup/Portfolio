import React from 'react'

const Portfolio = () => {
  return (
    <>
      <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div>
          <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
          <div className="flex gap-4 mt-6">
            <a href="/resume.pdf" download className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Download Resume
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
              See Resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio