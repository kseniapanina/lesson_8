import React from "react";
import Menu from "../components/Menu"
import {renderRoutes} from "react-router-config"

export const MainLayout = props => {
    return(
        <div> 
            <aside><Menu/> </aside>
        <main>{renderRoutes(props.route.routes)}</main>
        </div>
    )
}