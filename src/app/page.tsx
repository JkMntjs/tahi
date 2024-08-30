'use client'
import React from 'react'
import AdminSidebarMain from './components/Admin/AdminSidebarMain'
import AdminMainNavigationbar from './components/Admin/AdminMainNavigationbar'
import  AddAdminUser from './components/Admin/AddAdminUser'
import AdminFirebaseAccess from './components/Admin/AdminFirebaseAccess'
import './page.css';

import Image from 'next/image'


export function page() {
    return (
      <div>
        <AdminMainNavigationbar/>
        <AdminSidebarMain/>
      </div>
      

    
    )

}

export default page
      /** 
   <div> 
<AddAdminUser/>
  <AdminMainNavigationbar/>
   <AdminSidebarMain/> 

  </div>


  <AdminMainNavigationbar/>
      <AdminSidebarMain/>
  */



