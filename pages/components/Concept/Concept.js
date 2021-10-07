
import React from "react"
import Link from "next/link"


export default function Concept() {
  return(
    <>
      <div className="m-7">
        <div className="pb-10 border shadow-lg">
          <div className="px-6 flex flex-col items-center">
            <div className="text-4xl font-thin border border-black px-10 py-1 mt-10 mb-20">
              Concept
            </div>
              
              <p className="font-bold text-xl">
                沢山の方に出会える【場所】を… <br/><br/>

                LAND （ランド）＝ 場所<br/><br/>

                幅広い世代の方に愛される美容室
              </p>

              <div className="text-sm underline font-thin border-black px-10 py-1 pt-20 mb-4">
                <Link href="components/Concept/ConceptDetail" as="/concept">
                  more
                </Link>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}