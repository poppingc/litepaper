import { useEffect, useState } from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => setTimeout(() => setLoading(false), 1600), []);
  if (loading) {
    return (
      <div className='flex h-[100vh] items-center justify-center'>
        <img src='/litepaper/images/tars-protocol-gif.gif' alt='' />
      </div>
    );
  }
  return (
    <>
      <Header />
      <main className='overflow-hidden'>{children}</main>
      <Footer />
    </>
  );
}
