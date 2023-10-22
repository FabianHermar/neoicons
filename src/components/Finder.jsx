import React from 'react'

export default function App() {
  return (
    <div className='w-full shadow-lg shadow-purple-400/10 border-t-[1px] border-purple-400/10 mx-auto'>
      <div className='relative flex items-center w-full h-16 rounded-lg bg-white overflow-hidden md:px-16'>
        <div className='grid place-items-center h-full w-12 text-gray-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>

        <input
          className='peer h-full w-full outline-none text-base text-gray-700 font-[GilroyRegular] pr-2 '
          type='text'
          id='search'
          placeholder='Search the icon that you need...'
        />
      </div>
      <svg
        viewBox='0 0 384 12'
        fill='none'
        aria-hidden='true'
        className='absolute right-0 w-full max-w-[120%] opacity-50 transition'
      >
        <mask
          id=':rg:-a'
          maskUnits='userSpaceOnUse'
          x='48'
          y='0'
          width='269'
          height='4'
          style={{ maskType: 'alpha' }}
        >
          <path
            transform='rotate(180 316.656 4)'
            fill='#C4C4C4'
            d='M316.656 4h268v4h-268z'
          />
        </mask>
        ,
        <g filter='url(#:rg:-b)' mask='url(#:rg:-a)'>
          <path
            transform='rotate(180 292.656 1)'
            fill='url(#:rg:-c)'
            d='M292.656 1h220v2h-220z'
          />
        </g>
        <mask
          id=':rg:-d'
          maskUnits='userSpaceOnUse'
          x='116'
          y='0'
          width='268'
          height='12'
          style={{ maskYype: 'alpha' }}
        >
          <path
            transform='rotate(180 384 12)'
            fill='#C4C4C4'
            d='M384 12h268v12H384z'
          />
        </mask>
        <g filter='url(#:rg:-e)' mask='url(#:rg:-d)'>
          <path
            transform='rotate(180 360 1)'
            fill='url(#:rg:-f)'
            d='M360 1h220v2H360z'
          />
        </g>
        <defs>
          <linearGradient
            id=':rg:-c'
            x1='292.656'
            y1='1'
            x2='512.656'
            y2='1'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A78BFA' stopOpacity='0' />
            <stop offset='.323' stopColor='#A78BFA' />
            <stop offset='.672' stopColor='#EC4899' stopOpacity='.3' />
            <stop offset='1' stopColor='#EC4899' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id=':rg:-f'
            x1='360'
            y1='1'
            x2='580'
            y2='1'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A78BFA' stopOpacity='0' />
            <stop offset='.323' stopColor='#A78BFA' />
            <stop offset='.672' stopColor='#EC4899' stopOpacity='.3' />
            <stop offset='1' stopColor='#EC4899' stopOpacity='0' />
          </linearGradient>
          <filter
            id=':rg:-b'
            x='71.656'
            y='-2'
            width='222'
            height='4'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='.5'
              result='effect1_foregroundBlur_311_43467'
            />
          </filter>
          <filter
            id=':rg:-e'
            x='131'
            y='-10'
            width='238'
            height='20'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='4.5'
              result='effect1_foregroundBlur_311_43467'
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
