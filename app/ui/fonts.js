// /app/ui/fonts.js

import { Inter } from 'next/font/google';

// Mengimpor font Inter dengan subset 'latin'
const inter = Inter({ subsets: ['latin'] });

export const lusitana = {
  className: 'font-lusitana',
};

// Menggabungkan font Inter ke dalam ekspor
export const fonts = {
  lusitana,
  inter: {
    className: inter.className,
  },
};
