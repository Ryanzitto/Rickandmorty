'use client'
import { useState, useEffect} from 'react'
import { useTheme } from "next-themes"

const ThemeSwithcer = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true)
  },[]);

  if (!mounted){
    return null;
  }
    return(
      <div className='w-fit h-fit rounded-sm cursor-pointer mb-4'>   
          {theme ==="dark" && <button className='tracking-wide border-2 border-white px-2' src='https://cdn-icons-png.flaticon.com/128/4442/4442236.png' onClick={() => setTheme('light')}>LIGHT</button>}
          {theme ==="light" &&  <button className='text-zinc-700 tracking-wider border-2 border-zinc-700 px-2' onClick={() => setTheme('dark')}>DARK</button>}   
      </div>
    )
}

export default ThemeSwithcer;