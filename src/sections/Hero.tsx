import illustrationImage from '@/assets/images/illustration-1.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
    <div className='absolute inset-0 -z-30 opacity-5' style={{
      backgroundImage:`url(${grainImage.src})`
    }}></div>
    <div className="hero-ring size-[620px]"></div>
    <div className="hero-ring size-[820px] " ></div>
    <div className="hero-ring size-[1020px] " ></div>
    <div className="hero-ring size-[1220px] " ></div>
    {/* shouldSpin?:boolean;
  spinDuration?:string;
  orbitDuration?:string;
  shouldOrbit?:boolean */}
    <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
      <SparkleIcon className="size-8 text-emerald-300/20"/>
    </HeroOrbit>
    <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='31s' shouldSpin spinDuration='3s'>
      <SparkleIcon className="size-5 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='32s' >
      <div className="size-2 rounded-full bg-emerald-300/20 "></div>
    </HeroOrbit>
    <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='33s' shouldSpin spinDuration='3s'>
      <SparkleIcon className="size-10 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='34s'shouldSpin spinDuration='6s'>
      <StarIcon className="size-12  text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='35s' shouldSpin spinDuration='6s'>
      <StarIcon className="size-8 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='36s'>
      <div className="size-2 rounded-full bg-emerald-300/20 "></div>
    </HeroOrbit>
    <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='37s'  shouldSpin spinDuration='3s'>
      <SparkleIcon className="size-12 text-emerald-300/20"/>
    </HeroOrbit>
    <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='38s'>
      <div className="size-3 rounded-full bg-emerald-300/20 "></div>
    </HeroOrbit>
    <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='39s' shouldSpin spinDuration='6s'>
      <StarIcon className="size-28 text-emerald-300 " />
    </HeroOrbit>
    </div>
    <div className="container -z-50"> 
      <div className='flex flex-col items-center'>
      <Image src={illustrationImage} className='size-[150px]' alt='Persom peeking from behind the laptop'/>
      <div className='bg-gray-950 border border-gray-800 px-4 py-0 inline-flex items-center gap-4 rounded-lg'>
        <div className='bg-green-500 size-2 rounded-full relative'>
          <div className='absolute inset-0 bg-green-500 rounded-full animate-ping-large'></div>
        </div>
        <div className='text-sm font-medium'>Start your Bussiness journey with us</div>
      </div>
      </div>
      <div className='max-w-lg mx-auto'>
      <h1 className='font-serif text-3xl text-center mt-6 tracking-wide md:text-4xl'>Transform Your Business with <span className='text-purple-400'>Smart Software Solutions</span></h1>
      <p className='mt-4 text-center text-white/60 md:text-lg'>At Softovate, we craft intelligent digital solutions to help businesses grow, streamline operations, and embrace innovation.</p>
      </div>
      <div className='flex flex-col items-center mt-8 gap-4 md:flex-row justify-center'>
        <a href="#Services">
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>See Our Services</span>
          <ArrowDown className="size-4 animate-bounce" />
        </button>
        </a>
        <a href="#Contact">
        <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
          <span className='animate-pulse' >👋</span>
          <span className='font-semibold'>Let's Connect</span>
        </button>
        </a>
      </div>
    </div>
  </div>;
};
