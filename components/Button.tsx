"use client";
import React from "react"

type ButtonProps = 
{
     children: React.ReactNode;
     onClick?: () => void;
     type?: "button"| "submit"
}

export default function Button(
    {
    children,
    onClick,
    type= "button",
} : ButtonProps
)  {
    return(
        <button type={type}
        onClick={onClick}
        className="rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition px-5 py-2.5">
            {children}
        </button>
    );
}