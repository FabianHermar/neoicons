import Finder from './Finder'

/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className='text-gray-600 body-font'>
      <div
        aria-hidden='true'
        className='absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-30'
      >
        <div className='blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-purple-400 dark:from-blue-700' />
        <div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-600 to-purple-700 dark:to-indigo-600' />
      </div>
      <div className='container mx-auto flex px-5 pt-10 md:flex-row flex-col items-center  md:px-16'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-20'>
          <div className='order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start pb-4 pl-1 font-[GilroyRegular]'>
            <p>Working in the icons</p>
            <svg
              viewBox='0 0 2 2'
              aria-hidden='true'
              className='w-0.5 fill-current'
            >
              <circle cx='1' cy='1' r='1' />
            </svg>
            <p>MIT license</p>
          </div>
          <h1 className='title-font sm:text-5xl text-3xl mb-4 text-gray-900 principal-title font-[GilroyBold]'>
            Beautiful SVG icons meticulously created by the talented designers
            behind windUI.
          </h1>
          <p className='mb-8 leading-relaxed font-[GilroyRegular] opacity-80 text-gray-500'>
            Explore a wide collection of high-quality icons to bring your
            projects to life with style and simplicity.
          </p>
          <div className='flex justify-center select-none'>
            <a
              href='https://github.com/Boxode/neoicons'
              target='_blank'
              className='inline-flex text-black justify-center items-center font-[GilroySemibold] hover:bg-gray-200 transition border-0 py-2 px-3 focus:outline-none rounded text-sm'
            >
              <img
                src='/svg/github-mark.svg'
                alt='GitHub Logo'
                className='w-6 h-6 mr-2'
              />
              GitHub Repo
            </a>
            <a
              href=''
              target='_blank'
              className='inline-flex text-black justify-center items-center font-[GilroySemibold] hover:bg-blue-200 transition border-0 py-2 px-3 focus:outline-none rounded text-sm'
            >
              <img
                src='/svg/Figma-logo.svg'
                alt='GitHub Logo'
                className='w-6 h-6 mr-2'
              />
              Figma File
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src='/svg/crafted.svg'
          />
        </div>
      </div>
      <Finder />
    </section>
  )
}
