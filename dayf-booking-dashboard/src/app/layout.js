import { DM_Sans, Quicksand, Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import Script from "next/script";
import "@splidejs/react-splide/css";

export const quicksand = Quicksand({
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
  display: "block",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
  display: "block",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DAYF Booking - Find Your Dream Stay",
    template: "%s - DAYF Booking",
  },
  description:
    "Book Your Dream Stay in Algeria’s Top Destinations with DAYF Booking! Discover handpicked hotels and accommodations across Algeria’s most captivating destinations. Whether you’re planning a city escape, a coastal retreat, or a desert adventure, we’ve got you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <Script src="/scripts/lang-config.js" strategy="beforeInteractive" />
        <Script src="/scripts/translation.js" strategy="beforeInteractive" />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`${dmSans.className} ${quicksand.variable} ${roboto.variable} box-border antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
