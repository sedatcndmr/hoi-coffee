import type { Metadata } from "next";
import Header from "./ui/header";
import LeafMotion from "./ui/leaf-motion";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = { title: { default: "hoi. — kahve, bitkiler & bir arada", template: "%s | hoi." }, description: "Karataş’ta kahve, bitkiler ve güzel karşılaşmalar. Hoi’yi keşfet, atölyelere göz at ve bir sonraki buluşmaya katıl." };
export default function RootLayout({children}: {children: React.ReactNode}) { return <html lang="tr"><body><a className="skip" href="#icerik">İçeriğe geç</a><Header/><main id="icerik">{children}</main><footer className="footer"><div><Link className="logo" href="/">hoi.</Link><p>kahve, bitkiler & bir arada.</p></div><div className="footer-right"><a href="https://www.instagram.com/hoi.co/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><Link href="/iletisim">Karataş, İzmir ↗</Link><small>© 2026 hoi coffee & plants</small><LeafMotion/></div></footer></body></html> }
