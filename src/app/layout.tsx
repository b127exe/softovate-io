import type { Metadata } from "next";
import {Inter,Calistoga} from "next/font/google"
import "./globals.css";
import { twMerge } from "tailwind-merge";


const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const calistoga = Calistoga ({
  subsets: ['latin'], variable: '--font-serif',
weight: "400"
});


export const metadata: Metadata = {
  title: "Softovate | Web Development, ERP, HRM, POS & Booking Systems",
  description:
    "Softovate is a leading web solutions provider specializing in Web Development, ERP, HRM, POS, Booking Systems, and custom Laravel & React applications. We deliver innovative, scalable, and high-performance software solutions.",
  keywords:
    "Softovate, web development, ERP software, HRM systems, POS solutions, booking systems, Laravel development, React applications, custom web apps",
  openGraph: {
    title: "Softovate | Web Development, ERP, HRM, POS & Booking Systems",
    description:
      "Softovate builds modern, scalable web applications using Laravel and React, including ERP, HRM, POS, Booking Systems, and more.",
    url: "https://b127exe.github.io/softovate-io/",
    siteName: "Softovate",
    // images: [
    //   {
    //     url: "https://b127exe.github.io/softovate-io/_next/static/media/logo.c9c6c0cc.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Softovate Web Development & ERP Solutions",
    //   },
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softovate | Web Development, ERP, HRM, POS & Booking Systems",
    description:
      "We deliver innovative web development and ERP solutions using Laravel & React.",
    images: ["https://b127exe.github.io/softovate-io/_next/static/media/logo.c9c6c0cc.png"],
  },
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-5WQGKMZL'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WQGKMZL');`,
          }}
        />
      </head>
      <body className={twMerge( 
        inter.variable,
         calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
          )}>
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-5WQGKMZL"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
            {children}
            </body>
    </html>
  );
}
