import CustomButton from '../custom-button';

export default function HomeWhat() {
  return (
    <div className='relative'>
      <img
        src='/images/img-what-shape-right.svg'
        alt=''
        className='pointer-events-none absolute right-0 -bottom-48 w-40 object-contain md:bottom-auto md:top-1/2 md:w-auto'
      />

      <div className='site-container'>
        <div className='grid gap-12 md:grid-cols-12 lg:gap-16 xl:gap-24'>
          <div className='md:col-span-4'>
            <img
              src='/images/img-what-left.png'
              alt=''
              className='mx-auto w-1/2 min-w-0 object-contain md:w-full'
            />
          </div>
          <div id="meet-tars" className='md:col-span-8'>
            <h4 className='text-3xl font-extrabold leading-tight text-white lg:text-4xl xl:text-5xl'>
              Meet
              <span className='text-green-primary'> TARS </span>
            </h4>
            <p className='mt-4 text-sm text-[#D8D8D8] md:text-base'>
              Built on Non-Custodial, Secure and Audited Smart Contracts, TARS
              provides a simple, safe, and collaborative infrastructure for
              crypto users to rebuild influence and trust on Web3.
              <br />A variety of Web3 utilities built with TARS Protocol,
              including{' '}
              <span className='font-bold text-green-primary'>
                TARS Space, Smart SAFT, Claimer, TARS Dashboard,{' '}
              </span>
              etc., will allow crypto users to effortlessly engage in Web3 token
              economies and manage their portfolios in a trusted environment.
              Anyone can create their dedicated Web3 Brand through TARS Space
              and monetize their influence from it.
            </p>
            <a href='https://docs.tars.pro/'>
              <div className='mt-4 md:mt-6'>
                <CustomButton size='sm'>Get Started</CustomButton>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
