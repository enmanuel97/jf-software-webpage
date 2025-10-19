import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "JF Software - Soluciones de Desarrollo de Software",
    description: "Empresa especializada en desarrollo de software, aplicaciones web y móviles, diseño gráfico y branding. Transformamos tus ideas en soluciones digitales.",
    metadataBase: new URL("https://jf-software.com/"),
    authors: {
        name: "Jesus Enmanuel De La Cruz",
        url: "https://jesusenmanuel.netlify.app/",
    },
    keywords: [
        "desarrollo de software",
        "web development",
        "empresa desarrollo de software",
        "crear paginas",
        "aplicaciones moviles",
        "diseño grafico",
        "branding",
        "soluciones digitales",
        "software a medida",
        "consultoria tecnologica",
        "transformacion digital",
        "tecnologia innovadora",
        "desarrollo web personalizado",
        "aplicaciones empresariales",
        "experiencia de usuario",
        "diseño responsivo",
        "marketing digital",
        "estrategias digitales",
        "optimización SEO",
        "redes sociales",
        "publicidad en línea",
        "creación de contenido",
        "identidad de marca",
        "diseño de logotipos",
        "materiales de marketing",
        "soluciones creativas",
        "tecnología avanzada",
    ],
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
    alternates: {
        canonical: "https://jf-software.com/",
    },
    openGraph: {
        type: "website",
        title: "JF Software - Soluciones de Desarrollo de Software",
        description: "Empresa especializada en desarrollo de software, aplicaciones web y móviles, diseño gráfico y branding. Transformamos tus ideas en soluciones digitales.",
        url: "https://jf-software.com/",
        siteName: "JF Software",
        images: [
            {
                url: "/jf-software-logo-alt.png",
                width: 1200,
                height: 630,
                alt: "JF Software - Soluciones de Desarrollo de Software",
            },
        ],
    },
    icons: {
        icon: "/favicon.png",
    },
    twitter: {
        card: "summary_large_image",
        title: "JF Software - Soluciones de Desarrollo de Software",
        description: "Empresa especializada en desarrollo de software, aplicaciones web y móviles, diseño gráfico y branding. Transformamos tus ideas en soluciones digitales.",
        images: "/jf-software-logo-alt.png",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <body className={`font-sans antialiased`}>
                {children}
            </body>
        </html>
    )
}
