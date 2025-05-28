export default function Services() {
  const services = [
    {
      title: "Cross Border Services",
      description: "Assistance with cross-border transportation requirements and documentation for regional logistics operations."
    },
    {
      title: "Abnormal Permits",
      description: "Specialized assistance with abnormal load permit applications for heavy machinery, excavators, and dozers on Namibian roads."
    },
    {
      title: "Customs Clearances",
      description: "Expert handling of customs documentation and clearance procedures for smooth border crossings."
    },
    {
      title: "Imports",
      description: "Comprehensive import services including documentation, compliance, and logistics coordination."
    },
    {
      title: "Exports",
      description: "End-to-end export solutions ensuring compliance with regulations and efficient delivery."
    },
    {
      title: "Logistics Consulting",
      description: "Expert advice on optimizing logistics operations and compliance with transportation regulations."
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We provide comprehensive logistics solutions for the transportation industry in Namibia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border-l-4 border-primary rounded-lg p-6 shadow-md transition-transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
