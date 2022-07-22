import ChartArea from '../chart-area';
import ChartDistribution from '../chart-distribution';

export default function Charts() {
  return (
    <div className='site-container'>
      <div className='mx-auto max-w-3xl'>
        <h4 className='text-center text-5xl font-extrabold text-white'>
          <span className='text-green-primary'>Token</span> Distribution
        </h4>
      </div>

      <div className='my-20 grid gap-24'>
        <div className='relative sm:p-6'>
          <img
            src='/litepaper/images/chart-border.svg'
            alt=''
            className='absolute left-0 top-0 hidden h-full w-full object-contain object-top sm:block'
          />
          <img
            src='/litepaper/images/chart-blur.png'
            alt=''
            className='absolute left-0 -bottom-24 hidden h-full w-full object-contain sm:block'
          />
          <ChartDistribution />
        </div>
        <div className='relative sm:py-6 sm:px-12'>
          <img
            src='/litepaper/images/chart-border.svg'
            alt=''
            className='absolute left-0 top-0 hidden h-full w-full object-contain object-top sm:block md:object-cover lg:object-contain'
          />
          <img
            src='/litepaper/images/chart-blur.png'
            alt=''
            className='absolute left-0 -bottom-24 hidden h-full w-full object-contain sm:block'
          />
          <ChartArea />
        </div>
      </div>
    </div>
  );
}
