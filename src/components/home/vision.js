export default function HomeVision() {
  return (
    <div className='site-container'>
      <div className='mx-auto md:max-w-3xl'>
        <h4 className='text-center text-3xl font-extrabold text-white lg:text-4xl xl:text-5xl'>
          Our <span className='text-green-primary'>Vision</span>
        </h4>
      </div>

      <div className='relative mt-20 flex justify-center'>
        <img
          src='/litepaper/images/img-vision-left.svg'
          alt=''
          className='absolute -top-1/3 -left-36 hidden w-96 object-contain xs:block md:-top-3/4 md:-left-52 md:w-[600px] lg:-left-36'
        />
        <img
          src='/litepaper/images/img-vision-right.svg'
          alt=''
          className='absolute -top-1/3 -right-36 hidden w-96 object-contain xs:block md:-top-3/4 md:-right-52 md:w-[600px] lg:-right-36'
        />
        <div className='relative flex h-60 w-60 items-center text-center text-sm !leading-loose text-[#7BE9B5] md:h-80 md:w-80'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unlock
          the Potential of Web3’s Soul
          <img
            src='/litepaper/images/img-vision-center.svg'
            alt=''
            className='absolute left-1/2 top-1/2 w-[200%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain'
          />
        </div>
      </div>
    </div>
  );
}
