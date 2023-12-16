import React from 'react'
// import Sidebar from '../../Components/Side Bar/SideBar'
import Layout from '../../Components/LayOut/LayOut'
import Notes from '../../Components/Notes/Notes'
// import Sidebar from '../../Components/Side Bar/SideBar'

function Home() {
  return (
   <Layout>
<div className='flex  flex-col' >

<Notes/>
<Notes/>
<Notes/>
<Notes/>
<Notes/>
</div>

   </Layout>
  )
}

export default Home