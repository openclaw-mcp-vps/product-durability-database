import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DurabilityDB – Rate Products by How Long They Actually Last",
  description: "Community-driven database rating product durability with verified purchase tracking. Find products built to last."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="018f6a7f-c771-4658-8cb8-6970adbc3284"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
