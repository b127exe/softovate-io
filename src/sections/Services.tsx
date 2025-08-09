import Image from "next/image";
import React from "react";

const FeatureItem = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 text-x">
    {icon}
    <span className="font-medium text-sm text-white">{children}</span>
  </div>
);

const ServiceSection = ({
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  title: string;
  subtitle: string;
  description: string;
  features: { icon: React.ReactNode; text: string }[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) => (
  <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
    <div>
      <span className="uppercase text-xs font-medium">{subtitle}</span>
      <h2 className="text-4xl mt-8 tracking-tighter font-semibold text-balance">{title}</h2>
      <p className="text-sm mt-4 text-balance">{description}</p>
      <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon}>
            {feature.text}
          </FeatureItem>
        ))}
      </div>
    </div>
    <div className={`h-full ${reverse ? "md:order-first" : ""} bg-gray-900 rounded-3xl relative z-0 overflow-hidden border-4 border-white/20`}>
      <Image
        src={imageSrc}
        className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
        alt={imageAlt}
        width={500}
        height={500}
      />
    </div>
  </div>
);

function Services() {
  const services = [
    {
      title: "Innovative financial solutions for every situation",
      subtitle: "Because why not",
      description: "Discover a variety of tools, services, and expert guidance tailored to your unique financial needs.",
      features: [
        {
          icon: (
            <svg
              className="icon icon-tabler size-4 icon-tabler-360 text-white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4"></path>
              <path d="M9 13l3 3l-3 3"></path>
            </svg>
          ),
          text: "Clear data visibility",
        },
        {
          icon: (
            <svg
              className="icon icon-tabler size-4 icon-tabler-antenna-bars-3 text-white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 18l0 -3"></path>
              <path d="M10 18l0 -6"></path>
              <path d="M14 18l0 .01"></path>
              <path d="M18 18l0 .01"></path>
            </svg>
          ),
          text: "Reduced external factors",
        },
        {
          icon: (
            <svg
              className="icon icon-tabler size-4 icon-tabler-load-balancer text-white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 16v3"></path>
              <path d="M12 10v-7"></path>
              <path d="M9 6l3 -3l3 3"></path>
              <path d="M12 10v-7"></path>
              <path d="M9 6l3 -3l3 3"></path>
              <path d="M14.894 12.227l6.11 -2.224"></path>
              <path d="M17.159 8.21l3.845 1.793l-1.793 3.845"></path>
              <path d="M9.101 12.214l-6.075 -2.211"></path>
              <path d="M6.871 8.21l-3.845 1.793l1.793 3.845"></path>
            </svg>
          ),
          text: "Enhanced stability",
        },
        {
          icon: (
            <svg
              className="icon icon-tabler size-4 icon-tabler-brand-speedtest text-white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5.636 19.364a9 9 0 1 1 12.728 0"></path>
              <path d="M16 9l-4 4"></path>
            </svg>
          ),
          text: "Accelerated times",
        },
      ],
      imageSrc: "https://i.pinimg.com/564x/59/41/a0/5941a02c048f6226031a0487451c2651.jpg",
      imageAlt: "Financial solutions image",
    },
    {
      title: "Tailored financial solutions for any scenario",
      subtitle: "Just because we can",
      description: "Discover a range of financial instruments and personalized advice designed to meet your unique requirements.",
      features: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-database size-4 text-white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>
              <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
              <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
            </svg>
          ),
          text: "Transparent Data Access",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-building size-4 text-white" 
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 21l18 0"></path>
              <path d="M9 8l1 0"></path>
              <path d="M9 12l1 0"></path>
              <path d="M9 16l1 0"></path>
              <path d="M14 8l1 0"></path>
              <path d="M14 12l1 0"></path>
              <path d="M14 16l1 0"></path>
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
            </svg>
          ),
          text: "Lowered Interference",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-augmented-reality-2 size-4 text-white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5"></path>
              <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z"></path>
              <path d="M13 14.5v4.5l4 2.5"></path>
              <path d="M17 17l4 -2.5"></path>
              <path d="M11 4h2"></path>
            </svg>
          ),
          text: "Improved Reliability",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-time-duration-0 size-4 text-white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12v.01"></path>
              <path d="M21 12v.01"></path>
              <path d="M12 21v.01"></path>
              <path d="M12 3v.01"></path>
              <path d="M7.5 4.2v.01"></path>
              <path d="M16.5 4.2v.01"></path>
              <path d="M16.5 19.8v.01"></path>
              <path d="M7.5 19.8v.01"></path>
              <path d="M4.2 16.5v.01"></path>
              <path d="M19.8 16.5v.01"></path>
              <path d="M19.8 7.5v.01"></path>
              <path d="M4.2 7.5v.01"></path>
              <path d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z"></path>
            </svg>
          ),
          text: "Faster Processing Times",
        },
      ],
      imageSrc: "https://i.pinimg.com/564x/4e/a7/ff/4ea7ff230ad9f3bc1c30b1b6cbaccad3.jpg",
      imageAlt: "Tailored solutions image",
      reverse: true,
    },
  ];

  return (
    <div className="py-20" id="Services">
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col justify-center">
        <div className="flex flex-col">
          <div className="mt-6 border-t pt-12 space-y-24">
            {services.map((service, index) => (
              <ServiceSection key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;