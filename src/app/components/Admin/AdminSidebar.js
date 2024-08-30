"use client"
import AdminSidebarItems from "./AdminSidebarItems";
import items from "../Admin/AdminSubMenuRecords.json";


export default function AdminSidebar() {
    return (

        <div className = "AdminSidebar" > {
            items.map((item, index) => ( <
                AdminSidebarItems key = { index }
                item = { item }
                />))
        }
     <div className = "Signout">Sign out</div> </div>
    );
}