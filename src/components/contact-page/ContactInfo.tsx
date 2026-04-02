'use client';

import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const ContactInfo = () => {
  return (
    <section className="bg-white pt-28 pb-14 sm:pt-28 md:pt-32 md:pb-16 lg:pb-20 xl:pt-[135px]">
      <div className="main-container">
        <div className="space-y-[50px] mt-10">
          <div className="mb-6 sm:mb-10 grid grid-cols-12 md:gap-8 space-y-4 md:space-y-0">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <span className="text-primary-500 tracking-[2%] sm:tracking-[3%] !leading-4 text-xs sm:text-sm font-normal">Contact Us</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-primary-700 mt-2 mb-4 font-bold text-3xl md:text-4xl lg:text-5xl">
                  Get in touch with Us
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="text-ns-gray-light max-w-[690px] text-sm md:text-base">
                  We're here to help! Whether you have a question about our services, need assistance with your account,
                  or want to provide feedback, our team is ready to assist you.
                </p>
              </RevealAnimation>
              <div className="mt-10 flex flex-col justify-center gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[70px]">
                <div className="grid grid-cols-12 space-y-8 md:gap-8 md:space-y-0">
                  <RevealAnimation delay={0.2}>
                    <div className="col-span-12 md:col-span-7 lg:col-span-7">
                      <div className="bg-blue-light dark:bg-background-6 relative w-full space-y-6 overflow-hidden rounded-[12px] p-6">
                        <div className="space-y-5">
                          <div className="space-y-1">
                            <p className="text-ns-gray-light text-xs sm:text-sm">Email:</p>
                            <p className="text-primary-500 hover:text-primary-700 underline font-bold text-sm md:text-base md:text-lg">
                              <Link href="mailto:hello@securit.com">hello@securit.com</Link>
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-ns-gray-light text-xs sm:text-sm">Phone :</p>
                            <p className="text-primary-700 hover:text-primary-500 font-bold text-sm md:text-base md:text-lg">
                              <Link href="tel:+91 9712321342323">+91 97123 342323</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <div className="col-span-12 md:col-span-5 lg:col-span-5">
                      <div className="border-stroke-11 dark:bg-background-6 relative h-full w-full space-y-6 overflow-hidden rounded-[12px] border bg-white p-6">
                        <div className="flex h-full flex-col justify-between space-y-2.5">
                          <p className="text-heading-6 text-accent">
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <rect width="48" height="48" rx="24" fill="#0070CE" />
                              <path
                                d="M24 27V15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M33 27V31C33 31.5304 32.7893 32.0391 32.4142 32.4142C32.0391 32.7893 31.5304 33 31 33H17C16.4696 33 15.9609 32.7893 15.5858 32.4142C15.2107 32.0391 15 31.5304 15 31V27"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.999 22.0005L23.999 27.0005L28.999 22.0005"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </p>
                          <p className="text-primary-700 hover:text-primary-500 font-bold text-sm md:text-base md:text-lg">
                            <Link href="#">Download Brochure</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="dark:bg-background-6 bg-blue-light mx-auto w-full max-w-[847px] rounded-2xl p-6 md:p-7 lg:p-8">
                <RevealAnimation delay={0.2}>
                  <form className="space-y-8">
                    <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                      <div className="w-full space-y-2 lg:max-w-[364px]">
                        <label
                          htmlFor="firstname"
                          className="text-ns-black dark:text-accent block text-sm font-normal sm:text-base">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="Enter your first name"
                          required={true}
                          autoComplete="name"
                          className="border-stroke-11 bg-background-13 placeholder:text-ns-gray-light focus:border-secondary/50 focus:bg-white placeholder:text-tagline-2 h-[48px] w-full rounded-xl border px-[18px] py-3 text-base font-normal placeholder:font-normal focus:outline-none xl:h-[56px]"
                        />
                      </div>
                      {/* Last name */}
                      <div className="w-full max-w-[364px] space-y-2">
                        <label
                          htmlFor="lastname"
                          className="text-ns-black dark:text-accent block text-sm font-normal sm:text-base">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Enter your last name"
                          required={true}
                          autoComplete="name"
                          className="border-stroke-11 bg-background-13 placeholder:text-ns-gray-light focus:border-secondary/50 focus:bg-white placeholder:text-tagline-2 h-[48px] w-full rounded-xl border px-[18px] py-3 text-base font-normal placeholder:font-normal focus:outline-none xl:h-[56px]"
                        />
                      </div>
                    </div>
                    {/* email  */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                        Email ID
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email id"
                        required={true}
                        autoComplete="email"
                        className="border-stroke-11 bg-background-13 placeholder:text-ns-gray-light focus:border-secondary/50 focus:bg-white placeholder:text-tagline-2 h-[48px] w-full rounded-xl border px-[18px] py-3 text-base font-normal placeholder:font-normal focus:outline-none xl:h-[56px]"
                      />
                    </div>
                    {/* message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={7}
                        placeholder="Enter your message"
                        required={true}
                        className="border-stroke-11 bg-background-13 placeholder:text-ns-gray-light focus:border-secondary/50 focus:bg-white placeholder:text-tagline-2 w-full rounded-xl border px-[18px] py-3 text-base font-normal placeholder:font-normal focus:outline-none"
                        defaultValue={''}
                      />
                    </div>
                    {/* submit button */}
                    <button
                      type="submit"
                      className="btn btn-md btn-primary hover:btn-white-dark dark:btn-accent h-10 w-full text-sm font-bold first-letter:uppercase before:content-none sm:text-base lg:h-[60px] lg:text-lg">
                      Send Message
                    </button>
                  </form>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
