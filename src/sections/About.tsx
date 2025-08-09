"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/card";
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
import mySqlIcon from "@/assets/icons/mysql-svgrepo-com.svg";
import mongodbIcon from "@/assets/icons/mongodb-svgrepo-com.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { GlobeDemo } from "@/components/GlobeDemo";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: nextIcon },
  { title: "Laravel", iconType: laravelIcon },
  { title: "Tailwind", iconType: tailwindIcon },
  { title: "Figma", iconType: figmaIcon },
  { title: "MySQL", iconType: mySqlIcon },
  { title: "MongoDB", iconType: mongodbIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "Chrome DevTools", iconType: ChromeIcon },
];

export const AboutSection = () => {
  return (
    <div className="py-20" id="About">
      <div className="px-5 md:px-16">
        <SectionHeader
          eyebrow="About Softovate"
          title="Building Digital Excellence"
          description="We architect robust digital systems that transform businesses through cutting-edge technology and innovative solutions."
        />
        <div className="mt-20 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <Card className="h-[400px]">
              <CardHeader
                title="Our Technology Stack"
                description="The powerful tools we use to build enterprise-grade digital solutions"
              />
              <div className="mt-6">
                <ToolboxItems
                  toolboxItems={toolboxItems}
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  toolboxItems={toolboxItems}
                  className="mt-4"
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
              </div>
            </Card>

            <Card className="h-[400px] flex flex-col">
              <CardHeader
                title="Global Digital Solutions"
                description="We serve clients worldwide with our 24/7 development approach"
              />
              <div className="flex-1 relative">
                <GlobeDemo />
                <div className="absolute bottom-6 left-0 right-0 px-6">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10 h-full">
              <h2 className="text-2xl font-serif font-medium mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Softovate is a premier digital solutions provider specializing in 
                  custom web applications, enterprise software, and innovative 
                  technology solutions. Founded with a vision to bridge the gap 
                  between business needs and technological possibilities, we've 
                  grown into a trusted partner for organizations worldwide.
                </p>
                <p>
                  Our team comprises passionate developers, designers, and 
                  strategists who combine technical expertise with creative 
                  problem-solving. We don't just write code - we craft digital 
                  experiences that drive measurable business results. With 
                  headquarters serving as our innovation hub, we maintain a 
                  global delivery model that ensures 24/7 productivity and 
                  support.
                </p>
                <p>
                  What sets Softovate apart is our commitment to understanding 
                  each client's unique challenges before proposing solutions. 
                  We believe technology should serve business objectives, not 
                  the other way around. This philosophy has helped us deliver 
                  successful projects across industries including finance, 
                  healthcare, e-commerce, and education.
                </p>
                <p>
                  Our expertise spans the full development lifecycle - from 
                  initial concept and UX design to deployment and ongoing 
                  optimization. We're particularly proud of our track record 
                  in building scalable systems that grow with our clients' 
                  businesses, ensuring long-term value from every engagement.
                </p>
                <p>
                  At Softovate, we stay at the forefront of technology trends 
                  while maintaining rigorous standards for security, performance, 
                  and accessibility. Whether you need a customer-facing web 
                  application, internal business tools, or complex system 
                  integration, we have the skills and experience to deliver 
                  exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;