import clsxm from '@/lib/clsxm';

const items = [
  {
    title: 'Governance',
    description:
      'TARS holders will be able to participate in governance votes that are proposed by the management team and make decisions typically on issues regarding ecosystem development, such as Ecosystem/ Treasury allocations, governance rules, partnerships, buyback and burn percentage, and beyond.',
    img: '/litepaper/images/governance.png',
  },
  {
    title: 'Value Accrual',
    description:
      'A portion of the platform fees collected by TARS Protocol is used to buy back and burn TARS tokens, including Space creation/verification fees, SAFT creation/cancel fees, NFT Receipt minting fees, Claimer creation/cancel fees, custom interface charges, fines from DPF, etc',
    img: '/litepaper/images/value-accrual.png',
  },
  {
    title: 'Access',
    description:
      'TARS provides access to certain parts of the TARS ecosystem that are otherwise unavailable, such as exclusive farm pools, minting of NTT (short for Non-Tradable Token), avatars, events, and services. Based on the holdings of TARS tokens, users enjoy tiered access.',
    img: '/litepaper/images/access.png',
  },
  {
    title: 'Payment',
    description:
      'TARS will be accepted as universal currency in paying for application fees. The adoption of certain services in the ecosystem will be priced in TARS as the unit. Currently, all fees are waived during the early stages of application adoption, including Space, Smart SAFT, and Claimer, etc.',
    img: '/litepaper/images/payment.png',
  },
  {
    title: 'Incentive',
    description:
      'TARS will act as the main incentive for users participating in the TARS ecosystem in positive ways, and used to reward users for contributing to the TARS ecosystem while incentivizing them to hold TARS tokens so they can claim additional rewards.',
    img: '/litepaper/images/incentive.png',
  },
];

export default function HomeTokenomics() {
  return (
    <div className='relative z-10 site-container'>
      <div className='mx-auto md:max-w-3xl'>
        <h4 className='text-center text-3xl font-extrabold text-white lg:text-4xl xl:text-5xl'>
          <span className='text-green-primary'>TARS</span> Tokenomics
        </h4>
      </div>

      <div className='mt-10 flex flex-wrap justify-center gap-x-6 gap-y-12 md:mt-14'>
        {items.map((item, index) => (
          <div
            className={clsxm('grid max-w-[270px] text-center', {
              'lg:mt-12': index === 1,
            })}
            key={index}
          >
            <img
              src={item.img}
              alt=''
              className='mx-auto h-[120px] w-[120px] object-contain transition ease-in hover:-translate-y-2'
            />
            <h5 className='mt-4 mb-2 text-xl font-extrabold text-white'>
              {item.title}
            </h5>
            <p className='mt-1.5 text-[13px] !leading-loose tracking-wider text-white'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
