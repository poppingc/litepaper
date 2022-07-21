export default function HomeHeroBottom() {
  return (
    <div className='-mt-10 flex justify-center site-container'>
      <div className='inline-grid w-full items-start justify-center justify-items-center gap-x-6 gap-y-6 md:grid-cols-6 md:gap-y-16'>
        <a
          href='https://mirror.xyz/tarsprotocol.eth'
          className='block w-[214px] transition ease-in hover:-translate-y-2 md:col-span-2'
        >
          <img
            src='/images/mirror_logo.svg'
            alt=''
            className='w-full min-w-0 object-contain'
          />
          <div className='mt-2 text-xs font-semibold text-white sm:text-sm md:text-base'>
            Follow TARS on Mirror
          </div>
        </a>

        <a
          href='https://www.youtube.com/c/TARSProtocol'
          className='block w-[214px] transition ease-in hover:-translate-y-2 md:col-span-2'
        >
          <img
            src='/images/hero-bottom-img-2.svg'
            alt=''
            className='w-full min-w-0 object-contain'
          />
          <div className='mt-2 text-xs font-semibold text-white sm:text-sm md:text-base'>
            Learn the Tutorial Videos
          </div>
        </a>

        <a
          href='https://docs.tars.pro/overview'
          className='block w-[214px] transition ease-in hover:-translate-y-2 md:col-span-2'
        >
          <img
            src='/images/hero-bottom-img-3.png'
            alt=''
            className='w-full min-w-0 object-contain'
          />

          <div className='mt-2 text-xs font-semibold text-white sm:text-sm md:text-base'>
            TARS Protocol Docs
          </div>
        </a>
      </div>
    </div>
  );
}
