import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='overflow-hidden'>{children}</main>
      <Footer />
    </>
  );
}
