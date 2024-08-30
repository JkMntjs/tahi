/** 
import React from "react";
import './AdminSidebar.css'
import AdminSidebar from "./AdminSidebar";
import exp from "constants";





import React from "react"
import { Menu } from "antd"
import "./AdminSidebar.css";

export default function AdminSidebarMain() {
    return (
      <div>
        <div className ="AdminSidebarItems">
          <Menu
            items={[
              {
                label: "Manage Tailoring Shops",
                children: [
                  { label: "Add Tailoring Shops" },
                  { label: "View Tailoring Shops" },
                  { label: "Update Tailoring Shops" },
                ],
              },
              {
                label: "Notifications",
                children: [
                  { label: "Tailoring Registry" },
                  { label: "Approved Tailoring Shops" },
                  { label: "Declined Tailoring Shops" },
                ],
              },
              {
                label: "Messages",
                children: [
                  { label: "Message Requests" },
                  { label: "All Messages" },
                ],
              },
            ]}
          ></Menu>
        </div>
        <div className="AdminOut"> Sign out </div>
      </div>
    );

}

*/

import React from 'react';
import AdminSidebar from './AdminSidebar';
import "./AdminSidebar.css";
import Image from 'next/image';


export default function AdminSidebarMain() {


return (
  <div className="Main">
   
    <AdminSidebar />
    <div className="Container">

      <h1 className="PatahiLogo">Patahi</h1>
      <p className="info">Manage stores now!</p>
   
       
     
    </div>
  </div>
);
}


