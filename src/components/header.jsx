import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';
const Header = () => {
     return (
    <>
      <nav className="flex items-center justify-between py-4">
        <Link to="/">
          <img src="/logo.jpg" className="h-20" alt="Opportix Logo" />
        </Link>
       {/* <Button variant="outline">Login</Button> */}
       
         <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
</nav>
</>
  )
}

export default Header;
