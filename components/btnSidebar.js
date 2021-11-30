import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function BtnSidebar({icon, title}) {
  return (
    <Link href="/">
      <div className="btn_sidebar">
        <div>
        <Image src={icon} height="25" width="30" alt="logo"/>
        </div>
        <p className="m-0 mx-4">{title}</p>
      </div>
    </Link>
  )
}
