"use client";
import Link from "next/link";
import Brand from "./brand";
import {usePathname} from "next/navigation";
import {useState} from "react";
export default function Header(){ const path=usePathname(); const [open,setOpen]=useState(false); const links=[["/","Ana Sayfa"],["/menu","Menü"],["/etkinlikler","Etkinlikler"],["/hakkimizda","Hoi Hakkında"],["/iletisim","Ziyaret"]];return <header className="header"><Link href="/" className="brand" aria-label="Hoi ana sayfa" onClick={()=>setOpen(false)}><Brand/></Link><button className="mobile-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?"Kapat ×":"Gezinme ☰"}</button><nav id="navigation" className={open?"navigation is-open":"navigation"} aria-label="Ana gezinme">{links.map(([href,label])=><Link key={href} href={href} aria-current={path===href?"page":undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><Link className="header-cta" href="/etkinlikler">Birlikte üretelim <span>↗</span></Link></header>}
