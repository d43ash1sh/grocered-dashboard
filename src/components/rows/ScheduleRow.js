import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Input } from "../xbl";

import DaySelector from "../micro/DaySelector";


const ScheduleRow = ({ data }) => {

    return <Link to={`/dashboard/schedule/${data.id}`} className="flex-md aic schedule-row pr white br10 p1 mb50">
        <div className="flex aic jcsb w100p grayd br20 p25 px50 mr2">
            <span className="pl75">{data.time}</span>
            <span className="ix-clock ic" />
        </div>
        <DaySelector repeat={data.repeat} disabled={true} className="m50 mr2-md my0-md" />

        <div className="mgs ">
            This mesage will be published
        </div>
        <div className='switch'>
            <Input type="switch" checked={data.active} />
        </div>
    </Link>
}
export default ScheduleRow;

