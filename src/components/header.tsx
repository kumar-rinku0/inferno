import { RedirectToUserProfile, UserButton } from '@clerk/nextjs'
import { Apple } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6 justify-between'>
       <Link
        href="/"
        className="flex items-center justify-center gap-2 text-lg font-semibold md:text-base"
        prefetch={false}
      >
        <Apple size={20} />
        <span>InferNo</span>
      </Link>
      <div >
      <UserButton />
      </div>
    </header>
  )
}

export default Header