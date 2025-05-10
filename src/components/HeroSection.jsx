const HeroSection = () => {
    return (
      <section className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <img src="/logo.png" alt="Embagent Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-5xl font-bold mb-6">EMBAGENT</h1>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    )
  }
  
  export default HeroSection