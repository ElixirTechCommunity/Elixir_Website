import { curve, heroBackground, robot } from "@/assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "@/utils/constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import Image from "next/image";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className='pt-[12rem] -mt-[5.25rem]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings
      id='hero'
    >
      <div className='container relative' ref={parallaxRef}>
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
          <h1 className='h1 mb-6'>
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className='inline-block relative'>Brainwave </span>
          </h1>
          <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
            Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
          </p>
          <Button href='/pricing' white>
            Get started
          </Button>
        </div>
        <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
          <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
            <div className='relative bg-n-8 rounded-[1rem]'>
              <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
            </div>

            <Gradient />
          </div>
          <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
            {/* <Image src={heroBackground} className='w-full' width={1440} height={1800} alt='hero' /> */}
          </div>

          {/* <BackgroundCircles /> */}
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
