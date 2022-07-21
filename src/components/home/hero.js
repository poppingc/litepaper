import CustomButton from '../custom-button';

export default function HomeHero() {
  return (
    <>
      <img
        src='/images/img-hero-circles.svg'
        alt=''
        className='pointer-events-none absolute left-0 top-0 -z-10 w-full min-w-0 object-contain'
      />
      <img
        src='/images/img-hero-left.png'
        alt=''
        className='pointer-events-none absolute left-0 top-40 w-64 min-w-0 object-contain md:top-0 md:w-96 lg:w-[595px]'
      />
      <img
        src='/images/img-hero-right.png'
        alt=''
        className='pointer-events-none absolute right-0 top-40 w-64 min-w-0 object-contain md:top-0 md:w-96 lg:w-[600px]'
      />

      <div className='relative'>
        <div className='min-h-[600px] site-container lg:min-h-[800px]'>
          <div className='mx-auto md:max-w-3xl'>
            <h1 className='mt-24 text-center text-3xl font-black !leading-none text-white sm:text-4xl md:mt-36 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[75px]'>
              Rebuild Influence and Trust on Web3
            </h1>
            <p className='mt-6 text-center text-base font-normal text-[#D8D8D8] sm:text-lg lg:text-xl'>
              TARS is an automated Web3 protocol providing trustable on-chain
              solutions for investment relationships.
            </p>
          </div>

          <div className='mt-14 flex justify-center site-container'>
            <div className='flex w-full items-center justify-center space-x-8 md:space-x-24'>
              <a
                href='https://www.certik.com/projects/tars-protocol'
                className='block w-[215px] transition ease-in hover:-translate-y-2'
              >
                <img
                  src='/images/certikk.svg'
                  alt=''
                  className='w-full min-w-0 object-contain'
                />
              </a>
              <a
                href='https://github.com/peckshield/publications/tree/master/audit_reports/PeckShield-Audit-Report-TARS-Protocol-Claimer-v1.0.pdf'
                className='block w-[215px] transition ease-in hover:-translate-y-2'
              >
                <img
                  src='/images/peckshield_audited.svg'
                  alt=''
                  className='w-full min-w-0 object-contain'
                />
              </a>
            </div>
          </div>

          <a href='https://tars.pro/my/space'>
            <div className='mt-12 flex justify-center '>
              <CustomButton size='sm'>Start Now</CustomButton>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
