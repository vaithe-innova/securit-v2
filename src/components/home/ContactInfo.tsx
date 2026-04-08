'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import RevealAnimation from '../animation/RevealAnimation';
import { useRouter } from 'next/navigation';

const countries = [
  { name: 'United States', code: '+1', iso: 'us' },
  { name: 'India', code: '+91', iso: 'in' },
  { name: 'United Kingdom', code: '+44', iso: 'gb' },
  { name: 'Canada', code: '+1', iso: 'ca' },
  { name: 'Australia', code: '+61', iso: 'au' },
  { name: 'Germany', code: '+49', iso: 'de' },
  { name: 'France', code: '+33', iso: 'fr' },
  { name: 'Japan', code: '+81', iso: 'jp' },
  { name: 'China', code: '+86', iso: 'cn' },
  { name: 'Brazil', code: '+55', iso: 'br' },
];

const ContactInfo = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/free-trial');
  };

  return (
    <section className="bg-white pt-20 pb-14 sm:pt-28 md:pt-32 md:pb-16 lg:pb-20 xl:pt-[135px]" id="contact">
      <div className="main-container">
        <div className="space-y-[50px]">
          <div className="mb-6 sm:mb-10 grid grid-cols-12 md:gap-8 space-y-4 md:space-y-0">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 gap-2">
              <RevealAnimation delay={0.1}>
                <h2 className="text-secondary-900 max-w-[90%] mt-2 text-[24px] lg:text-[30px] leading-[42px]">
                  Do you seriously care about your employees?
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-primary-700 font-semibold text-[24px] lg:text-[30px] leading-[34px] mt-3 mb-6">
                  Let&apos;s Talk!
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="space-y-1">
                  <p className="text-secondary font-semibold text-[20px] mt-2">
                    Try 30-Day Free Trial!
                  </p>
                  <p className="lg:max-w-[87%] text-primary-900 text-[16px] leading-[25px]">
                    Enjoy full feature access and see real-time compliance in action - before making any commitment.
                  </p>

                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="mt-12 space-y-2">
                  <p className="text-[#53575A] text-[15px">Write to us at</p>
                  <Link href="mailto:info@securit.app" className="text-primary-500 text-[16px] !leading-[24px] hover:underline">
                    info@securit.app
                  </Link>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="bg-white mx-auto w-full max-w-[847px] rounded-2xl">
                <RevealAnimation delay={0.2}>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Name */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Name *"
                          required
                          className="w-full h-[40px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Work Email */}
                      <div className="space-y-1">
                        <input
                          type="email"
                          placeholder="Work Email *"
                          required
                          className="w-full h-[40px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Company */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Company *"
                          required
                          className="w-full h-[40px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Job Title */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Job Title *"
                          required
                          className="w-full h-[40px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Inquiry Type */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Inquiry Type"
                          className="w-full h-[40px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Phone */}
                      <div className="space-y-1 relative" ref={dropdownRef}>
                        <div
                          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 cursor-pointer hover:bg-white h-full rounded-l-lg border-r border-stroke-11 focus:border focus:border-stroke-11 hover:border hover:border-stroke-11 z-10"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          <Image src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`} width={24} height={16} alt={selectedCountry.name} className="object-contain" unoptimized />
                          <span className="text-sm font-medium text-secondary-800">{selectedCountry.code}</span>
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                            <path d="M1 1L5 5L9 1" stroke="#94999C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>

                        {isDropdownOpen && (
                          <div className="absolute top-[calc(100%+4px)] left-0 w-[260px] max-h-[300px] overflow-y-auto bg-white border border-stroke-11 rounded-lg shadow-lg z-50 py-2">
                            {countries.map((country) => (
                              <div
                                key={country.name + country.code}
                                className="flex items-center gap-3 px-4 py-2 hover:bg-primary-50 cursor-pointer transition-colors"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                <Image src={`https://flagcdn.com/w40/${country.iso}.png`} width={24} height={16} alt={country.name} className="object-contain" unoptimized />
                                <span className="text-xs text-secondary-800 truncate flex-1">{country.name}</span>
                                <span className="text-xs text-secondary-400 font-medium whitespace-nowrap">{country.code}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <input
                          type="tel"
                          placeholder="Phone"
                          className="w-full h-[40px] pl-[115px] pr-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                    </div>
                    {/* Message */}
                    <div className="space-y-1">
                      <textarea
                        rows={4}
                        placeholder="Message"
                        className="w-full p-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800 min-h-[150px]"
                      />
                    </div>
                    {/* Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="updates"
                        className="mt-1 w-4 h-4 rounded border-stroke-11 text-primary-500 focus:ring-primary-500"
                      />
                      <label htmlFor="updates" className="text-xs md:text-sm text-secondary-600 leading-snug">
                        By checking this box, I agree to receive updates from Innova Solutions
                      </label>
                    </div>
                    {/* reCAPTCHA */}
                    <div className="py-2">
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                        onChange={handleCaptchaChange}
                      />
                    </div>
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!captchaValue}
                      onClick={handleSubmit}
                      className={`font-bold py-3 px-10 rounded-full transition-colors duration-300 text-base md:text-lg ${captchaValue
                        ? 'bg-primary-500 text-white hover:bg-primary-700 cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      Submit
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
