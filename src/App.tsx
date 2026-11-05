function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Todo Manager
        </h1>

        <p className="mt-3 text-gray-600">
          Welcome to our Todo Manager application!
        </p>

        <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App