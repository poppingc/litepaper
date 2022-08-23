import CustomButton from '../custom-button';

export default function HomeWhat() {
  return (
    <div className='relative'>
      <img
        src='/litepaper/images/img-what-shape-right.svg'
        alt=''
        className='pointer-events-none absolute right-0 -bottom-48 w-40 object-contain md:bottom-auto md:top-1/2 md:w-auto'
      />

      <div className='site-container'>
        <div className='grid gap-12 md:grid-cols-12 lg:gap-16 xl:gap-24'>
          <div className='md:col-span-4'>
            <img
              src='/litepaper/images/img-what-left.png'
              alt=''
              className='mx-auto w-1/2 min-w-0 object-contain md:w-full'
            />
          </div>
          <div id='meet-tars' className='md:col-span-8'>
            <h4 className='text-3xl font-extrabold leading-tight text-white lg:text-4xl xl:text-5xl'>
              Meet
              <span className='text-green-primary'> TARS </span>
            </h4>
            <p className='mt-4 text-sm text-[#D8D8D8] md:text-base'>
              TARS is a Web3 aggregation protocol and aims to provide a
              trustable, scalable, composable, and collaborative infrastructure
              to unlock the potential of Web3’s Soul in Decentralized Society.
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
