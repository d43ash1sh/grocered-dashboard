import React, { useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { styled } from '@mui/material/styles';

import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';

import Autocomplete from '@mui/material/Autocomplete';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import { Link } from "react-router-dom";
import { Col, Input, Ripple } from "../../../components/xbl";

import mock from "../../../assets/mock/imgs";



export const Title = () => {
    return (
        <Col className="p50" card="card ofh p1">
            <Input
                className="m0 no-border"
                label="Product title"
                name="name"
            />
        </Col>
    )
}





export const AddImage = () => {
    const products = mock.products

    return (
        <Col className="p50" card="card ofh">
            <div className="header p1">
                Product images
            </div>
            <div className="w100 ofh">
                <div className="flex f08 p50 tc cgray7 pr">
                    {
                        products.map((e, i) => <Link to={i} key={i} className="p50">
                            <div className="ic100 grayd br10 bc" style={{
                                backgroundImage: `url(${e.image})`
                            }}></div>
                            <div className="mt10">30 Days</div>
                        </Link>)
                    }
                    <div className="viewmore-right pa r0 t0 h100 p1 pl2">
                        <div className="ic50 mt75 f14 ic ix-arrow rot-90 theme-t8 br50 mbtn"></div>
                    </div>
                </div>
            </div>
        </Col>
    )
}




export const Description = () => {
    return (
        <Col className="p50" card="card ofh p1">
            <div className="header ">
                Product description
            </div>
            <Input
                className="m0 no-border"
                type="textarea"
                rows="3"
                label="Write here"
            />
        </Col>
    )
}






export const BasicInfo = () => {

    const [age, setAge] = React.useState("");

    const unitChanged = (event) => {
        setAge(event.target.value);
    };


    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header ">
                Basic information
            </div>
            <div className='flex aic fww'>
                <Col lg="33">
                    Weight
                </Col>
                <Col lg="66" className="flex ">
                    <div className="w33 p50">
                        <Input
                            className="m0 flat"
                            label="Weight"
                        />
                    </div>
                    <div className="w33 p50 ">
                        <FormControl sx={{ m: 1, minWidth: "100%" }}>
                            <Select
                                value={age}
                                onChange={unitChanged}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">Unit</MenuItem>

                                {
                                    ["Gram", "Mililiter", "Centimeter", "Piece"].map((e, i) => <MenuItem key={i} value={e}>{e}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className="w33 p50">
                        <FormControl sx={{ m: 1, minWidth: "100%" }}>
                            <Select
                                value={age}
                                onChange={unitChanged}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {
                                    ["Fixed", "Loose"].map((e, i) => <MenuItem key={i} value={e}>{e}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>
                </Col>
            </div>

            <div className='flex aic fww'>
                <Col lg="33">
                    Price
                </Col>
                <Col lg="66" className="flex ">
                    <div className="w50 p50">
                        <Input
                            className="m0 flat"
                            label="MRP"
                        />
                    </div>
                    <div className="w50 p50">
                        <Input
                            className="m0 flat"
                            label="Selling price"
                        />
                    </div>
                </Col>
            </div>

            <div className='flex aic fww'>
                <Col lg="33">
                    Quantity
                </Col>
                <Col lg="66" className="flex ">
                    <div className="w50 p50">
                        <Input
                            className="m0 flat"
                            label="Min quantity"
                        />
                    </div>
                    <div className="w50 p50">
                        <Input
                            className="m0 flat"
                            label="Qty in stock"
                        />
                    </div>
                </Col>
            </div>
        </Col>
    )
}



export const DateInfo = () => {

    const [value, setValue] = useState(new Date());
    const [interval, setinterval] = useState('Months');

    const typeChange = (event, v) => {
        if (!v) return;
        setinterval(v);
    };


    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header ">
                Date information
            </div>
            <div className='flex aic fww'>
                <Col lg="33">
                    Manufactured date
                </Col>
                <Col lg="66" className="flex">
                    <div className="w50 p50">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                inputFormat="dd MMM yyyy"
                                value={value}
                                onChange={(v) => setValue(v)}
                                renderInput={(params) => <TextField  {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </Col>
            </div>

            <div className='flex aic fww'>
                <Col lg="33">
                    Expiry
                </Col>
                <Col lg="66" className="flex p50">
                    <div className="flex graye br8">
                        <Input
                            className="m0 flat"
                            label={interval}
                            style={{ width: "150px" }}
                        />
                        <ToggleButtonGroup
                            className="graye"
                            color="primary"
                            value={interval}
                            exclusive
                            onChange={typeChange}
                        >
                            {
                                ["Days", "Months", "Years"].map((e, i) => <ToggleButton key={i} value={e}>{e}</ToggleButton>)
                            }
                        </ToggleButtonGroup>
                    </div>
                </Col>
            </div>

        </Col>
    )
}


export const Identification = () => {
    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header ">
                Identification
            </div>
            <div className='flex aic fww'>
                <Col lg="33">
                    Brand name
                </Col>
                <Col lg="66" className="p50">
                    <Input
                        className="m0 flat"
                        label="Brand name"
                    />
                </Col>
            </div>
            <div className='flex aic fww'>
                <Col lg="33">
                    EAN
                </Col>
                <Col lg="66" className="p50">
                    <Input
                        className="m0 flat"
                        label="EAN"
                    />
                </Col>
            </div>
        </Col>
    )
}


export const CustomAttribute = () => {
    return (
        <Col className="p50" card="card ofh p50 flat">
            <div className="header p50">
                Custom attributes
            </div>
            {
                [0, 1, 2].map((e, i) => <div key={i} className='flex aic fww'>
                    <Col lg="33" className="p50">
                        <Input
                            className="m0 flat"
                            label="Value"
                        />
                    </Col>
                    <Col lg="66" className="p50">
                        <Input
                            className="m0 flat"
                            label="Value"
                        />
                    </Col>
                </div>)
            }

        </Col>
    )
}


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];



export const Category2 = () => {
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value
        );
    };


    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header pb1">
                Category
            </div>
            <FormControl sx={{ width: "100%" }}>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="" />}
                    renderValue={(selected) => <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                        {selected.map((value, i) => <Chip key={i} label={value} />)}
                    </Box>}
                    MenuProps={MenuProps}
                >
                    {names.map((name, i) => <MenuItem key={i} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>)}
                </Select>
            </FormControl>

        </Col>
    )
}






export const Category = () => {

    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header pb1 flex jcsb aic">
                <span>Category</span>
                <Ripple>
                    <button className="mbtn theme-t8">Add new</button>
                </Ripple>
            </div>
            <div className="trans">
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={names}
                    // getOptionLabel={(option) => option.title}
                    defaultValue={[names[0]]}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label=""
                        />
                    )}
                />
            </div>

        </Col>
    )
}




export const Keyword = () => {
    const [newWord, setNewword] = useState("");
    const [words, setWords] = useState(["keyword 1", "keyword 2", "keyword 3", "keyword 4", "keyword 5", "keyword 6"]);

    const handleDelete = (e, index) => {
        const temp = [...words]
        temp.splice(index, 1)
        setWords(temp);
    };

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            setWords([...words, newWord]);
            setNewword("");
        }
    };
    const changeHandler = (e) => {
        setNewword(e.target.value)
    };



    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header pb1 flex jcsb aic">
                <span>Keyword</span>
                <Ripple onClick={() => setWords([])}>
                    <button className="mbtn theme-t8">Clear all</button>
                </Ripple>
            </div>


            <Input
                label="Type keyword..."
                value={newWord}
                onKeyDown={onEnter}
                onChange={changeHandler}
            />

            <div className='flex fww'>
                {
                    words.map((e, i) => <div key={i} className="m25">
                        <Chip label={e} onDelete={(e) => handleDelete(e, i)} style={{ backgroundColor: "var(--grayd)" }} />
                    </div>)
                }
            </div>

        </Col>
    )
}







export const Variant = () => {
    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header pb1 flex jcsb aic">
                <span>Variants</span>
            </div>

            <Input
                label="Search variant..."
            />
        </Col>
    )
}


export const SimilarProducts = () => {
    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header pb1 flex jcsb aic">
                <span>Similar products</span>
            </div>

            <Input
                label="Search similar products..."
            />
        </Col>
    )
}



export const PostButtons = () => {
    return (
        <Col className="mt3 flex aic fww">
            <Col xs="50" className="p50">
                <Ripple>
                    <button className="btn accent w100 light">Preview</button>
                </Ripple>
            </Col>
            <Col xs="50" className="p50">
                <Ripple>
                    <button className="btn theme w100 light">Publish</button>
                </Ripple>
            </Col>
        </Col>
    )
}
