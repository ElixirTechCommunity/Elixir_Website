import { benefits } from "@/utils/constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "@/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "@/assets/svg/ClipPath";
import Image from "next/image";
import Link from "next/link";
import { TbNumber1Small } from "react-icons/tb";

const Benefits = () => {
  return (
    <Section id="features" className="mt-10">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl font-semibold"
          title="Study Smarter, Not Harder!."
        />
        <div className="flex justify-center items-center flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <Link
            href={item.url}
            target="_blank"
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <GradientLight />
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <div
                    className=" cursor-pointer ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
                  >
                    Download
                  </div>
                  <Arrow />
                </div>
              </div>

              {item.light}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
