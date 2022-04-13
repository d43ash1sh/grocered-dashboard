import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';


import DaySelector from "../../../components/micro/DaySelector";
import { Input, Avatar } from "../../../components/xbl";
import SearchBox from "../../../components/micro/SearchBox";

import mock from "../../../assets/mock/imgs";


const ScheduleSidebar = ({ id }) => {
    const users = mock.u;
    const schedules = mock.schedules;

    const [data, setData] = useState(null);

    useEffect(() => {
        const tempid = parseInt(id);
        setData(schedules.find(e => e.id === tempid))
    }, [id]);


    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const searchHandler = (v) => {
        console.log(v);
    }

    if (!data) return <></>;

    return (<div className="sidebar right pf h100 t0 r0 ofh tr2 white z10">
        <div className="wrap pa-100 p1 ofya tscroll">
            <div className="flex aic jcsb">
                <Link to="/dashboard/schedule" className="ic40 md-up ic ix-arrow rot90 graye br50 mbtn mr1"></Link>

                <div className="flex aic">
                    <div className="cp ix-delete ic ic40 cgraya hover-graye br50"></div>
                    <div className="cp ix-delete ic ic40 cgraya hover-graye br50 mr1"></div>
                    <div className='switch'>
                        <Input type="switch" checked={data.active} />
                    </div>
                </div>
            </div>


            <div className="mt1 flat">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div className="flex aic jcsb mt150">
                        <div className="w50 mr50">
                            <MobileDatePicker
                                label="Date (Optional)"
                                inputFormat="dd MMM"
                                value={value}
                                onChange={(v) => setValue(v)}
                                views={["day"]}
                                renderInput={(params) => <TextField  {...params} />}
                            />
                        </div>

                        <div className="w50 ml50 timepicker">
                            <MobileTimePicker
                                label="For mobile"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                    </div>
                </LocalizationProvider>

                <div className="mt1">
                    <div className="cgray9 f08 bold">Repeat?</div>
                    <DaySelector repeat={data.repeat} />
                </div>


                <Input type="textarea" label="Message..." className='flat no-focus-label' />



                <div className="mt2 ">
                    <div className="cgray9 f08 bold mb25">Receipents</div>
                    <SearchBox callback={searchHandler} placeholder="Search receipents..." />

                    <div className="mt50">
                        {
                            users.map((e, i) => <div key={i} className="flex aic jcsb mb50">
                                <div className="flex aic lh14 f09">
                                    <Avatar img={e} className="ic30 mr50" />
                                    <div>
                                        <div>Jhon Doe</div>
                                        <div className="f08 cgray9">sayan@grocered.in</div>
                                    </div>
                                </div>
                                <div className="cp ix-delete ic ic30 cgraya hover-dark br50"></div>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    </div>);
}
export default ScheduleSidebar;

