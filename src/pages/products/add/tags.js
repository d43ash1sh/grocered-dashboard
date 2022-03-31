import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';

import { Col, Input, Ripple } from "../../../components/xbl";






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






export const Category = () => {
    const [val, setVal] = useState([]);

    const handleDelete = (e, index) => {
        const temp = [...val]
        temp.splice(index, 1)
        setVal(temp);
    };

    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header pb1 flex jcsb aic">
                <span>Category</span>
                <Ripple>
                    <button className="mbtn theme-t8">Add new</button>
                </Ripple>
            </div>
            <div className="trans graye br8">
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={names}
                    renderTags={() => { }}
                    value={val}
                    onChange={(e, newValue) => setVal(newValue)}

                    // getOptionLabel={(option) => option.title}
                    defaultValue={[names[0]]}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label=""
                            placeholder="Search categories..."
                            fullWidth
                        />
                    )}
                />
            </div>

            <div className='flex fww mt50'>
                {
                    val.map((e, i) => <div key={i} className="m25">
                        <Chip label={e} onDelete={(e) => handleDelete(e, i)} style={{ backgroundColor: "var(--grayd)" }} />
                    </div>)
                }
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




