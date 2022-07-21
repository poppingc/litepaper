import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';

import 'keen-slider/keen-slider.min.css';

import clsxm from '@/lib/clsxm';

const roadmap = [
  {
    title: 'Q1 / 2022',
    items: [
      'Team Building',
      'Idea Analysis & Initiation',
      'Market Fit Research',
      'Development of Project Plan',
      'Design & Technical Specifications Initiation',
      'Legal Counsel',
      'UI/UX Design and Tech Architecture Documentation',
      'Build the First Version of Development Framework',
    ],
  },
  {
    title: 'Q2 / 2022',
    items: [
      'BSC-based Space Contract Test',
      'BSC-based Smart SAFT Contract Test',
      'BSC-based NFT Receipt Contract Test',
      'All Smart Contract Audit by Certik',
      'Release TARS Alpha Version',
      'Optimize the Interaction of Dashboard',
      'Release of the Whitepaper 1.0',
      'Release TARS Beta Version',
      'Migrate TARS to Official Network',
      'Participate in Hackathons and Apply for Grants',
    ],
  },
  {
    title: 'Q3 / 2022',
    items: [
      'Open Sorting Feature in Verified Space Page',
      'Pre-Launch of Claimer dApp',
      'Integrate ERC20 Tokens in Claimer',
      'Integrate LP Tokens in Claimer',
      'Official Launch of Claimer dApp with DPF',
      'Integrate EVM Chains in TARS',
      'Display Key Data in the Homepage',
      'Release of the Whitepaper 2.0',
      'Launch of TARS NFT Program',
      'NFT Farming/Staking Features',
    ],
  },
  {
    title: 'Q4 / 2022',
    items: [
      '$TARS Token Sale and Listing',
      'Integrate NFT in Claimer',
      'Launch of NFT Avatar System',
      'NFT Lottery Feature',
      'Launch of NFT Market',
      'Space Mining Program',
      'Complete Multiple Audits by the Third Parties',
      'Launch of Customization in TARS Space',
      'UI/UX Upgrade',
      'Release of the Whitepaper 3.0',
      'Pre-Launch of the Credit System',
    ],
  },
  {
    title: 'Q1 / 2023',
    items: [
      'Launch of Customization in Dashboard',
      'Launch of Scoring System based on ROI',
      'Add Templates for Verified Space Owner',
      'Setting the Primary ENS name replaces the links created on TARS',
      'Follow, Like and Comment in Space',
      'Chat-bot APIs for Discord and Telegram',
      'Launch of TARS NTT (short for Non-TradableToken) System',
      'Support non-EVM chains such as Solana, NEAR',
      'Add More Wallets',
      'Official Launch of the Credit System',
      'Onboard TARS Credit Data API',
    ],
  },
  {
    title: 'Q2 / 2023',
    items: [
      'Improvement of DAO Governance',
      'New Web3 Program Integrations',
      'TARS Eco Marathon Grant Campaigns ',
      'Lending and Insurance in the Credit System',
      'Re-Audit to All Smart Contracts',
      'On-Board New Blockchain Ecosystems',
      'Integrate Cross Chains',
      'Buyback & Burn Plan',
      'Re-Design of Featured Pages for TARS',
    ],
  },
];

export default function Roadmap() {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      loop: false,
      slides: {
        perView: 1,
        spacing: 10,
      },
      slideChanged(s) {
        setActiveSlideIndex(() => s.track.details.abs);
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div className='py-5 site-container md:py-5' ref={refCallback}>
      <div className='mx-auto md:max-w-4xl'>
        <h4 className='mb-10 text-center text-3xl font-extrabold text-white lg:text-4xl xl:text-5xl '>
          <span className='text-green-primary'>Roadmap</span>
        </h4>
      </div>
      <div className='flex items-center'>
        <button
          onClick={(e) => e.stopPropagation() || slider.current.prev()}
          disabled={activeSlideIndex === 0}
          className={clsxm(
            'flex h-8 w-8 items-center justify-center rounded-full border border-white text-white md:h-12 md:w-12',
            {
              'opacity-50': activeSlideIndex === 0,
            }
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 md:h-6 md:w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
        </button>
        <div className='mx-6 w-full flex-1 border-t-2 border-dashed border-[#49FF45] md:mx-16'></div>
        <h2 className='text-center text-lg font-semibold md:text-2xl'>
          <span className='text-with-gradient bg-text-roadmap-title'>
            {roadmap[activeSlideIndex].title}
          </span>
        </h2>
        <div className='mx-6 w-full flex-1 border-t-2 border-dashed border-[#49FF45] md:mx-16'></div>
        <button
          onClick={(e) => e.stopPropagation() || slider.current.next()}
          disabled={activeSlideIndex === roadmap.length - 1}
          className={clsxm(
            'flex h-8 w-8 items-center justify-center rounded-full border border-white text-white md:h-12 md:w-12',
            {
              'opacity-50': activeSlideIndex === roadmap.length - 1,
            }
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 md:h-6 md:w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </button>
      </div>

      <div className='mt-8 md:mt-12'>
        <div className='keen-slider -mx-2 -my-3 md:-mx-4 md:-my-5'>
          {roadmap.map((q) => (
            <div
              className='keen-slider__slide flex cursor-grab flex-wrap'
              key={q.title}
            >
              {q.items.map((item) => (
                <div
                  className='flex items-center gap-2 px-2 py-2 md:px-3 '
                  key={item}
                >
                  <div className='box-border h-4 w-4 flex-shrink-0 rounded-full border-[5px] border-[#0A1907] bg-[#5FFF45] [box-shadow:0px_0px_6px_#55FF79]'></div>
                  <span className='text-sm text-[#9DB6A4] md:text-lg'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
