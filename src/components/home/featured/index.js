import { data } from './data';

console.log('data.length', data.length);

export default function HomeFeatured() {
  const pyramidScheme = [
    {
      start: 0,
      end: 6,
    },
    {
      start: 6,
      end: 11,
    },
    {
      start: 11,
      end: 15,
    },
  ];

  return (
    <div className='site-container'>
      <div id='featured' className='mx-auto md:max-w-4xl'>
        <h4 className='text-center text-3xl font-extrabold text-white lg:text-4xl xl:text-5xl '>
          As <span className='text-green-primary'>Featured In</span>
        </h4>
      </div>

      <div className='mt-10'>
        {/* desktop start */}
        <div className='hidden md:block'>
          {pyramidScheme.map((row, index) => (
            <div key={index} className='contents md:flex md:justify-center'>
              {data.slice(row.start, row.end).map((item, index) => (
                <div key={index} className='px-6 py-3 filter transition ease-in hover:-translate-y-2' >
                  <a href={item.link} target='_blank' rel='noreferrer'>
                    <img
                      src={item.logo}
                      alt={item.title}
                     
                      className='h-24 w-24 object-contain text-sm text-white lg:h-32 lg:w-32'
                    />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* desktop end */}

        {/* mobile start */}
        <div className='flex flex-wrap md:hidden'>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex w-1/2 items-center justify-center px-6 py-3'
            >
              <a href={item.link} target='_blank' rel='noreferrer'>
                <img
                  src={item.logo}
                  alt={item.title}
                  className='h-24 w-24 object-contain text-sm text-white sm:h-32 sm:w-32'
                />
              </a>
            </div>
          ))}
        </div>
        {/* mobile end */}
      </div>
    </div>
  );
}
