// components/ClientLayout.jsx
'use client';

import { usePathname } from 'next/navigation';
import MainNavbar from './MainNavbar';

export default  function ClientLayout({ children }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith('/admin'); // don't show MainNavbar

  return (
    <>
      {!isAdmin && <MainNavbar />}
      {children}
    </>
  );
}
