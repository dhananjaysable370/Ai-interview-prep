"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'


function Header() {

    const path = usePathname();

  return (
    <div className="flex items-center justify-between p-6 bg-secondary shadow-sm">
          <Image src={"/logo.svg"} width={30} height={40} alt="Logo" />
          <ul className="md:flex hidden gap-6">
              <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'&&'text-primary font-bold'}`}>Dashboard</li>
              <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions'&&'text-primary font-bold'}`}>Questions</li>
              <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade'&&'text-primary font-bold'}`}>Upgrade</li>
              <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how'&&'text-primary font-bold'}`}>How it works?</li>
          </ul>
          <UserButton/>
    </div>
  )
}

export default Header
