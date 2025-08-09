import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words =[
  "Performance",
  "Maintainabile",
  "Web Development",
  "Creative Design",
  "Custom Website Development",
  "Blog Website Design",
  "ERP Software Development",
  "HRM Systems",
  "POS Solutions",
  "User Friendly",
  "E-commerce Development",
  "Scalable Web Applications",
  "CMS",
]

export const TapeSection = () => {
  return <div className="py-16 lg:py">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 ">
      <div className="flex [masked-image:linear-gradient(to_right,black_10%,black_90%,transparent)]">

    <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s] ">
      {[...new Array(2)].fill(0).map((_, idx)=>(
        <Fragment key={idx}>
    {words.map(word =>(
      <div key={word} className="inline-flex gap-4 items-center">
        <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
        <StarIcon className="size-6 text-gray-900 -rotate-12" />
      </div>
    ))}
    </Fragment>
      ))}
    </div>
    </div>
    </div>
  </div>
};
