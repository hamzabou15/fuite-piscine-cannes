import Image from "next/image";

const projects = [
  {
    title: "Fuite détectée dans un liner à Cannes",
    description: "Localisation précise sans destruction grâce à notre caméra endoscopique",
    location: "Cannes, La Bocca",
    img: "/images/fuite-detectee-dans-un-liner-a-cannes.webp"
  },
  {
    title: "Réparation d'une canalisation enterrée à Antibes",
    description: "Détection au gaz traceur et réparation sans tranchée",
    location: "Antibes, Juan-les-Pins",
    img: "/images/reparation-une-canalisation-enterree.webp"
  },
  {
    title: "Colmatage d'urgence sur coque polyester",
    description: "Intervention express en moins de 2h pour stopper une fuite importante",
    location: "Mougins",
    img: "/images/colmatage-urgence-sur-coque-polyester.webp"
  }
];

export default function ProjectSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#114877] to-[#02BAD6] text-white">
      <div className=" lg:px-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Dernières Interventions
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Exemples concrets de nos réalisations dans les Alpes-Maritimes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
            >
              <div className="relative h-48 ">
                <div className="overflow-hidden rounded-xl w-full h-[210PX] flex items-center justify-center ">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="object-cover h-full mb-6"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#FFD700] text-[#114877] px-3 py-1 rounded-full text-sm font-bold">
                  {project.location}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 mb-4">{project.description}</p>
               
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}