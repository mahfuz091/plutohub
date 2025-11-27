import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@fontsource/work-sans/latin.css";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.scss";
import Footer from "../Components/shared/footer";
import Layout from "../Components/Layout/Layout";
import Header from "../Components/shared/header";
import Script from "next/script";
import { Toaster } from "sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

// export const metadata: Metadata = {

//   title: "Development, UI/UX  Branding - Unlock Your Brand's Potential",
//   description:
//     "Need a full-service digital partner? We Provide Web Development, UI/UX, and Branding Services to boost your ROI and business growth. Request a Quote Today!",
//   twitter: {
//     card: "summary_large_image",
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// };
export const metadata: Metadata = {
  metadataBase: new URL("https://plutohub.agency"),
  alternates: {
    canonical: "/",
  },
  title: "Development, UI/UX  Branding - Unlock Your Brand's Potential",
  description:
    "Need a full-service digital partner? We Provide Web Development, UI/UX, and Branding Services to boost your ROI and business growth. Request a Quote Today!",
  openGraph: {
    title: "Development, UI/UX  Branding - Unlock Your Brand's Potential",
    description:
      "Need a full-service digital partner? We Provide Web Development, UI/UX, and Branding Services to boost your ROI and business growth. Request a Quote Today!",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="jL50bNw8bkBkNtudsNvptQ0motABgDg2_kSDEylPrxk"
        />
      </head>
      <body>
        {/*  Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BV2Q0LTKVM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BV2Q0LTKVM');
          `}
        </Script>

        {/*  Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tr3ovcilv1");
          `}
        </Script>

        <Layout>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
