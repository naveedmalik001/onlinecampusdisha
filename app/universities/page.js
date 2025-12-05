import universities from '../../data/universities.json'

export default function UniversitiesPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">Universities</h1>

        <div className="grid gap-6">
          {universities.map((university) => (
            <div key={university.id} className="border rounded-lg p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{university.name}</h2>
                  <p className="text-gray-600 mb-3">{university.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {university.programs.slice(0, 4).map((program, index) => (
                      <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
                        {program}
                      </span>
                    ))}
                    {university.programs.length > 4 && (
                      <span className="text-sm text-gray-500">
                        +{university.programs.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  {university.landing && (
                    <a
                      href={university.landing}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 text-center"
                    >
                      Apply Now
                    </a>
                  )}
                  <a
                    href={`/universities/${university.slug}`}
                    className="px-4 py-2 border border-black text-sm rounded hover:bg-gray-100 text-center"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}