export default function HomeReceiveUpdate() {
  return (
    <div className='relative py-40 sm:py-52 md:py-64 lg:py-72 xl:py-96'>
      <img
        src='/litepaper/images/receive-update-circles.svg'
        alt=''
        className='pointer-events-auto absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2'
      />

      <div className='site-container'>
        <div className='mx-auto md:max-w-3xl'>
          <h4 className='text-center text-2xl font-black text-white md:text-3xl lg:text-4xl xl:text-5xl'>
            Get The Latest Updates!{' '}
          </h4>
          <p className='mt-4 text-center text-sm text-white md:text-base'>
            Subscribe to our newsletters and bi-weekly roundup, find out what’s
            happening on TARS.
          </p>

          <form className='mt-4 flex justify-center'>
            <div className='relative'>
              <a href='http://newsletter.tars.pro/?via=twitter-profile'>
                <button
                  type='button'
                  className='gradient-input-border h-[52px] w-[214px] w-72 rounded-md px-5 text-sm text-green-primary transition ease-in placeholder:font-light placeholder:text-current hover:-translate-y-2 focus:!border-transparent focus:!ring-0 focus:placeholder:text-transparent'
                >
                  {/* prettier-ignore */}
                  Subscribe
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
