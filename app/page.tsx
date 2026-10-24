"use client"
import Navbar from "@/components/Navbar"
import InstituteCard from "@/components/InstituteCard"
import Button from "@/components/Button"
import ApplyModal from "@/components/ApplyModal"
import { useState } from "react"


const mainDescription = `It is a bright, cold day in April, and the clocks are striking thirteen. In the grim metropolis of Airstrip One (formerly London), nothing 
    belongs to the individual. The world is divided into three perpetual, warring superstates—Oceania, Eurasia, and Eastasia—and Oceania is ruled by The Party, 
    an omnipresent totalitarian regime led by a figurehead known as Big Brother.
    Big Brother is always watching through two-way telescreens in every home and workplace. History is continuously rewritten to suit the Party’s
    changing narrative, and language itself is being systematically dismantled into "Newspeak" to make rebellious thought literally impossible.It is a bright, cold day in April, and the clocks are striking thirteen. In the grim metropolis of Airstrip One (formerly London), nothing 
    belongs to the individual. The world is divided into three perpetual, warring superstates—Oceania, Eurasia, and Eastasia—and Oceania is ruled by The Party, 
    an omnipresent totalitarian regime led by a figurehead known as Big Brother.
    Big Brother is always watching through two-way telescreens in every home and workplace. History is continuously rewritten to suit the Party’s
    changing narrative, and language itself is being systematically dismantled into "Newspeak" to make rebellious thought literally impossible.It is a bright, cold day in April, and the clocks are striking thirteen. In the grim metropolis of Airstrip One (formerly London), nothing 
    belongs to the individual. The world is divided into three perpetual, warring superstates—Oceania, Eurasia, and Eastasia—and Oceania is ruled by The Party, 
    an omnipresent totalitarian regime led by a figurehead known as Big Brother.
    Big Brother is always watching through two-way telescreens in every home and workplace. History is continuously rewritten to suit the Party’s
    changing narrative, and language itself is being systematically dismantled into "Newspeak" to make rebellious thought literally impossible`;


const institutes = [
  {
    id: 1,
    description: mainDescription
  },
  {
    id: 2,
    description: mainDescription
  },
  {
    id: 3,
    description: mainDescription
  }
]

export default function Home() {
  const [isModalopen,setmodalopen] = useState(false);
  return (
    <>
     <Navbar />
      <main className="w-full max-w-6xl mx-auto px-4 pt-30">
        <div className="flex flex-col md:flex-row gap-8 w-full items-stretch">
          {institutes.map((institute) => (
            <InstituteCard
              key={institute.id}
              // name={institute.name}
              // location={institute.location}
              description={institute.description}
              // image={institute.image}
            /> 
          )
        )}
        </div>
        <div className="mt-8 flex justify-center">
          <Button onClick={() =>
            setmodalopen(true)}>
            Apply now 
          </Button>

        </div>
        {isModalopen && (<ApplyModal onClose = {() =>
          setmodalopen(false)} />
        )}
      </main>
    </>
     
     
  )
}

