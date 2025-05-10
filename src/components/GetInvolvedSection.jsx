const involvement = [
    { title: "Try Embagent", btn: "Launch" },
    { title: "Join our mailing list", btn: "Subscribe" },
    { title: "Support us", btn: "Donate" }
  ]
  
  const GetInvolvedSection = () => {
    return (
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10">Get Involved</h2>
        <div className="space-y-6 px-6 max-w-2xl mx-auto">
          {involvement.map((item, idx) => (
            <div key={idx} className="border p-6 rounded-lg shadow-md flex justify-between items-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default GetInvolvedSection
