import { Roboto } from 'next/font/google';

// const interTight = Inter_Tight({
//   subsets: ['latin'],
//   variable: '--font-interTight',
//   display: 'swap',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '300', '400', '500', '600', '700', '900'],
});

export { roboto };
