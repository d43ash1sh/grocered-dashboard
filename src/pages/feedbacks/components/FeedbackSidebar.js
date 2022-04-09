// import { useState, useRef } from "react";
import { Link } from "react-router-dom";

// import { Bull, Ripple, Threedot } from "../xbl";



const FeedbackSidebar = ({ id }) => {

    return (<div className="sidebar pf h100 t0 r0 ofh tr2 white z10">
        <div className="wrap pa-100">
            <div className="flex aic  p1">
                <Link to="/dashboard/feedbacks" className="ic40 md-up ic ix-arrow rot90 graye br50 mbtn mr1"></Link>
                <div className="bold">Feedback</div>
            </div>
        </div>
    </div>);
}
export default FeedbackSidebar;

