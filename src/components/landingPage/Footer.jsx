import React from "react";
import Section from "./Section";
import { socials } from "@/utils/constants";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Section crosses className='!px-0 !py-10'>
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        <div className='text-gray-400 text-sm'>
          Made with{" "}
          <span className='inline-flex items-center justify-center'>
            <FaHeart color='#EA3C53' />
          </span>{" "}
          by @geeksforgeeks_abesec
        </div>
        <ul className='flex gap-8 flex-wrap '>
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target='_blank'
              className='flex items-center justify-center w-12 h-12 bg-n-7 rounded-full transition-colors hover:bg-n-6 '
            >
              <Image
                src={item.iconUrl}
                width={18}
                height={18}
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
