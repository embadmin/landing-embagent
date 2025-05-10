const features = [
    { icon: "🧠", text: "Intelligent Agent Technology" },
    { icon: "⚡", text: "Real-time Responses" },
    { icon: "🌐", text: "Web Integration Ready" },
    { icon: "🔐", text: "Privacy First Architecture" }
  ]
  
  const FeaturesSection = () => {
    return (
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {features.map((f, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">{f.icon}</div>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default FeaturesSection