import Image from "next/image";

export default function Brand() {
  return <>
    <span className="brand-symbol" aria-hidden="true">
      <Image src="/hoi-corporate-logo.png" alt="" width={432} height={410} unoptimized />
    </span>
    <span className="brand-wordmark" aria-hidden="true">
      <span className="brand-name">hoi.co</span>
      <span className="brand-tagline">COFFEE & PLANTS</span>
    </span>
  </>;
}
