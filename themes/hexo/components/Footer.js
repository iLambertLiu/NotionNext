import React from 'react'
import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer
      className='relative z-10 justify-center flex-shrink-0 w-full p-6 m-auto text-sm leading-6 text-center text-gray-600 dark:bg-black bg-hexo-light-gray dark:text-gray-100'
    >
      {/* <DarkModeButton/> */}

      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><i className='mx-1 animate-pulse fas fa-heart'/> <a href={BLOG.LINK} className='font-bold underline dark:text-gray-300 '>{BLOG.AUTHOR}</a>.<br/>

      {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a><br/></>}

      <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye'/><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
      <span className='hidden pl-2 busuanzi_container_site_uv'>
        <i className='fas fa-users'/> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
        <br/>
        {/* <h1>{title}</h1> */}
        <span className='text-xs '>Powered by <a href='https://github.com/tangly1024/NotionNext' className='underline dark:text-gray-300'>NotionNext {BLOG.VERSION}</a>.</span></span><br/>

    </footer>
  )
}

export default Footer
