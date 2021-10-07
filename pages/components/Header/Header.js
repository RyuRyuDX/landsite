import React from "react"
import Image from "next/image"
// @notus-pro/react
// import HeaderImageTitleCenter from "@notus-pro/react/HeaderImageTitleCenter"


export default function Header() {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <Image 
          src="/land_logo.jpg" width='1000px' height={900} 
          />
      </div>
    </>
  )
}