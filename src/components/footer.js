import Link from 'next/link';

import IconDiscord from '@/icons/icon-discord.svg';
import IconGithub from '@/icons/icon-github.svg';
import IconMail from '@/icons/icon-mail.svg';
import IconTelegram from '@/icons/icon-telegram.svg';
import IconTwitter from '@/icons/icon-twitter.svg';

const footerLinks = [
  {
    title: 'About',
    links: [
      {
        name: 'Docs',
        url: '/docs',
      },
      {
        name: 'Blog',
        url: '/blog',
      },
      {
        name: 'FAQ',
        url: '/faq',
      },

      {
        name: 'Authenticity Check',
        url: '/authentication-check',
      },

      {
        name: 'Brand Kit',
        url: '/brand-kit',
      },
    ],
  },
  {
    title: 'Explore',
    links: [
      {
        name: 'SAFTs',
        url: '/SAFTs',
      },
      {
        name: 'Spaces',
        url: '/Spaces',
      },
      {
        name: 'Claimer',
        url: '/Claimer',
      },
    ],
  },
  {
    title: 'Dashboard',
    links: [
      {
        name: 'My Space',
        url: '/my-space',
      },
      {
        name: 'My NFT',
        url: '/my-nft',
      },
      {
        name: 'My Joined',
        url: '/my-joined',
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className='sticky top-[100vh]'>
      <img
        loading='lazy'
        src='/images/footer-blur.png'
        alt=''
        className='pointer-events-none absolute bottom-0 left-0 blur-3xl'
      />

      <footer className='relative py-9 site-container'>
        <div className='w-full border-b border-neutral-600 pb-4'></div>

        <div className=''>
          <div className='relative z-10 -my-6 mt-3 grid grid-cols-2 gap-4 xs:grid-cols-4 md:mt-6 md:grid-cols-7'>
            <div className='col-span-2 xs:col-span-4 md:col-span-3'>
              <Link href='/' passHref>
                <a>
                  <picture>
                    <source srcSet='/images/logo.webp' type='image/webp' />
                    <img
                      src='/images/logo.png'
                      alt='TARS Protocol Logo'
                      width='310'
                      height='60'
                      className='h-16 w-auto min-w-0 object-contain object-left-top md:-mt-3'
                    />
                  </picture>
                </a>
              </Link>
              <p className='font-secondary mt-3 max-w-[460px] text-sm leading-relaxed text-neutral-400 md:max-w-[360px]'>
                Built on Non-Custodial, Secure and Audited Smart Contracts and
                born to rebuild influence and trust for crypto users on Web3.
              </p>
            </div>
            {footerLinks.map((column) => (
              <div className='my-6 md:my-0' key={column.title}>
                <h5 className='font-secondary text-base font-semibold text-white'>
                  {column.title}
                </h5>
                <ul className='mt-3'>
                  {column.links.map((link) => (
                    <li className='py-1' key={link.name}>
                      <a
                        href={link.url}
                        className='text-sm text-neutral-400 hover:underline'
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className='my-6 md:my-0 md:w-auto'>
              <h5 className='font-secondary text-base font-semibold text-white'>
                Contact
              </h5>
              <ul className='mt-3'>
                <li className='py-1'>
                  <a
                    href='/twitter'
                    className='flex items-center text-sm text-neutral-400 hover:underline'
                  >
                    <div className='w-8'>
                      <IconTwitter className='h-5 w-5 text-white' />
                    </div>
                    Twitter
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='/twitter'
                    className='flex items-center text-sm text-neutral-400 hover:underline'
                  >
                    <div className='w-8'>
                      <IconTelegram className='h-5 w-5 text-white' />
                    </div>
                    Telegram
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='/twitter'
                    className='flex items-center text-sm text-neutral-400 hover:underline'
                  >
                    <div className='w-8'>
                      <IconDiscord className='h-5 w-5 text-white' />
                    </div>
                    Discord
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='/twitter'
                    className='flex items-center text-sm text-neutral-400 hover:underline'
                  >
                    <div className='w-8'>
                      <IconGithub className='h-5 w-5 text-white' />
                    </div>
                    Github
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='/twitter'
                    className='flex items-center text-sm text-neutral-400 hover:underline'
                  >
                    <div className='w-8'>
                      <IconMail className='h-5 w-5 text-white' />
                    </div>
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='relative z-10 mt-10 flex justify-between'>
          <span className='text-xs text-neutral-500 sm:text-sm'>
            © 2022 TARS Protocol. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
