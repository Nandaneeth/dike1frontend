import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Vite + React + Tailwind CSS
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="font-mono bg-gray-200 p-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
