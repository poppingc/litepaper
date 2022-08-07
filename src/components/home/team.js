const teamMembers = [
  {
    name: 'Paul Xu',
    title: 'Co-Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/paul-xu-696b55215',
    twitter: 'https://twitter.com/Paulxuxu',
    telegram: 'https://t.me/Paul_Xuu',
    description:
      'Paul is from Cornell University SC Johnson College of Business and a core member of the Cornell blockchain club. Being the co-founder of TARS Protocol, he is committed to creating great products with web3 technology to empower the industry. His ambition and leadership help him thrive as the CEO of TARS.',
    photo: '/litepaper/images//team/paul-xu.webp',
  },
  {
    name: 'Joesph Chueng',
    title: 'Co-Founder & CSO',
    linkedin: 'https://www.linkedin.com/in/m-joesph-cheung-223691103',
    telegram: 'https://t.me/bigcatfi',
    description:
      'Joesph is an entrepreneur, crypto investor, and start-up incubator. He has been engaging in research about blockchain protocols and DeFi since 2017 and has seasoned experience in scaling startups from 0 to 1. Joesph is responsible for business strategy and he leads the business team of TARS.',
    twitter: 'https://twitter.com/MR55KAI',
    photo: '/litepaper/images//team/joesph-cheung.webp',
  },
  {
    name: 'William Sarbinowski',
    title: 'Head of Business Development',
    linkedin: 'https://www.linkedin.com/in/william-sarbinowski-2447351ab',
    telegram: '',
    description:
      'William is from Cornell University and Cornell Blockchain Club. His field of study is mathematics and computer science. Prior to joining TARS, he gained experience by working on business development at both biotech and financial advising companies. He is leading the business development at TARS.',
    twitter: 'https://twitter.com/WillSarbs',
    photo: '/litepaper/images//team/William-Sarbinowski.webp',
  },
  {
    name: 'Jerry Tang',
    title: 'Tech Lead',
    linkedin: 'https://www.linkedin.com/in/jerry-tang-b37026162',
    telegram: '',
    description:
      'Previously a Barry M. Goldwater Scholar, Jerry is from Stanford University, specializing in computer science and Mathematics. He dived into the web3 world from his in-depth research on DeFi and blockchain protocols. His expertise and passion for blockchain technology allow him to thrive in this position.',
    twitter: '',
    photo: '/litepaper/images//team/jerry-tang.webp',
  },
  {
    name: 'Chiev Wan',
    title: 'Product Manager',
    linkedin: 'https://www.linkedin.com/in/chiver-wan',
    telegram: '',
    description:
      'Chiev is from Carnegie Mellon University, and his field of study is Electrical and Computer Engineering. Before he got interested in blockchain, Chiev used to work as the software engineer for tech firms, such as Bytedance. He has abundant experience developing smart contracts.',
    twitter: '',
    photo: '/litepaper/images//team/Chiev-Wan.webp',
  },
  {
    name: 'Honey Solanki',
    title: 'Operations Manager',
    description:
      'Honey has started her journey in the crypto, DeFi, and blockchain industry since 2020. She is involved in several DeFi projects for their growth in community development, operations, and marketing. Honey is the Operations Manager at TARS.',
    linkedin: 'https://www.linkedin.com/in/honey-solanki-4264391a0/',
    twitter: 'https://twitter.com/SolankiHoney2',
    photo: '/litepaper/images//team/honey-solanki.webp',
  },
  {
    name: 'Betül Şevik',
    title: 'Lead Designer',
    description:
      'Betül is the user experience and interface designer with a focus on creating unique brands and identities. She has expertise in Web3 and NFT projects. Betül is the lead designer at TARS.',
    linkedin: 'https://www.linkedin.com/in/betulsevik/',
    photo: '/litepaper/images//team/betul-sevik.webp',
  },
];

export default function HomeTeam() {
  return (
    <div className='site-container'>
      <div id='team' className='mx-auto md:max-w-4xl'>
        <h4 className='text-center text-3xl font-extrabold text-white lg:text-4xl xl:text-5xl '>
          Team <span className='text-green-primary'>Members</span>
        </h4>
      </div>

      <div className='mt-16 grid justify-center gap-12 text-center sm:grid-cols-3 sm:text-left md:mt-20 md:grid-cols-4 '>
        {teamMembers.map((item, index) => (
          <div
            className='flex w-full max-w-[280px] flex-col items-center sm:block'
            key={index}
          >
            {item.photo && (
              <img
                src={item.photo}
                alt=''
                className='mb-5 h-[150px] w-[150px] shrink-0 rounded-full object-contain transition ease-in hover:-translate-y-2'
              />
            )}
            <h4 className='whitespace-nowrap text-lg font-bold text-white md:text-xl lg:text-2xl '>
              {item.name}
            </h4>
            <div className='mt-4 flex items-center space-x-2 '>
              <a href={item.telegram}>
                {item.telegram && (
                  <img
                    src='/litepaper/icons/icon-team-telegram.svg'
                    alt=''
                    className='h-[28px] w-[28px] shrink-0 object-contain'
                  />
                )}
              </a>
              <a href={item.linkedin}>
                <img
                  src='/litepaper/icons/icon-team-linkedin.svg'
                  alt=''
                  className='h-[28px] w-[28px] shrink-0 object-contain'
                />
              </a>
              <a href={item.twitter}>
                {item.twitter && (
                  <img
                    src='/litepaper/icons/icon-team-twitter.svg'
                    alt=''
                    className='h-[28px] w-[28px] shrink-0 object-contain'
                  />
                )}
              </a>
            </div>
            <div className='mt-3 text-sm font-medium text-green-primary md:text-base lg:text-lg'>
              {item.title}
            </div>
            <div className='lg:text-md mt-3 text-sm font-medium text-white md:text-base'>
              {item.description}
            </div>{' '}
          </div>
        ))}
      </div>
    </div>
  );
}
