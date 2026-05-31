import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: "Premium Laundry Services | Recolección y Entrega de Lavandería",
  description: "Servicios de lavandería premium en Augusta, Georgia. Recogemos, lavamos, doblamos y entregamos tu ropa limpia y fresca a domicilio. ¡Agenda hoy mismo tu servicio!",
  keywords: ["lavandería, servicio a domicilio, Augusta Georgia, lavandería premium, limpieza de ropa, recolección y entrega, suscripción lavandería"],
  openGraph: {
    "title": "Premium Laundry Services",
    "description": "Servicios de lavandería premium en Augusta, Georgia. Recogemos, lavamos, doblamos y entregamos tu ropa limpia y fresca a domicilio. ¡Agenda hoy mismo tu servicio!",
    "url": "https://www.premiumlaundryservices.com",
    "siteName": "Premium Laundry Services",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETIrw2UXXmzKejhr1JTPbva6gV/uploaded-1780203712602-frguudqj.png",
        "alt": "Premium Laundry Services Logo"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Premium Laundry Services",
    "description": "Servicios de lavandería premium en Augusta, Georgia. Recogemos, lavamos, doblamos y entregamos tu ropa limpia y fresca a domicilio. ¡Agenda hoy mismo tu servicio!",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETIrw2UXXmzKejhr1JTPbva6gV/uploaded-1780203712602-frguudqj.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
