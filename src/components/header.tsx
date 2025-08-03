/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Header() {
  return (
    <>
      <header className='mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative pt-6 select-none'>
        <div className='relative z-10 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <img
              src='/svg/neoicons_logo.svg'
              alt='Neoicons logo'
              className='w-44'
            />
          </div>
          <a
            className='rounded-lg text-slate-900 font-semibold transition flex items-center gap-2 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-[#8b5cf6]/[0.3] -my-1 -mx-1.5'
            href='https://twitter.com/intent/tweet?text=Check%20out%20Neoicons%20by%20the%20creators%20of%20DuneUI%20%F0%9F%98%8D&amp;url=https%3A%2F%2Fneoicons.duneui.com'
          >
            <svg
              aria-hidden='true'
              viewBox='0 0 1668.56 1221.19'
              className='h-8 w-8 fill-slate-400'
            >
              <g id='layer1' transform='translate(52.390088,-25.058597)'>
                <path
                  id='path1009'
                  d='M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99 h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z'
                />
              </g>
            </svg>
            <span className='font-display'>
              Share
              <span className='sr-only sm:not-sr-only'> on Twitter / X</span>
            </span>
          </a>
        </div>
      </header>
    </>
  )
}
