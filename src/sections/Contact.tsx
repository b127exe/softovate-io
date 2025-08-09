import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import PopupButton from "@/components/PopupButton";

export const ContactSection = () => {
  return (

    <div id="Contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 
          py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let's creat something amazing together</h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next Project to life? Let's connect and discuss how can we help you achieve your goals.
              </p>
            </div>
            <div>
              <PopupButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
