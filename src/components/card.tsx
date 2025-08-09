import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({className, children,...other}:
    ComponentPropsWithoutRef<"div">) =>{
    return (
        <div
        className= {twMerge( "bg-gray-800 rounded-3xl relative z-0 overflow-hidden border-4 border-white/20   "
          ,className
        )}
        {...other}
      > 
      <div className="absolute inset-0 -z-10 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>
      {children}
      </div>
    )
}