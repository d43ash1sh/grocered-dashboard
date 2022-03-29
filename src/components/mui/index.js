import React from "react";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


/*--------------------------
          Tabs
-------------------------*/
export const MuiTabs = ({ tabs, value, setValue }) => {
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {
                tabs.map((e, i) => <Tab key={i} label={e} />)
            }
        </Tabs>
    </Box>
}


export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}


/*--------------------------
          Tabs
-------------------------*/

