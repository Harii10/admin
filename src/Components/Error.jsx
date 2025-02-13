import React from 'react'

function Error() {
  return (
    <>
        <div class="text-center">
        <p class="mt-4 text-xl text-gray-400">Oops! Invalid Request</p>
        <p class="mt-2 text-gray-500">It looks like something went wrong. Please try again.</p>
        <a href="/" class="mt-6 inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">Go Back Home</a>
    </div>
    </>
  )
}

export default Error