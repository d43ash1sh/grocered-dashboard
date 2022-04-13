// import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import ScheduleRow from "../../components/rows/ScheduleRow";
import ScheduleSidebar from "./components/ScheduleSidebar";

import mock from "../../assets/mock/imgs";



export default function Schedules() {
    const schedules = mock.schedules;

    const params = useParams();

    return (
        <div className="sidebar-350" sidebar={params.id || 0}>
            <div className="p1 main w100 tr2">
                {
                    schedules.map((e, i) => <ScheduleRow key={i} data={e} />)
                }
            </div>

            <ScheduleSidebar id={params.id || 0} />
        </div>
    )
}
