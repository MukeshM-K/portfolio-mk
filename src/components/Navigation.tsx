"use client"
import { navMenuList } from "@/app/data/NavigationData"
import CustomLink from "./CustomLink"
import { FiMenu } from "react-icons/fi"
import { cn } from "@/utils/helper"
import { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import React from "react"


export function Navigation()  {

const [isNavOpen, setNavOpen] = useState(false);

useEffect (() => {
  const overflowValue = isNavOpen ? "hidden" : "auto";
  document.body.style.overflow = overflowValue;
})

  return (
   <nav className="py-4 border-b border-zinc-800 shadow-md sticky top-0 z-10 bg-zinc-900/20 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 md:px-8  flex justify-between items-center">
    <p className="">Technical MK</p>
    <div className="md:hidden"
    onClick={() => setNavOpen((prevState: any) => !prevState)}
    >
     { isNavOpen ?   (<AiOutlineClose className="text-2xl cursor-pointer"/>) : (
      <FiMenu className="text-2xl cursor-pointer" />
     )}
    </div>
    <div className={cn("max-md:fixed max-md:top-[58px] max-md:py-10 max-md:left-0 max-md:w-full max-md:min-h-screen max-md:bg-zinc-900/90 max-md:backdrop:blur-lg",
    !isNavOpen && "max-md:hidden"

    )}>
       <ul className="flex items-center gap-6 md:flex-row flex-col">
        {navMenuList.map(( {title ,href}, index) => {
          const isLastElement = index === navMenuList.length - 1;
            return <li key={href}>
            <CustomLink href={href} linkType={isLastElement ? "primary" : "link"}
            onClick={() =>{
              if (isNavOpen){
                setNavOpen(false)
              }
            }}
            >
              {title}</CustomLink>
            </li>
        })}
        </ul> 
        </div>
    </div>
   </nav>
  )
}

export default Navigation
