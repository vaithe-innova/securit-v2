'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import RevealAnimation from '../animation/RevealAnimation';
import { toast, ToastContainer } from 'react-toastify';

const countries = [
  { "name": "United States", "code": "+1", "iso": "us" },
  { "name": "India", "code": "+91", "iso": "in" },
  { "name": "United Kingdom", "code": "+44", "iso": "gb" },
  { "name": "Canada", "code": "+1", "iso": "ca" },
  { "name": "Australia", "code": "+61", "iso": "au" },
  { "name": "Germany", "code": "+49", "iso": "de" },
  { "name": "France", "code": "+33", "iso": "fr" },
  { "name": "Japan", "code": "+81", "iso": "jp" },
  { "name": "China", "code": "+86", "iso": "cn" },
  { "name": "Brazil", "code": "+55", "iso": "br" },
  { "name": "Afghanistan", "code": "+93", "iso": "af" },
  { "name": "Albania", "code": "+355", "iso": "al" },
  { "name": "Algeria", "code": "+213", "iso": "dz" },
  { "name": "Andorra", "code": "+376", "iso": "ad" },
  { "name": "Angola", "code": "+244", "iso": "ao" },
  { "name": "Antigua and Barbuda", "code": "+1-268", "iso": "ag" },
  { "name": "Argentina", "code": "+54", "iso": "ar" },
  { "name": "Armenia", "code": "+374", "iso": "am" },
  { "name": "Austria", "code": "+43", "iso": "at" },
  { "name": "Azerbaijan", "code": "+994", "iso": "az" },
  { "name": "Bahamas", "code": "+1-242", "iso": "bs" },
  { "name": "Bahrain", "code": "+973", "iso": "bh" },
  { "name": "Bangladesh", "code": "+880", "iso": "bd" },
  { "name": "Barbados", "code": "+1-246", "iso": "bb" },
  { "name": "Belarus", "code": "+375", "iso": "by" },
  { "name": "Belgium", "code": "+32", "iso": "be" },
  { "name": "Belize", "code": "+501", "iso": "bz" },
  { "name": "Benin", "code": "+229", "iso": "bj" },
  { "name": "Bhutan", "code": "+975", "iso": "bt" },
  { "name": "Bolivia", "code": "+591", "iso": "bo" },
  { "name": "Bosnia and Herzegovina", "code": "+387", "iso": "ba" },
  { "name": "Botswana", "code": "+267", "iso": "bw" },
  { "name": "Brunei", "code": "+673", "iso": "bn" },
  { "name": "Bulgaria", "code": "+359", "iso": "bg" },
  { "name": "Burkina Faso", "code": "+226", "iso": "bf" },
  { "name": "Burundi", "code": "+257", "iso": "bi" },
  { "name": "Cambodia", "code": "+855", "iso": "kh" },
  { "name": "Cameroon", "code": "+237", "iso": "cm" },
  { "name": "Cape Verde", "code": "+238", "iso": "cv" },
  { "name": "Central African Republic", "code": "+236", "iso": "cf" },
  { "name": "Chad", "code": "+235", "iso": "td" },
  { "name": "Chile", "code": "+56", "iso": "cl" },
  { "name": "Colombia", "code": "+57", "iso": "co" },
  { "name": "Comoros", "code": "+269", "iso": "km" },
  { "name": "Congo", "code": "+242", "iso": "cg" },
  { "name": "Costa Rica", "code": "+506", "iso": "cr" },
  { "name": "Croatia", "code": "+385", "iso": "hr" },
  { "name": "Cuba", "code": "+53", "iso": "cu" },
  { "name": "Cyprus", "code": "+357", "iso": "cy" },
  { "name": "Czech Republic", "code": "+420", "iso": "cz" },
  { "name": "Denmark", "code": "+45", "iso": "dk" },
  { "name": "Djibouti", "code": "+253", "iso": "dj" },
  { "name": "Dominica", "code": "+1-767", "iso": "dm" },
  { "name": "Dominican Republic", "code": "+1-809", "iso": "do" },
  { "name": "East Timor", "code": "+670", "iso": "tl" },
  { "name": "Ecuador", "code": "+593", "iso": "ec" },
  { "name": "Egypt", "code": "+20", "iso": "eg" },
  { "name": "El Salvador", "code": "+503", "iso": "sv" },
  { "name": "Equatorial Guinea", "code": "+240", "iso": "gq" },
  { "name": "Eritrea", "code": "+291", "iso": "er" },
  { "name": "Estonia", "code": "+372", "iso": "ee" },
  { "name": "Ethiopia", "code": "+251", "iso": "et" },
  { "name": "Fiji", "code": "+679", "iso": "fj" },
  { "name": "Finland", "code": "+358", "iso": "fi" },
  { "name": "Gabon", "code": "+241", "iso": "ga" },
  { "name": "Gambia", "code": "+220", "iso": "gm" },
  { "name": "Georgia", "code": "+995", "iso": "ge" },
  { "name": "Ghana", "code": "+233", "iso": "gh" },
  { "name": "Greece", "code": "+30", "iso": "gr" },
  { "name": "Grenada", "code": "+1-473", "iso": "gd" },
  { "name": "Guatemala", "code": "+502", "iso": "gt" },
  { "name": "Guinea", "code": "+224", "iso": "gn" },
  { "name": "Guinea-Bissau", "code": "+245", "iso": "gw" },
  { "name": "Guyana", "code": "+592", "iso": "gy" },
  { "name": "Haiti", "code": "+509", "iso": "ht" },
  { "name": "Honduras", "code": "+504", "iso": "hn" },
  { "name": "Hong Kong", "code": "+852", "iso": "hk" },
  { "name": "Hungary", "code": "+36", "iso": "hu" },
  { "name": "Iceland", "code": "+354", "iso": "is" },
  { "name": "Indonesia", "code": "+62", "iso": "id" },
  { "name": "Iran", "code": "+98", "iso": "ir" },
  { "name": "Iraq", "code": "+964", "iso": "iq" },
  { "name": "Ireland", "code": "+353", "iso": "ie" },
  { "name": "Israel", "code": "+972", "iso": "il" },
  { "name": "Italy", "code": "+39", "iso": "it" },
  { "name": "Ivory Coast", "code": "+225", "iso": "ci" },
  { "name": "Jamaica", "code": "+1-876", "iso": "jm" },
  { "name": "Jordan", "code": "+962", "iso": "jo" },
  { "name": "Kazakhstan", "code": "+7", "iso": "kz" },
  { "name": "Kenya", "code": "+254", "iso": "ke" },
  { "name": "Kiribati", "code": "+686", "iso": "ki" },
  { "name": "Kuwait", "code": "+965", "iso": "kw" },
  { "name": "Kyrgyzstan", "code": "+996", "iso": "kg" },
  { "name": "Laos", "code": "+856", "iso": "la" },
  { "name": "Latvia", "code": "+371", "iso": "lv" },
  { "name": "Lebanon", "code": "+961", "iso": "lb" },
  { "name": "Lesotho", "code": "+266", "iso": "ls" },
  { "name": "Liberia", "code": "+231", "iso": "lr" },
  { "name": "Libya", "code": "+218", "iso": "ly" },
  { "name": "Liechtenstein", "code": "+423", "iso": "li" },
  { "name": "Lithuania", "code": "+370", "iso": "lt" },
  { "name": "Luxembourg", "code": "+352", "iso": "lu" },
  { "name": "Macao", "code": "+853", "iso": "mo" },
  { "name": "Macedonia", "code": "+389", "iso": "mk" },
  { "name": "Madagascar", "code": "+261", "iso": "mg" },
  { "name": "Malawi", "code": "+265", "iso": "mw" },
  { "name": "Malaysia", "code": "+60", "iso": "my" },
  { "name": "Maldives", "code": "+960", "iso": "mv" },
  { "name": "Mali", "code": "+223", "iso": "ml" },
  { "name": "Malta", "code": "+356", "iso": "mt" },
  { "name": "Marshall Islands", "code": "+692", "iso": "mh" },
  { "name": "Mauritania", "code": "+222", "iso": "mr" },
  { "name": "Mauritius", "code": "+230", "iso": "mu" },
  { "name": "Mexico", "code": "+52", "iso": "mx" },
  { "name": "Micronesia", "code": "+691", "iso": "fm" },
  { "name": "Moldova", "code": "+373", "iso": "md" },
  { "name": "Monaco", "code": "+377", "iso": "mc" },
  { "name": "Mongolia", "code": "+976", "iso": "mn" },
  { "name": "Morocco", "code": "+212", "iso": "ma" },
  { "name": "Mozambique", "code": "+258", "iso": "mz" },
  { "name": "Myanmar", "code": "+95", "iso": "mm" },
  { "name": "Namibia", "code": "+264", "iso": "na" },
  { "name": "Nauru", "code": "+674", "iso": "nr" },
  { "name": "Nepal", "code": "+977", "iso": "np" },
  { "name": "Netherlands", "code": "+31", "iso": "nl" },
  { "name": "New Zealand", "code": "+64", "iso": "nz" },
  { "name": "Nicaragua", "code": "+505", "iso": "ni" },
  { "name": "Niger", "code": "+227", "iso": "ne" },
  { "name": "Nigeria", "code": "+234", "iso": "ng" },
  { "name": "Norway", "code": "+47", "iso": "no" },
  { "name": "Oman", "code": "+968", "iso": "om" },
  { "name": "Pakistan", "code": "+92", "iso": "pk" },
  { "name": "Palau", "code": "+680", "iso": "pw" },
  { "name": "Panama", "code": "+507", "iso": "pa" },
  { "name": "Papua New Guinea", "code": "+675", "iso": "pg" },
  { "name": "Paraguay", "code": "+595", "iso": "py" },
  { "name": "Peru", "code": "+51", "iso": "pe" },
  { "name": "Philippines", "code": "+63", "iso": "ph" },
  { "name": "Poland", "code": "+48", "iso": "pl" },
  { "name": "Portugal", "code": "+351", "iso": "pt" },
  { "name": "Qatar", "code": "+974", "iso": "qa" },
  { "name": "Romania", "code": "+40", "iso": "ro" },
  { "name": "Russia", "code": "+7", "iso": "ru" },
  { "name": "Rwanda", "code": "+250", "iso": "rw" },
  { "name": "Saint Kitts and Nevis", "code": "+1-869", "iso": "kn" },
  { "name": "Saint Lucia", "code": "+1-758", "iso": "lc" },
  { "name": "Saint Vincent and the Grenadines", "code": "+1-784", "iso": "vc" },
  { "name": "Samoa", "code": "+685", "iso": "ws" },
  { "name": "San Marino", "code": "+378", "iso": "sm" },
  { "name": "Sao Tome and Principe", "code": "+239", "iso": "st" },
  { "name": "Saudi Arabia", "code": "+966", "iso": "sa" },
  { "name": "Senegal", "code": "+221", "iso": "sn" },
  { "name": "Serbia", "code": "+381", "iso": "rs" },
  { "name": "Seychelles", "code": "+248", "iso": "sc" },
  { "name": "Sierra Leone", "code": "+232", "iso": "sl" },
  { "name": "Singapore", "code": "+65", "iso": "sg" },
  { "name": "Slovakia", "code": "+421", "iso": "sk" },
  { "name": "Slovenia", "code": "+386", "iso": "si" },
  { "name": "Solomon Islands", "code": "+677", "iso": "sb" },
  { "name": "Somalia", "code": "+252", "iso": "so" },
  { "name": "South Africa", "code": "+27", "iso": "za" },
  { "name": "South Sudan", "code": "+211", "iso": "ss" },
  { "name": "Spain", "code": "+34", "iso": "es" },
  { "name": "Sri Lanka", "code": "+94", "iso": "lk" },
  { "name": "Sudan", "code": "+249", "iso": "sd" },
  { "name": "Suriname", "code": "+597", "iso": "sr" },
  { "name": "Swaziland", "code": "+268", "iso": "sz" },
  { "name": "Sweden", "code": "+46", "iso": "se" },
  { "name": "Switzerland", "code": "+41", "iso": "ch" },
  { "name": "Syria", "code": "+963", "iso": "sy" },
  { "name": "Taiwan", "code": "+886", "iso": "tw" },
  { "name": "Tajikistan", "code": "+992", "iso": "tj" },
  { "name": "Tanzania", "code": "+255", "iso": "tz" },
  { "name": "Thailand", "code": "+66", "iso": "th" },
  { "name": "Togo", "code": "+228", "iso": "tg" },
  { "name": "Tonga", "code": "+676", "iso": "to" },
  { "name": "Trinidad and Tobago", "code": "+1-868", "iso": "tt" },
  { "name": "Tunisia", "code": "+216", "iso": "tn" },
  { "name": "Turkey", "code": "+90", "iso": "tr" },
  { "name": "Turkmenistan", "code": "+993", "iso": "tm" },
  { "name": "Tuvalu", "code": "+688", "iso": "tv" },
  { "name": "Uganda", "code": "+256", "iso": "ug" },
  { "name": "Ukraine", "code": "+380", "iso": "ua" },
  { "name": "United Arab Emirates", "code": "+971", "iso": "ae" },
  { "name": "Uruguay", "code": "+598", "iso": "uy" },
  { "name": "Uzbekistan", "code": "+998", "iso": "uz" },
  { "name": "Vanuatu", "code": "+678", "iso": "vu" },
  { "name": "Vatican City", "code": "+379", "iso": "va" },
  { "name": "Venezuela", "code": "+58", "iso": "ve" },
  { "name": "Vietnam", "code": "+84", "iso": "vn" },
  { "name": "Yemen", "code": "+967", "iso": "ye" },
  { "name": "Zambia", "code": "+260", "iso": "zm" },
  { "name": "Zimbabwe", "code": "+263", "iso": "zw" }
];

const ContactInfo = () => {
  // const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchCountry, setSearchCountry] = useState('');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    inquiryType: '',
    phone: '',
    message: '',
    agreeUpdates: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const freeEmailDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'msn.com',
      'live.com', 'outlook.com', 'icloud.com', 'mail.com', 'yandex.com',
      'protonmail.com', 'me.com', 'gmx.com'
    ];

    if (!formData.name.trim()) { newErrors.name = 'Name is required'; }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    } else {
      const emailDomain = formData.email.split('@')[1]?.toLowerCase();
      if (emailDomain && freeEmailDomains.includes(emailDomain)) {
        newErrors.email = 'Please enter a valid work email';
      }
    }

    if (!formData.company.trim()) { newErrors.company = 'Company is required'; }
    if (!formData.jobTitle.trim()) { newErrors.jobTitle = 'Job Title is required'; }

    if (formData.phone && !/^\d{7,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // router.push('/free-trial');
      notify();
    }
  };
  const notify = () => toast('Thank you for submitting your details. Our team will get back to you shortly!');

  return (
    <>
      <section className="bg-[#EFF6FF] pt-20 pb-14 sm:pt-28 md:pt-32 md:pb-16 lg:pb-20 xl:pt-[135px]" id="contact">
        <div className="main-container">
          <div className="space-y-[50px]">
            <div className="mb-6 sm:mb-10 grid grid-cols-12 md:gap-8 space-y-4 md:space-y-0">
              <div className="col-span-12 md:col-span-6 lg:col-span-5 gap-2">
                <RevealAnimation delay={0.1} direction="down" offset={20}>
                  <h2 className="text-secondary-900 max-w-[90%] mt-2 text-[24px] lg:text-[30px] leading-[42px] xl:max-w-[100%]">
                    Do you seriously care about your employees?
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2} direction="down" offset={20}>
                  <h2 className="text-primary-700 font-semibold text-[24px] lg:text-[30px] leading-[34px] mt-3 mb-6">
                    Let&apos;s Talk!
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4} direction="up" offset={30}>
                  <div className="space-y-1 bg-white/50 p-6 rounded-2xl transition-all duration-300 border border-primary-100 cursor-default">
                    <p className="text-primary-700 font-semibold text-[20px] mt-2">
                      Try 30-Day Free Trial!
                    </p>
                    <p className="lg:max-w-[87%] text-primary-900 text-[16px] leading-[25px]">
                      Enjoy full feature access and see real-time compliance in action - before making any commitment.
                    </p>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.5} direction="up" offset={30}>
                  <div className="mt-12 space-y-2">
                    <p className="text-[#53575A] text-[15px]">Write to us at</p>
                    <Link href="mailto:info@securit.app" className="text-primary-900 text-[16px] !leading-[24px] hover:text-primary-500 transition-all">
                      info@securit.app
                    </Link>
                  </div>
                </RevealAnimation>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-7">
                <div className="mx-auto w-full max-w-[847px] rounded-2xl">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Name */}
                      <RevealAnimation delay={0.3} direction="down" offset={20}>
                        <div className="space-y-1">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name *"
                            className={`w-full h-[45px] px-4 rounded-lg border ${errors.name ? 'border-red-500' : 'border-stroke-11'} bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 placeholder:text-secondary-400 text-secondary-800 transition-all duration-300 hover:shadow-md`}
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1 pl-1">{errors.name}</p>}
                        </div>
                      </RevealAnimation>
                      {/* Work Email */}
                      <RevealAnimation delay={0.4} direction="down" offset={20}>
                        <div className="space-y-1">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Work Email *"
                            className={`w-full h-[45px] px-4 rounded-lg border ${errors.email ? 'border-red-500' : 'border-stroke-11'} bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 placeholder:text-secondary-400 text-secondary-800 transition-all duration-300 hover:shadow-md`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1 pl-1">{errors.email}</p>}
                        </div>
                      </RevealAnimation>
                      {/* Company */}
                      <RevealAnimation delay={0.5} direction="down" offset={20}>
                        <div className="space-y-1">
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company *"
                            className={`w-full h-[45px] px-4 rounded-lg border ${errors.company ? 'border-red-500' : 'border-stroke-11'} bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 placeholder:text-secondary-400 text-secondary-800 transition-all duration-300 hover:shadow-md`}
                          />
                          {errors.company && <p className="text-red-500 text-xs mt-1 pl-1">{errors.company}</p>}
                        </div>
                      </RevealAnimation>
                      {/* Job Title */}
                      <RevealAnimation delay={0.6} direction="down" offset={20}>
                        <div className="space-y-1">
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            placeholder="Job Title *"
                            className={`w-full h-[45px] px-4 rounded-lg border ${errors.jobTitle ? 'border-red-500' : 'border-stroke-11'} bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 placeholder:text-secondary-400 text-secondary-800 transition-all duration-300 hover:shadow-md`}
                          />
                          {errors.jobTitle && <p className="text-red-500 text-xs mt-1 pl-1">{errors.jobTitle}</p>}
                        </div>
                      </RevealAnimation>
                      {/* Inquiry Type */}
                      <RevealAnimation delay={0.7} direction="down" offset={20}>
                        <div className="space-y-1">
                          <input
                            type="text"
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            placeholder="Inquiry Type"
                            className="w-full h-[45px] px-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 placeholder:text-secondary-400 text-secondary-800 transition-all duration-300 hover:shadow-md"
                          />
                        </div>
                      </RevealAnimation>
                      {/* Phone */}
                      <RevealAnimation delay={0.8} direction="down" offset={20}>
                        <div className="space-y-1 relative z-10" ref={dropdownRef}>
                          <div
                            className="absolute left-0 top-[22.5px] -translate-y-1/2 flex items-center gap-2 px-4 cursor-pointer hover:bg-white h-[45px] rounded-l-lg border-r border-stroke-11 transition-colors z-10"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          >
                            <Image src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`} width={24} height={16} alt={selectedCountry.name} className="object-contain" unoptimized />
                            <span className="text-sm font-medium text-secondary-800">{selectedCountry.code}</span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                              <path d="M1 1L5 5L9 1" stroke="#94999C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>

                          {isDropdownOpen && (
                            <div className="absolute top-full left-0 w-[260px] max-h-[300px] overflow-hidden flex flex-col bg-white border border-stroke-11 rounded-lg shadow-lg z-50 animate-in fade-in zoom-in duration-200">
                              <div className="p-2 border-b border-stroke-11 sticky top-0 bg-white">
                                <input
                                  type="text"
                                  placeholder="Search country..."
                                  value={searchCountry}
                                  onChange={(e) => setSearchCountry(e.target.value)}
                                  className="w-full h-[32px] px-3 rounded-md border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 placeholder:text-secondary-400 text-secondary-800 text-sm"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                              <div className="overflow-y-auto flex-1 py-1">
                                {countries
                                  .filter(c => c.name.toLowerCase().includes(searchCountry.toLowerCase()) || c.code.includes(searchCountry))
                                  .map((country) => (
                                    <div
                                      key={country.name + country.code}
                                      className="flex items-center gap-3 px-4 py-2 hover:bg-primary-50 cursor-pointer transition-colors"
                                      onClick={() => {
                                        setSelectedCountry(country);
                                        setIsDropdownOpen(false);
                                        setSearchCountry('');
                                      }}
                                    >
                                      <Image src={`https://flagcdn.com/w40/${country.iso}.png`} width={24} height={16} alt={country.name} className="object-contain" unoptimized />
                                      <span className="text-xs text-secondary-800 truncate flex-1">{country.name}</span>
                                      <span className="text-xs text-secondary-400 font-medium whitespace-nowrap">{country.code}</span>
                                    </div>
                                  ))}
                                {countries.filter(c => c.name.toLowerCase().includes(searchCountry.toLowerCase()) || c.code.includes(searchCountry)).length === 0 && (
                                  <div className="px-4 py-3 text-sm text-secondary-400 text-center">No countries found</div>
                                )}
                              </div>
                            </div>
                          )}

                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className={`w-full h-[45px] pl-[115px] pr-4 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-stroke-11'} bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 placeholder:text-secondary-400 text-secondary-800 transition-all duration-300 hover:shadow-md`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1 pl-1">{errors.phone}</p>}
                        </div>
                      </RevealAnimation>
                    </div>
                    {/* Message */}
                    <RevealAnimation delay={0.9} direction="down" offset={20}>
                      <div className="space-y-1">
                        <textarea
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message"
                          className="w-full p-4 rounded-lg border border-stroke-11 bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 placeholder:text-secondary-400 text-secondary-800 min-h-[150px] transition-all duration-300 hover:shadow-md"
                        />
                      </div>
                    </RevealAnimation>
                    {/* Checkbox */}
                    <RevealAnimation delay={1.0} direction="up" offset={10}>
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="updates"
                          name="agreeUpdates"
                          checked={formData.agreeUpdates}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 rounded border-stroke-11 text-primary-500 focus:ring-primary-500 cursor-pointer"
                        />
                        <label htmlFor="updates" className="text-xs md:text-sm text-secondary-600 leading-snug cursor-pointer select-none">
                          By checking this box, I agree to receive updates from Innova Solutions
                        </label>
                      </div>
                    </RevealAnimation>
                    {/* reCAPTCHA */}
                    <RevealAnimation delay={1.1} direction="up" offset={10}>
                      <div className="py-2">
                        <ReCAPTCHA
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                          onChange={handleCaptchaChange}
                        />
                      </div>
                    </RevealAnimation>
                    {/* Submit Button */}
                    <RevealAnimation delay={1.2} direction="up" offset={20}>
                      <button
                        type="submit"
                        disabled={!captchaValue}
                        className={`font-bold py-3 px-10 rounded-full transition-all duration-300 text-base md:text-lg shadow-lg active:scale-95 ${captchaValue
                          ? 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-primary-500/20 hover:-translate-y-1 cursor-pointer'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                      >
                        Submit
                      </button>
                    </RevealAnimation>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ContactInfo;
