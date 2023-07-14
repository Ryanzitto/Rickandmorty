'use client'
import { useState, useEffect} from 'react'
import { useTheme } from "next-themes"

const ThemeSwithcer = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme("light");

  useEffect(() => {
    setMounted(true)
  },[]);

  if (!mounted){
    return null;
  }
    return(
      <div className='w-fit h-fit rounded-sm cursor-pointer mb-4'>   
         <button className='tracking-wide border-2 border-white px-2' onClick={() => setTheme('light')}>LIGHT</button>
         <button className='text-zinc-700 tracking-wider border-2 border-zinc-700 px-2' onClick={() => setTheme('dark')}>DARK</button>   
      </div>
    )
}

export default ThemeSwithcer;