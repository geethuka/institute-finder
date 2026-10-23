import Navbar from "@/components/Navbar"
import InstituteCard from "@/components/InstituteCard"
import Button from "@/components/Button"
const institutes = [
  {
    id: 1,
    name: "APJ Abdul Kalam Technological University",
    location: "Kerala, India",
    description: "A leading university in Kerala offering quality education in engineering, technology and applied sciences.",
    image: "/images.jpg"
  },
  {
    id: 2,
    name: "MES College of Engineering Kuttipuram",
    location: "Kuttipuram, Kerala",
    description: "A reputed institution known for its academic excellenece and strong placement support.",
    image: "/mes.jpg"
  },
  {
    id: 3,
    name: "University of Calicut",
    location: "Calicut, Kerala",
    description: "One of the largest universities in Kerala with a wide range of undergraduate and postgraduate programs.",
    image: "/calicut.jpg"
  },
  {
    id: 4,
    name: "MES Kalladi College Mannarkkad",
    location: "Mannarkkad, Kerala",
    description: "A well-known college offering quality education and a supportive learning environment.",
    image: "/kalladi.jpg"
  },
  {
    id: 5,
    name: "IIT Kharagpur (Cloud Computing Certificate)",
    location: "Kharagpur, West Bengal",
    description: "Gain in demand skills witha hands on cloud computing certification from IIT Kharagpur",
    image: "/iit.jpg"
  },
  {
    id: 6,
    name: "Simplify Agri",
    location: "Kerala, India",
    description: "An innovative platform focused on smart agriculture and technology driven solutions for farmers",
    image: "/agri.jpg"
  }
]

export default function Home() {
  return (
    <>
     <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-30">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {institutes.map((institute) => (
            <InstituteCard
              key={institute.id}
              name={institute.name}
              location={institute.location}
              description={institute.description}
              image={institute.image}
            /> 
          )
        )}
        </div>
        <div className="mt-8 flex justify-center">
          <Button >
            Apply now 
          </Button>

        </div>
      </main>
    </>
     
     
  )
}
