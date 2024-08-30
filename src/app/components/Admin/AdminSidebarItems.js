import { useState } from "react";

export default function AdminSidebarItems({ item }) {
    const [open, setOpen] = useState(false);
    
    if (item.children) {
        return ( <div className = { open ? "sidebar-item open" : "sidebar-item" } >
            <div className = "sidebar-title" >
            <span> {item.icon && <i className = { item.icon }> </i>} { item.title } 
            </span> 
            <i className = "bi-chevron-down toggle-btn"
                onClick = {() => setOpen(!open)}>
                </i> 
                </div> 

                <div className =  "sidebar-content toggle-btn" onClick={() => setOpen(!open)} >
                {
                    item.children.map((child, index) => ( <
                        AdminSidebarItems key = { index }
                        item = { child }
                        />
                    ))
                } </div> 
                </div>
                
            );
        }
        else {
            return ( 
              <a href = { item.path || "#" }
                className = "sidebar-item plain" > {
                    item.icon && < i className = { item.icon } > </i>} { item.title } 
                    </a>
                );
            }
            
        }


        /** use this "menu-trigger" onClick={() => setOpen(!open)} to make dropdown submenu instead of className="bi-chevron-down toggle-btn"*/
        


      