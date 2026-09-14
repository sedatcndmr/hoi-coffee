export function Vines(){
  return (
    <svg className="vines" viewBox="0 0 1440 290" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.25">
        <path d="M120 0c-15 44 30 65 8 117s17 76 4 128M208 0c15 34-13 49-3 83s-9 60 0 92M1260 0c24 50-15 70 5 110s-15 76 2 124M1350 0c-5 45 20 56 3 97"/>
        {[40, 95, 155, 210].map((y, i) => (
          <g key={y}>
            {/* Sol ana dal yaprakları */}
            <path d={`M130 ${y}q-39-28-35 0q12 18 35 0`}/>
            <path d={`M130 ${y+24}q38-27 30-1q-10 18-30 1`}/>
            {/* Sağ ana dal yaprakları */}
            <path d={`M1266 ${y}q-35-27-30 0q10 18 30 0`}/>
            <path d={`M1266 ${y+22}q37-26 30 0q-12 16-30 0`}/>
            {/* İkinci dal yaprakları — sadece çift indexlerde */}
            {i % 2 === 0 && (
              <>
                <path d={`M206 ${y}q-27-24-26-1q11 15 26 1`}/>
                <path d={`M1353 ${y}q28-24 26 0q-11 16-26 0`}/>
              </>
            )}
          </g>
        ))}
      </g>
    </svg>
  )
}
export function Art({kind="cup"}:{kind?:string}){return <svg viewBox="0 0 260 190" className="line-art" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{kind==="plant"?<><path d="M98 123h66l-10 45h-46zM130 123V55M130 94c-42 0-43-34-43-34s41-1 43 34ZM131 76c42 0 40-36 40-36s-39 1-40 36ZM131 117c37-3 45-26 45-26s-39-9-45 26Z"/></>:kind==="book"?<><path d="M130 68c-28-20-58-15-74-7v97c28-13 50-7 74 8 23-15 49-21 75-8V61c-26-12-50-12-75 7v98M69 82c17-4 31-1 45 6M69 97c17-4 31-1 45 6M145 89c17-9 33-11 46-7M145 105c17-9 33-11 46-7"/></>:<><ellipse cx="122" cy="163" rx="79" ry="9"/><path d="M62 86h119l-9 49c-7 32-90 32-99 0ZM181 94c47-16 44 50-8 43M77 87c9-6 73-9 88 0M104 62c-17-23 19-27 2-48M132 62c-17-23 19-27 2-48M157 62c-17-19 15-24 5-39"/></>}</g></svg>}
