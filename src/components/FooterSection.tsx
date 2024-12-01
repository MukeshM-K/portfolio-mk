import React from 'react'

const FooterSection = () => {
  return <footer className='w-full mt-28 px-4 md:px-8 border-t border-t-zinc-700 py-4 '>
<div className='max-w-7xl mx:auto flex justify-between'>
<p className='text-zinc-500 text-sm'>&copy;Copyright {new Date().getFullYear()}</p>
<p className='text-zinc-500 text-sm'>Design and Developed By: Mukesh Kumar</p>
</div>

  </footer>
}

export default FooterSection
