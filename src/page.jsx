
import { useState } from "react"

export default function TestForm() {
  const [selectedTest, setSelectedTest] = useState("")

  const testOptions = [
    "IGCSE (Grades 1-10)",
    "CBSE",
    "JEE",
    "NEET",
    "SAT",
    "IB"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Welcome to Test
          </h1>
          
          <div className="space-y-6">
            <div>
              <label 
                htmlFor="test-select" 
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Which test would you like to take?
              </label>
              <select
                id="test-select"
                value={selectedTest}
                onChange={(e) => setSelectedTest(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB800] focus:border-transparent transition-all duration-200 outline-none"
              >
                <option value="">Select a test</option>
                {testOptions.map((test) => (
                  <option key={test} value={test}>
                    {test}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Instructions:
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Make sure you have a stable internet connection</li>
                <li>• The test duration will vary based on your selection</li>
                <li>• You cannot pause the test once started</li>
                <li>• Ensure you have a quiet environment</li>
              </ul>
            </div>

            <button
              disabled={!selectedTest}
              className={`w-full py-4 rounded-lg text-white font-semibold text-lg transition-all duration-200
                ${selectedTest 
                  ? "bg-[#FFB800] hover:bg-[#f0ae00] cursor-pointer" 
                  : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              Start Test
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

