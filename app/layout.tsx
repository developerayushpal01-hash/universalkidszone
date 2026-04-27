// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import WhatsAppFloat from "./components/WhatsAppFloat";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Universal kids zone",
//   description: "Universal kids zone",
//   icons: {
//     icon: [{ url: "/icon.png", type: "image/png" }],
//     shortcut: "/icon.png",
//     apple: "/icon.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">
//         {children}
//         <WhatsAppFloat />
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://universalkidszone.vercel.app"),
  title: {
    default: "Universal Kids Zone - Best School in Pithampur",
    template: "%s | Universal Kids Zone",
  },
  description:
    "Universal Kids Zone is one of the best schools in Pithampur offering Nursery to 8th class education.",
  keywords: [
    "school in pithampur",
    "best school in pithampur",
    "nursery school pithampur",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <WhatsAppFloat />

        {/* ✅ SAFE Schema तरीका */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "Universal Kids Zone",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pithampur",
                addressCountry: "India",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}