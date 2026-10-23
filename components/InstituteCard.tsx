"use client";

import Button from "@/components/Button"

type InstituteCardProps = {
    name: string;
    location: string;
    description: string;
    image: string;
};


export default function InstituteCard(
    {
    name,
    location, 
    description, 
    image
    }: InstituteCardProps)
 {
    // function onApply() {
    //     alert("Apply button clicked");
    // }
    return (
        <>
        <div className="rounded-sm border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img src={image} alt={name} className="h-36 w-full rounded-lg object-cover" />
            <h2 className="mt-4 text-lg font-bold leading-6 text-blue-950">{name}</h2>
            <p className="mt-3 flex items-center gap-2text-sm text-slate-500">{location}</p>
            <p className="mt-4 text-sm leading-6 text-slate-500">{description}</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
                Learn More
            </a>
           
        </div>
        </>
    );
    
}