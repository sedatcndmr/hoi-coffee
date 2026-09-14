import type {Metadata} from "next";
import Events from "../ui/events";
export const metadata:Metadata={title:"Etkinlikler & Atölyeler"};
export default async function Page({searchParams}:{searchParams:Promise<{etkinlik?:string}>}){const {etkinlik}=await searchParams;return <Events key={etkinlik??"all"} initialId={etkinlik}/>}
