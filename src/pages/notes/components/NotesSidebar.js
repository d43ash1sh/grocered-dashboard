// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Avatar, Ripple } from "../../../components/xbl";

// import mock from "../../../assets/mock/imgs";


const NotesSidebar = () => {
    const title = "18 easy recipes to use up lots of tomatoes";


    return (<div className="sidebar pf h100 t0 r0 ofh tr2 white z10">
        <div className="wrap pa-100 ">
            <div className="flex aic  p1">
                <Link to="/dashboard/notes" className="ic40 md-up ic ix-arrow rot90 graye br50 mbtn mr1"></Link>
                <div className="bold">Notes</div>
            </div>

        </div>
    </div>);
}
export default NotesSidebar;

