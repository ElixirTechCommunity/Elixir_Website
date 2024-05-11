import React from "react";
import Section from "./Section";
import { socials } from "@/utils/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <Section crosses className='!px-0 !py-10'>
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        <ul className='flex gap-20 flex-wrap '>
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target='_blank'
              className='flex items-center justify-center w-20 h-20 bg-n-7 rounded-full transition-colors hover:bg-n-6 '
            >
              <Image
                src={item.iconUrl}
                width={25}
                height={25}
                alt={item.title}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
