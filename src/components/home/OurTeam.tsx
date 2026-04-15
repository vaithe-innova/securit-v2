'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import team1 from '@public/images/team/Rajendra-Raj-Sadhu.jpg';
import placeholder from '@public/images/team/placeholder.jpg';


const teamMembers = [
  {
    id: 1,
    name: 'Rajendra (Raj) Sadhu',
    role: 'Senior Vice President, Hi-Tech SBU',
    image: team1
  },
  {
    id: 2,
    name: 'Pradeep Karki',
    role: 'Associate Vice President',
    image: placeholder,
  },
  {
    id: 3,
    name: 'Sanchit Sharma',
    role: 'Deputy Manager - Support',
    image: placeholder,
  },
  {
    id: 4,
    name: 'Name',
    role: 'Designation',
    image: placeholder,
  },
];

const OurTeam = () => {
  return (
    <section className="bg-white dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px]" id="team">
      <div className="main-container">
        {/* Heading */}
        <div className="mb-3 space-y-4 text-center">
          <RevealAnimation delay={0.1} direction="down" offset={20}>
            <div className="inline-block border border-[#0070CE] dark:border-primary-500/30 rounded-full px-5 py-[6px] mb-3 bg-transparent">
              <span className="text-primary-700 dark:text-primary-400 text-sm sm:text-[15px] font-medium">
                Our People
              </span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="down" offset={20}>
            <h2 className="text-primary-700 dark:text-white font-bold text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] !leading-tight">
              Meet the Team
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="down" offset={20}>
            <p className="text-secondary dark:text-accent/60 text-base sm:text-[18px] md:text-[20px] leading-[1.35] sm:leading-[1.2]">
              Safety experts, engineers, and innovators united by one mission — protecting workers everywhere they work.
            </p>
          </RevealAnimation>
        </div>

        {/* Team Grid */}
        <div className="pb-5 pt-3 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-6">
            {teamMembers.map((member, index) => (
              <RevealAnimation key={member.id} delay={0.15 + index * 0.1} direction="up" offset={50}>
                <div
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stroke-1 dark:border-white/10 bg-white dark:bg-background-5 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,112,206,0.15)] hover:-translate-y-3 transition-all duration-500 ease-out"
                >
                  {/* Photo */}
                  <div className="relative w-full aspect-[3/3.8] overflow-hidden bg-gray-100 dark:bg-background-7">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Subtle colour overlay on hover */}
                    <div className="absolute inset-0 bg-primary-700/0 group-hover:bg-primary-700/5 transition-colors duration-700" />
                    {/* Inner border on hover */}
                    <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-700 rounded-xl pointer-events-none" />
                  </div>

                  {/* Info */}
                  <div className="p-5 text-center border-t border-stroke-1 dark:border-white/10 transition-colors duration-500 group-hover:bg-primary-50/30 dark:group-hover:bg-primary-900/10">
                    <p className="text-secondary dark:text-accent font-bold text-[20px] !leading-[26px] group-hover:text-primary-700 transition-colors duration-300">
                      {member.name}
                    </p>
                    <p className="text-[#53575A] text-[15px] mt-1 !leading-[24px] opacity-80">
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
