export type HoiEvent = {id:string;title:string;category:string;date:string;time:string;duration:string;capacity:number;remaining:number;price:number;art:string;description:string};
// Preview data: replace with confirmed dates, prices and availability before publishing.
export const events:HoiEvent[]=[
{id:"seramik",title:"Bir fincan da sen yap.",category:"Seramik",date:"2026-09-19",time:"14:00",duration:"2 saat",capacity:12,remaining:3,price:950,art:"cup",description:"Kil ile tanış, ellerinin ritmine bırak. Kendi fincanını şekillendirdiğin, kahve molalı bir seramik buluşması. Deneyim gerektirmez; örnek programda malzemeler dahildir."},
{id:"bitki",title:"Biraz toprak, biraz huzur.",category:"Bitki",date:"2026-09-23",time:"18:30",duration:"1,5 saat",capacity:10,remaining:6,price:650,art:"plant",description:"Saksı değişimi, doğru sulama ve bitkilerin küçük ihtiyaçları üzerine birlikte öğreniyoruz. Yeni başlayan bitki severler için örnek bir atölye."},
{id:"kitap",title:"Aynı kitabın etrafında.",category:"Kitap Kulübü",date:"2026-09-27",time:"16:00",duration:"2 saat",capacity:14,remaining:0,price:0,art:"book",description:"Bir fincan kahve eşliğinde okuduklarımızı ve bizde bıraktıklarını konuşuyoruz. Kitap seçimi ve buluşma koşulları gerçek programla birlikte duyurulacak."},
{id:"ekim-seramik",title:"Sonbahara bir fincan.",category:"Seramik",date:"2026-10-10",time:"14:00",duration:"2 saat",capacity:12,remaining:8,price:950,art:"cup",description:"Sonbaharın renklerinden ilhamla kendi seramik fincanını tasarla. Tüm seviyelere açık örnek buluşma."}
];
export function dateLabel(date:string){return new Date(date+"T12:00:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}
export function status(e:HoiEvent){return e.remaining===0?"Kontenjan doldu":e.remaining<=3?`Son ${e.remaining} yer`:`${e.remaining} yer var`}
