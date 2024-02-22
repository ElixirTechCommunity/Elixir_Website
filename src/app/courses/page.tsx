'use client';
import React from 'react';
import Link from 'next/link';
import coursesData from '../../data/music_courses.json';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';

function CoursesPage() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All Courses ({coursesData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {coursesData.courses.map((course) => (
          <CardContainer key={course.id} className="m-4 inter-var">
            <CardBody className="bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border space-y-4">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="responsive"
                  width={1000}
                  height={600}
                  className="object-cover rounded-xl"
                />
              </CardItem>
              <div className="flex justify-center">
                <Link href={`/courses`} passHref>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                  >
                    {/* Enroll - &#8377;{course.price} */}
                    Learn more
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
