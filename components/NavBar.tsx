import { IBM_Plex_Mono } from 'next/font/google';
const poppins = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: '500'
});

export default function NavBar() {
  return (
  
    <div className = "p-3 bg-gray-500 text-white flex items-center justify-center text-2xl" >
         <a href="/" className={poppins.className} >
       ✨ Speechify ✨
        </a>
    </div>
 
  )
}
