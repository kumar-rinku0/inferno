import { RedirectToUserProfile, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { FaFireFlameCurved } from 'react-icons/fa6'

const Header = () => {
  return (
    <header className='flex items-center h-16 px-4 border-b border-b-neutral-200 shrink-0 md:px-6 justify-between'>
       <Link
        href="/"
        className="flex items-center justify-center gap-2 text-lg font-semibold md:text-base"
        prefetch={false}
      >
        <FaFireFlameCurved size={24} className="font-bold text-sky-300" />
        <span className="font-bold text-lg text-primary">InferNo</span>
      </Link>
      <div >
      <UserButton />
      </div>
    </header>
  )
}

export default Header