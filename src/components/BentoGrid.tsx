"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import tailwindIcon from "@/assets/icons/tailwind-css.svg";
import nextIcon from "@/assets/icons/nextjs.svg";
import laravelIcon from "@/assets/icons/laravel-svgrepo-com.svg";
import figmaIcon from "@/assets/icons/figma-svgrepo-com.svg";
import sqlIcon from "@/assets/icons/database-svgrepo-com.svg";
import mySqlIcon from "@/assets/icons/mysql-svgrepo-com.svg";
import mongodbIcon from "@/assets/icons/mongodb-svgrepo-com.svg";
import mapImage from "@/assets/images/map.png";
import smileMemo from "@/assets/images/memoji-smile.png";
import responsiveImage from "@/assets/images/responsive_design.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import ConfettiButton from "./ConfettiButton";
import { GlobeDemo } from "./GlobeDemo";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "Tailwind", iconType: tailwindIcon },
  { title: "Next.js", iconType: nextIcon },
  { title: "Laravel", iconType: laravelIcon },
  { title: "Figma", iconType: figmaIcon },
  { title: "Sql", iconType: sqlIcon },
  { title: "MySql", iconType: mySqlIcon },
  { title: "Mongodb", iconType: mongodbIcon },
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: "0%", top: "5%" },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Traveling", emoji: "✈️", left: "35%", top: "40%" },
  { title: "Music", emoji: "🎧", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🏋️‍♂️", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📗", left: "45%", top: "70%" },
];

export const BentoGrid = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20" id="About">
      <div className="px-5 md:px-16" >
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-11 md:grid-rows-1 gap-4">
            <Card className="h-[320px] md:col-span-3 md:row-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-5 row-span-1">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-4"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
            <div className=" lg:col-span-3 row-span-0 flex flex-col gap-4">
              <Card className="h-[200px]  ">
                <CardHeader
                  className="md:px-3"
                  sub="Do you want to start a project"
                />
                <ConfettiButton />
              </Card>
              <Card className="p-0 relative h-[100px]">
                <Image
                  src={mapImage}
                  alt="Map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 border-2 border-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <Image
                    src={smileMemo}
                    alt="Smile memoji"
                    className="size-20"
                  />
                </div>
              </Card>
            </div>
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-4 row-span-1">
              <div>
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm."
                  className="px-6 py-6"
                />
              </div>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-4 md:row-span-1">
              <CardHeader
                title="Time Zone"
                description="I'am very flexible with time zone comunications."
              />
              <GlobeDemo />
            </Card>
            <Card className="h-[320px] md:col-span-3 md:row-span-1">
            <CardHeader
                title="Responsive"
                description="All our website are responsive."
              />
              <div className="w-full mx-auto mt-2 md:mt-0">
                <Image src={responsiveImage} alt="Responsive design" className="-mt-32" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
