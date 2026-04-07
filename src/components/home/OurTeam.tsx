'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const teamMembers = [
  {
    id: 1,
    name: 'Sadhu, Rajendra',
    role: 'Sr. VP, Hi-Tech SBU',
    image: '/images/team/4.png',
  },
  {
    id: 2,
    name: 'Karki, Pradeep',
    role: 'AVP, Product',
    image: '/images/team/2.png',
  },
  {
    id: 3,
    name: 'Sharma, Sanchit',
    role: 'Manager, Sales',
    image: '/images/team/3.png',
  },
  {
    id: 4,
    name: 'Yeturi, Varun',
    role: 'Deputy Manager, Sales',
    image: '/images/team/1.png',
  },
];

const OurTeam = () => {
  return (
    <section className="bg-white dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px]">
      <div className="main-container">
        {/* Heading */}
        <div className="mb-3 space-y-4 text-center">
          <RevealAnimation delay={0.2}>
            <div className="inline-block border border-primary-200 dark:border-primary-500/30 rounded-full px-5 py-[6px] mb-3 bg-transparent">
              <span className="text-primary-700 dark:text-primary-400 text-sm sm:text-[15px] font-medium">
                Our People
              </span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <h2 className="text-primary-700 dark:text-white font-bold text-3xl md:text-[36px] lg:text-[40px] !leading-tight">
              Meet the Team
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-secondary dark:text-accent/60 text-[18px] md:text-[20px] leading-[1.2]">
              Safety experts, engineers, and innovators united by one mission — protecting workers everywhere they work.
            </p>
          </RevealAnimation>
        </div>

        {/* Team Grid */}
        <div className="pb-5 pt-3 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <RevealAnimation key={member.id} delay={0.15 + index * 0.15} direction="up" offset={40}>
                <div
                  className="group flex flex-col overflow-hidden rounded-xl border border-stroke-1 dark:border-white/10 bg-white dark:bg-background-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="relative w-full aspect-[3/3.5] overflow-hidden bg-gray-100 dark:bg-background-7">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-108"
                      unoptimized
                    />
                    {/* Subtle colour overlay on hover */}
                    <div className="absolute inset-0 bg-primary-700/0 group-hover:bg-primary-700/10 transition-colors duration-500" />
                  </div>

                  {/* Info */}
                  <div className="p-3 text-center border-t border-stroke-1 dark:border-white/10 transition-colors duration-300 group-hover:bg-primary-50/40 dark:group-hover:bg-primary-900/20">
                    <p className="text-secondary dark:text-accent font-semibold text-[20px] !leading-[26px]">
                      {member.name}
                    </p>
                    <p className="text-[#53575A] text-[16px] mt-0.5 !leading-[26px]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

OurTeam.displayName = 'OurTeam';
export default OurTeam;
