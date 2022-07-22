import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

const items = [
  {
    title: 'Token vesting schedule inconsistency',
    img: '/litepaper/images/img-why-tars-smartsaft.png',
    description:
      'The project parties adjust the token vesting schedules without paying any price, which seriously damages the interests of investors.',
  },
  {
    title: 'Lack of protection for crypto investors',
    img: '/litepaper/images/img-why-tars.png',
    description:
      'Scams happen when signing SAFTs without the safeguards of smart contracts. It’s difficult for investors to protect themselves when the project party does not implement the corresponding terms in SAFT paper.',
  },
  {
    title: 'Lack of decentralized platforms for OTC/Block Trading',
    img: '/litepaper/images/img-why-tars-launchpad.png',
    description:
      'There’re IDO and DEX for the primary market and the secondary market, but block trading and over-the-counter (OTC) are in urgent need of a paradigm shift due to the risk of centralization.',
  },
  {
    title: 'Hard to manage the portfolios and vested tokens',
    img: '/litepaper/images/img-why-tars-claimer.png',
    description:
      'There is currently a lack of one-stop platform for crypto investors to track and manage their portfolios, vested tokens, and statistical ROI, etc.',
  },
  {
    title: 'On-chain programs and interaction complexity',
    img: '/litepaper/images/img-why-tars-repair.png',
    description:
      'There’s a lack of a smooth and trustable token claim/vesting platform for investors/project parties due to the complexity of on-chain program and interaction.',
  },
  {
    title: 'Hard to monetize the influence',
    img: '/litepaper/images/img-why-tars-coding.png',
    description:
      'In web3, the way influence is monetized requires a paradigm shift, which is, crypto influencers/VCs/KOLs/active players can take profits while building influence.',
  },
];

export default function HomeWhy() {
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <div className='relative site-container'>
      <div id='pain-points-in-crypto' className='mx-auto md:max-w-3xl'>
        <h4 className='text-center text-3xl font-extrabold text-white lg:text-4xl xl:text-5xl'>
          Pain Points in Crypto <span className='text-green-primary'></span>
        </h4>
      </div>

      <div className='mt-10 grid items-start md:mt-16 md:grid-cols-[3fr_2fr]'>
        <div className='relative z-10 grid gap-3'>
          {items.map((item, index) => (
            <Disclosure key={index} defaultOpen={index === 0}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    onClick={() =>
                      setActiveItem(activeItem === index ? -1 : index)
                    }
                    className='flex w-full items-center justify-between rounded-lg border border-[#565656] bg-[rgba(64,71,68,.56)] py-3 px-4 text-left font-bold text-white md:text-lg'
                  >
                    <span>{item.title}</span>
                    {/* prettier-ignore */}
                    <svg className={open ? 'rotate-180' : 'rotate-0'} width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="m34.887 16.098-10.082 8.178-10.081-8.178" stroke="#55FF79" strokeWidth="1.892" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Disclosure.Button>
                  {activeItem === index && (
                    <Disclosure.Panel
                      static
                      className='px-4 text-sm !leading-loose text-white'
                    >
                      {item.description}
                    </Disclosure.Panel>
                  )}
                </>
              )}
            </Disclosure>
          ))}
        </div>

        <div className='grid'>
          <AnimatePresence>
            {items.map(
              (item, index) =>
                activeItem === index && (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={index}
                    src={item.img}
                    alt=''
                    className='block w-full min-w-0 object-contain [grid-area:1/1]'
                  />
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
