import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import IconChevronDown from '@/icons/icon-chevron-down.svg';
import IconDisconnect from '@/icons/icon-disconnect.svg';
import IconWallet from '@/icons/icon-wallet.svg';

import CustomButton from './custom-button';
import ScrambledText from './scrambled-text';

const navLinks = [
  {
    name: 'Home',
    href: 'http://tars.pro/',
    isScroll: false,
  },
  {
    name: 'Meet TARS',
    href: '#meet-tars',
    isScroll: true,
  },
  {
    name: 'Pain Points in Crypto',
    href: '#pain-points-in-crypto',
    isScroll: true,
  },
  {
    name: 'Our Vision',
    href: '#our-vision',
    isScroll: true,
  },
  {
    name: 'TARS Solutions',
    href: '#tars-solutions',
    isScroll: true,
  },
  {
    name: 'Tokenomics',
    href: '#tokenomics',
    isScroll: true,
    
  },
  {
    name: 'Team',
    href: '#team',
    isScroll: true,
  },
  {
    name: 'Roadmap',
    href: '#roadmap',
    isScroll: true,
  },
];

function HeaderDropdown() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      {({ open }) => (
        <>
          <Menu.Button as='div'>
           
          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='border-green-primary absolute right-0 z-40 mt-2 w-full origin-top-right divide-y divide-white/20 rounded-lg border bg-[#262626] px-3 py-1 xs:w-48 xs:px-5'>
              <Menu.Item>
                <Link href='/wallet' passHref>
                  <a className='hover:text-green-primary block py-2 text-xs font-medium text-white xs:py-4 xs:text-sm'>
                    Wallet
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href='/recent' passHref>
                  <a className='hover:text-green-primary block py-2 text-xs font-medium text-white xs:py-4 xs:text-sm'>
                    Recent Transactions
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href='/disconnect' passHref>
                  <a className='hover:text-green-primary flex items-center justify-between py-2 text-xs font-medium text-white xs:py-4 xs:text-sm'>
                    Disconnect{' '}
                    <IconDisconnect className='h-5 w-5 xs:h-7 xs:w-7' />
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default function Header() {
  const router = useRouter();

  return (
    <header className='mt-6 site-container md:mt-8 lg:mt-10'>
      <div className='flex items-center justify-between'>
        <div className='mr-4 flex shrink-0 items-center'>
          <Link href='http://tars.pro/' passHref>
            <a>
              <picture>
                <source srcSet='/images/logo.webp' type='image/webp' />
                <img
                  src='/images/logo.png'
                  alt='TARS Protocol Logo'
                  width='310'
                  height='60'
                  className='h-10 w-auto min-w-0 object-contain object-left md:h-12 lg:h-16'
                />
              </picture>
            </a>
          </Link>
        </div>
        {/* desktop nav start */}
        <div className='hidden items-center md:flex'>
          <nav className='mr-2'>
            <ul className='flex items-center space-x-7'>
              {navLinks.map(({ name, href, isScroll, badge, tick }) => (
                <li key={name}>
                  {isScroll ? (
                    <a
                      href={href}
                      className='font-secondary hover:text-green-secondary relative text-[13px] text-white transition duration-300'
                    >
                      <ScrambledText>{name}</ScrambledText>
                      {badge && (
                        <span className='absolute right-0 -top-2.5 block translate-x-3/4 rounded-sm bg-yellow-400 px-1 py-px text-[10px] font-medium tracking-tight text-gray-900'>
                          {badge}
                        </span>
                      )}
                      {tick && (
                        <img
                          src='/images/icon-tick.png'
                          alt=''
                          className='absolute -right-3 -top-2 h-4 w-4'
                        />
                      )}
                    </a>
                  ) : (
                    <Link href={href} passHref>
                      <a
                        className={
                          router.pathname == href
                            ? 'font-secondary text-green-secondary relative text-[13px] transition duration-300'
                            : 'font-secondary hover:text-green-secondary relative text-[13px] text-white transition duration-300'
                        }
                      >
                        <ScrambledText>{name}</ScrambledText>
                        {badge && (
                          <span className='absolute right-0 -top-2.5 block translate-x-3/4 rounded-sm bg-yellow-400 px-1 py-px text-[10px] font-medium tracking-tight text-gray-900'>
                            {badge}
                          </span>
                        )}
                        {tick && (
                          <img
                            src='/images/icon-tick.png'
                            alt=''
                            className='absolute -right-3 -top-2 h-4 w-4'
                          />
                        )}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <HeaderDropdown />
          </div>
        </div>
        {/* desktop nav end */}

        {/* mobile nav start */}
        <div className='flex items-center space-x-2 md:hidden'>
          <Menu as='div' className='relative z-40 inline-block text-left'>
            {({ open }) => (
              <>
                <Menu.Button className='text-white'>
                  {open ? (
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 256 256'
                    >
                      <path d='M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z'></path>
                    </svg>
                  ) : (
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 256 256'
                    >
                      <path d='M216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z'></path>
                      <path d='M40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z'></path>
                      <path d='M216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z'></path>
                    </svg>
                  )}
                </Menu.Button>
                <Transition
                  enter='transition duration-100 ease-out'
                  enterFrom='transform scale-95 opacity-0'
                  enterTo='transform scale-100 opacity-100'
                  leave='transition duration-75 ease-out'
                  leaveFrom='transform scale-100 opacity-100'
                  leaveTo='transform scale-95 opacity-0'
                >
                  <Menu.Items className='absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-gray-700 p-4 xs:w-40 sm:w-56'>
                    <nav>
                      <ul className='space-y-3'>
                        {navLinks.map(
                          ({ name, href, isScroll, badge, tick }) => (
                            <li key={name}>
                              {isScroll ? (
                                <a
                                  href={href}
                                  className='font-secondary hover:text-green-secondary relative text-[13px] text-white transition duration-300'
                                >
                                  {name}
                                  {badge && (
                                    <span className='absolute right-0 -top-2.5 block translate-x-3/4 rounded-sm bg-yellow-400 px-1 py-px text-[10px] font-medium tracking-tight text-gray-900'>
                                      {badge}
                                    </span>
                                  )}
                                  {tick && (
                                    <img
                                      src='/images/icon-tick.png'
                                      alt=''
                                      className='absolute -right-3 -top-2 h-4 w-4'
                                    />
                                  )}
                                </a>
                              ) : (
                                <Link href={href} passHref>
                                  <a
                                    className={
                                      router.pathname == href
                                        ? 'font-secondary text-green-secondary relative text-[13px] transition duration-300'
                                        : 'font-secondary hover:text-green-secondary relative text-[13px] text-white transition duration-300'
                                    }
                                  >
                                    {name}
                                    {badge && (
                                      <span className='absolute right-0 -top-2.5 block translate-x-3/4 rounded-sm bg-yellow-400 px-1 py-px text-[10px] font-medium tracking-tight text-gray-900'>
                                        {badge}
                                      </span>
                                    )}
                                    {tick && (
                                      <img
                                        src='/images/icon-tick.png'
                                        alt=''
                                        className='absolute -right-3 -top-2 h-4 w-4'
                                      />
                                    )}
                                  </a>
                                </Link>
                              )}
                            </li>
                          )
                        )}
                      </ul>
                    </nav>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          <div className='hidden xs:block'>
            <HeaderDropdown />
          </div>
        </div>
        {/* mobile nav end */}
      </div>
    </header>
  );
}
