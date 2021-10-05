import React from "react"
import Image from "next/image"
// @notus-pro/react
// import HeaderImageTitleCenter from "@notus-pro/react/HeaderImageTitleCenter"


export default function Header() {
  return (
    <>
      <div className="flex justify-center mb-20">
        <Image 
          src="/land_logo.jpg" width={800} height={900} 
          />
      </div>
    </>
  )
}