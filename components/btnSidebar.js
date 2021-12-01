import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function BtnSidebar({icon, title}) {
  return (
    <Link href="/">
      <div className="btn_sidebar">
        <div className="bg-white d-flex align-items-center justify-content-center p-0 mx-1" style={{ borderRadius: "10px", height: "39px", width: "55px"}}>
        <Image src={icon} height="25" width="30" alt="logo"/>
        </div>
        <p className="m-0 mx-4">{title}</p>
      </div>
    </Link>
  )
}