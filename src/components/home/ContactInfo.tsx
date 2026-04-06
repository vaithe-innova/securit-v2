'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import RevealAnimation from '../animation/RevealAnimation';

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

  return (
    <section className="bg-white pt-20 pb-14 sm:pt-28 md:pt-32 md:pb-16 lg:pb-20 xl:pt-[135px]" id="contact">
      <div className="main-container">
        <div className="space-y-[50px]">
          <div className="mb-6 sm:mb-10 grid grid-cols-12 md:gap-8 space-y-4 md:space-y-0">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 gap-2">
              <RevealAnimation delay={0.1}>
                <h2 className="text-secondary-800 mt-2 font-normal text-3xl md:text-4xl lg:text-[40px]">
                  Ready to Innovate with Us?
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-primary-500 mb-8 font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight">
                  Let&apos;s Talk!
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="space-y-6">
                  <p className="text-secondary-600 text-sm md:text-base">
                    Connect with us on social media
                  </p>
                  <div className="flex items-center gap-3">
                    {/* LinkedIn */}
                    <Link href="https://linkedin.com" target="_blank" className="w-[44px] h-[44px] bg-[#0077b5] rounded-lg flex items-center justify-center transition-transform hover:-translate-y-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </Link>
                    {/* Facebook */}
                    <Link href="https://facebook.com" target="_blank" className="w-[44px] h-[44px] bg-[#3b5998] rounded-lg flex items-center justify-center transition-transform hover:-translate-y-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                    </Link>
                    {/* X (Twitter) */}
                    <Link href="https://x.com" target="_blank" className="w-[44px] h-[44px] bg-black rounded-lg flex items-center justify-center transition-transform hover:-translate-y-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </Link>
                    {/* Instagram */}
                    <Link href="https://instagram.com" target="_blank" className="w-[44px] h-[44px] bg-[#e4405f] rounded-lg flex items-center justify-center transition-transform hover:-translate-y-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 1.764.308 2.093.43.438.17.75.373 1.03.651.278.277.48.59.65.1.03.172.43.327.33.65 1.03.22.278.43.48.65.1.03 1.365.1.063 1.764.31 2.094.43.33.125.654.276.1.03 3.585-.014 4.852-.072 3.204-.058 3.584-.012 4.85-.07 1.365-.062 1.764-.308 2.093-.43.438-.171.75-.373 1.03-.65.278-.278.48-.59.651-1.03.17-.438.33-.75.43-1.03.125-.327.27-.654.327-1.03.1.06-.327 1.765-.31 2.094-.43-.33-1.25-.654-2.766-.1.03-3.204.012-3.584.07-4.85.062-1.366.308-1.764.43-2.093.171-.438.373-.751.65-.1.031-1.031.278-.59.48-.65.1.03-1.03-.172-.43-.327-.33-.65-1.03-.22-.278-.43-.48-.65-.1-.03-1.365-.1-.063-1.764-.31-2.094-.43zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.151.26-2.915.558-.79.307-1.459.718-2.126 1.385-.667.667-1.078 1.335-1.385 2.126-.297.764-.501 1.638-.558 2.915-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.151.558 2.915.307.79.718 1.459 1.385 2.126s1.335 1.078 2.126 1.385c.764.297 1.638.501 2.915.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.151-.26 2.915-.558.79-.307 1.459-.718 2.126-1.385s1.078-1.335 1.385-2.126c.297-.764.501-1.638.558-2.915.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.151-.558-2.915-.307-.79-.718-1.459-1.385-2.126s-1.335-1.078-2.126-1.385c-.764-.297-1.638-.501-2.915-.558-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </Link>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="mt-12 space-y-2">
                  <p className="text-secondary-400 text-[12px] uppercase tracking-wider font-semibold">Write to us at</p>
                  <Link href="mailto:info@innovasolutions.com" className="text-primary-500 font-bold hover:underline">
                    info@innovasolutions.com
                  </Link>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="bg-white border border-[#E6E6E6] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] mx-auto w-full max-w-[847px] rounded-2xl p-6 md:p-10 lg:p-12">
                <RevealAnimation delay={0.2}>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Name */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Name*"
                          required
                          className="w-full h-[52px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Work Email */}
                      <div className="space-y-1">
                        <input
                          type="email"
                          placeholder="Work Email *"
                          required
                          className="w-full h-[52px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Company */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Company *"
                          required
                          className="w-full h-[52px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Job Title */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Job Title*"
                          required
                          className="w-full h-[52px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Inquiry Type */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Inquiry Type"
                          className="w-full h-[52px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
                        />
                      </div>
                      {/* Phone */}
                      <div className="space-y-1 relative" ref={dropdownRef}>
                        <div
                          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 cursor-pointer hover:bg-gray-50 h-full rounded-l-lg border-r border-stroke-11 z-10"
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
                          className="w-full h-[52px] pl-[115px] pr-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800"
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
                      className={`font-bold py-3 px-10 rounded-full transition-colors duration-300 text-base md:text-lg ${captchaValue
                          ? 'bg-primary-500 text-white hover:bg-primary-600'
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
