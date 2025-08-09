import Image from "next/image";
import React from "react";
import ERPImage from '@/assets/images/services-1.png'
import WebImage from '@/assets/images/services-2.jpg'
import { SectionHeader } from "@/components/SectionHeader";

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
      title: "Comprehensive Business Solutions for Digital Transformation",
      subtitle: "Streamline your operations with our expertise",
      description: "Softovate delivers robust, customized systems designed to optimize your business processes and drive growth through cutting-edge Laravel solutions.",
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
          text: "360° Business Process Integration",
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
          text: "Real-time Data Analytics",
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
          text: "Scalable Architecture",
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
          text: "High-Performance Systems",
        },
      ],
      systems: [
        {
          name: "Enterprise Resource Planning (ERP)",
          description: "Our Laravel-powered ERP solution integrates all core business functions - from inventory and supply chain to accounting and CRM - into one unified platform. Automate workflows, reduce operational costs, and gain actionable insights with Softovate's customizable ERP system.",
          benefits: [
            "End-to-end business process automation",
            "Real-time financial reporting",
            "Multi-department collaboration tools",
            "Customizable modules for your industry"
          ]
        },
        {
          name: "Point of Sale (POS)",
          description: "Transform retail operations with our advanced POS system featuring inventory management, customer loyalty programs, and omnichannel sales integration. Built with Laravel for reliability and scalability to grow with your business.",
          benefits: [
            "Unified online/offline sales tracking",
            "Inventory synchronization",
            "Customer purchase history",
            "Multi-store management"
          ]
        },
        {
          name: "Human Resource Management (HRM)",
          description: "Streamline HR processes with our comprehensive solution covering recruitment, payroll, attendance, and performance management. Our Laravel-based platform ensures compliance while enhancing employee experience.",
          benefits: [
            "Automated payroll processing",
            "Employee self-service portal",
            "Performance tracking",
            "Leave management system"
          ]
        },
        {
          name: "Content Management System (CMS)",
          description: "Powerful Laravel CMS enabling effortless content creation and management. Perfect for marketing teams needing responsive websites, blogs, and digital assets management with robust access controls.",
          benefits: [
            "Drag-and-drop content builder",
            "SEO optimization tools",
            "Multi-user collaboration",
            "Version control and backups"
          ]
        }
      ],
      imageSrc: ERPImage.src,
      imageAlt: "Softovate Business Solutions Dashboard",
    },
    {
      title: "Cutting-Edge Web Solutions for Digital Excellence",
      subtitle: "Transforming visions into high-performing digital experiences",
      description: "Softovate crafts bespoke web solutions that combine innovative design with robust functionality. Our expert team delivers performant, scalable websites and web applications using React.js, Next.js, and modern web technologies to elevate your online presence and drive business growth.",
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
          text: "Data-Driven Architecture",
          description: "We build websites with intelligent data structures that ensure seamless content management and future scalability."
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
          text: "Enterprise-Grade Solutions",
          description: "Our web applications are built with the same robust architecture used by Fortune 500 companies, ensuring reliability at scale."
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
          text: "Immersive Visual Design",
          description: "We create captivating user interfaces with micro-interactions and animations that enhance engagement and brand perception."
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
          text: "Optimized Performance",
          description: "Every website we build scores 90+ on Google Lighthouse with optimized assets, efficient code, and intelligent caching."
        },
      ],
      serviceTypes: [
        {
          name: "Business Websites",
          description: "Professional corporate websites designed to establish credibility and generate leads. We combine conversion-focused design with technical excellence to create sites that perform across all devices and platforms.",
          technologies: ["Next.js", "Tailwind CSS", "Contentful CMS", "Vercel Hosting"],
          benefits: [
            "SEO-optimized architecture",
            "Integrated analytics",
            "Fast-loading pages (<1s)",
            "Mobile-responsive design"
          ]
        },
        {
          name: "Portfolio Websites",
          description: "Showcase your work with elegant, interactive portfolios that highlight your expertise. We specialize in creating visually stunning presentations with smooth animations and intuitive navigation.",
          technologies: ["React.js", "Framer Motion", "Three.js", "GSAP"],
          benefits: [
            "Custom animations",
            "Case study templates",
            "Dark/light mode",
            "Contact integration"
          ]
        },
        {
          name: "Visual Design Systems",
          description: "Comprehensive design solutions including UI/UX design systems, component libraries, and design-to-code implementation for seamless developer handoff.",
          technologies: ["Figma", "Storybook", "Styled Components", "Design Tokens"],
          benefits: [
            "Consistent branding",
            "Reusable components",
            "Accessibility compliance",
            "Design documentation"
          ]
        },
        {
          name: "Web Applications",
          description: "Custom web applications built with React.js and Next.js for startups and enterprises. From SaaS platforms to internal tools, we deliver full-stack solutions with secure authentication and API integrations.",
          technologies: ["Next.js API Routes", "Prisma", "PostgreSQL", "AWS"],
          benefits: [
            "User authentication",
            "Real-time updates",
            "Role-based access",
            "Automated testing"
          ]
        }
      ],
      process: [
        {
          step: "Discovery",
          description: "We conduct in-depth requirements analysis to understand your business objectives and technical needs."
        },
        {
          step: "Design",
          description: "Our designers create wireframes and prototypes for your review before any code is written."
        },
        {
          step: "Development",
          description: "Using agile methodologies, we build your solution in iterative sprints with regular demos."
        },
        {
          step: "Optimization",
          description: "Performance tuning, accessibility checks, and cross-browser testing ensure quality."
        },
        {
          step: "Launch",
          description: "We handle deployment, DNS configuration, and provide comprehensive documentation."
        }
      ],
      imageSrc: WebImage.src,
      imageAlt: "Softovate web development process showing design to deployment workflow",
      reverse: true,
    }
  ];

  return (
    <div className="py-20" id="Services">
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col justify-center">
        <SectionHeader
          eyebrow="OUR SERVICES"
          title="Comprehensive Digital Solutions"
          description="Explore our suite of professional services designed to elevate your online presence and streamline your business operations through cutting-edge technology."
        />
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