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
    "kids learning website",
    "online learning for kids",
    "kids education platform",
    "fun learning for children",
    "free kids education India",
    "Universal Kids Zone",
    "universalkidszone",
    "kids zone website",
    "free learning website for kids",
    "best kids learning platform India",
    "fun educational activities for kids",
    "online games for kids learning",
    "kids study website free",
    "interactive learning for children",
    "kids learning website",
    "kids education platform",
    "online learning for kids",
    "fun learning for children",
    "kids activity website",
    "children education online",
    "Pithampur school"
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
      className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}
    >
      <body className="overflow-x-hidden">
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
