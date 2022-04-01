import React, { useEffect, useState, useMemo } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';

import { Col, Input, Ripple, NoData } from "../components/xbl";
import { TabPanel } from "../components/mui";

import uploadSvg from "../assets/svg/upload.svg";
import mock from "../assets/mock/imgs";



const ImageModal = ({ open, handleClose, selected, setSelected }) => {
    const [tab, setTab] = useState(0);
    const [list, setList] = useState(mock.products);
    const [selectedId, setSelectedId] = useState([102]);


    useEffect(() => {
        const temp = selected.map(e => e.id);
        setSelectedId(temp);

    }, [selected])


    const [search, setSearch] = useState("");
    const searchHandler = (v) => {
        setSearch(v);

        if (v === "") {
            setList([]);
            return;
        }
    }

    const imageSelected = (data) => {
        if (selectedId.includes(data.id)) {
            setSelectedId([...selectedId].filter(e => e !== data.id));
        } else {
            setSelectedId([...selectedId, data.id]);
        }
    }


    const handleSelect = () => {
        const temp = list.filter(f => selectedId.includes(f.id));
        setSelected(temp);
        handleClose();
    }












    // -----------image uploader---------------

    const [cropable, setCropable] = useState(true);
    const [srcImg, setSrcImg] = useState(null);
    const [croppingImage, setCroppingImage] = useState(null);
    const [cropped, setCropped] = useState(null);


    const {
        // acceptedFiles,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone(
        {
            accept: '.webp,.jpg,.png,jpeg',
            onDrop: e => handleOnDrop(e)
            // validator: nameLengthValidator
        }
    );


    // dropzone
    const handleOnDrop = e => {
        if (e.length > 0) {
            console.log(e[0]);
            // name: "img-2.jpg"
            // size: 5113
            // type: "image/jpeg"

            if (e[0].type === "image/webp") {
                setCropable(false);
                setCropped(URL.createObjectURL(e[0]));
            }
            else {
                setCropable(true);
                setSrcImg(URL.createObjectURL(e[0]));
            }

        }
    };

    const handleImage = async (event) => {
        const imageInfo = event.target.files[0];

        console.log(imageInfo);
        // name: "mixing-colors-4k-ipad-pro-wallpaper-ilikewallpaper_com.jpg"
        // size: 700891
        // type: "image/jpeg"

        setSrcImg(URL.createObjectURL(imageInfo));
    };


    const className = useMemo(() => ([
        (isFocused ? "focus" : ""),
        (isDragAccept ? "accept" : ""),
        (isDragReject ? "accept" : "")
    ]), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);



    const [crop, setCrop] = useState({
        aspect: 1 / 1,
        unit: '%',
        width: 80,
    });


    const getCroppedImg = async () => {
        try {
            const canvas = document.createElement("canvas");
            const scaleX = croppingImage.naturalWidth / croppingImage.width;
            const scaleY = croppingImage.naturalHeight / croppingImage.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(
                croppingImage,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height
            );

            const base64Image = canvas.toDataURL("image/jpeg", 1);
            setCropped(base64Image);

            //console.log(result);
        } catch (e) {
            console.log("crop error", e);
        }
    };


    // for tagging
    const [newWord, setNewword] = useState("");
    const [words, setWords] = useState(["tag 1", "tag 2", "tag 3"]);

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
    // for tagging



    // -----------END image uploader---------------









    return <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flat"
    >
        <Box className="pa t50 l50 tt-50 white br8 ofh w100 h100" sx={{
            maxWidth: 700,
            maxHeight: "80%"
        }}>
            <Box className="flex jcsb aife ">
                <Tabs selectionFollowsFocus value={tab} onChange={(e, v) => setTab(v)} aria-label="basic tabs example">
                    {
                        ["Selected", "All images", "Upload"].map((e, i) => <Tab key={i} label={<div className="p50">{e}</div>} />)
                    }
                </Tabs>

                <div>
                    <div className="flex aic graye p25 pr50 pl50 br8 ofh pr m50">
                        <input
                            className="trans cgray7 bor0 p25 w100"
                            placeholder="Search..."
                            onChange={(e) => searchHandler(e.target.value)}
                            value={search}
                        />
                        <div className="cp search-icon pr50 pl25 f08 pr ic30">
                            <span show={search.length === 0 ? "1" : "0"} className="ix-search ic tr4 ic30 pa t0 r0" />
                            <span show={search.length === 0 ? "0" : "1"} className="ix-x ic tr4 ic30 pa t0 r0" onClick={() => searchHandler("")} />
                        </div>

                    </div>
                </div>
            </Box>

            <div className="bg pa w100 ofya tscroll" style={{ height: "calc(100% - 112px)" }}>
                <TabPanel value={tab} index={0}>
                    <ImageList list={list} renderselected={true} selected={selectedId} onSelect={imageSelected} />
                </TabPanel>

                <TabPanel value={tab} index={1}>
                    <ImageList list={[...list, ...list]} selected={selectedId} onSelect={imageSelected} />
                </TabPanel>

                <TabPanel value={tab} index={2}>
                    <div>
                        {
                            // drag and drop
                            (!srcImg && !cropped) && <div {...getRootProps({ className: `dropzone-wrap mt2 pa-100 flex aic jcc cp ${className.join(" ")}` })}>
                                <div className="dropzone mw300 p1 f09">
                                    <input
                                        {...getInputProps()}
                                        onChange={handleImage}
                                    />
                                    <NoData src={uploadSvg} className="tc" />
                                    <div>Drag and drop, or click to select files</div>
                                </div>
                            </div>
                        }




                        {
                            // crop and resize
                            !cropped && srcImg && <div className='mt2 w100 mauto' style={{ maxWidth: "350px" }}>
                                <ReactCrop
                                    style={{ maxWidth: "100%" }}
                                    src={srcImg}
                                    onImageLoaded={setCroppingImage}
                                    crop={crop}
                                    onChange={setCrop}
                                    keepSelection={true}
                                    circularCrop={false}
                                    scale={true}
                                />


                            </div>
                        }


                        {
                            // add tag and upload
                            cropped && <div className='w100 flex fww p50 w100'>

                                <Col md="50 p50 tc">
                                    <img src={cropped} alt="result" className="w100 mw300" />
                                </Col>
                                <Col md="50 p50">
                                    <Input
                                        label="Type tags..."
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


                            </div>
                        }
                    </div>
                </TabPanel>
            </div>



            <div className="flex jcsb p50 pa w100 l0 b0">
                <div></div>
                <Stack direction="row" spacing={2}>
                    {
                        tab < 2 && <>
                            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                            <Button variant="contained" onClick={handleSelect}>Select Image</Button>
                        </>
                    }
                    {
                        tab === 2 && !cropped && srcImg && <>
                            <Button variant="secondary" onClick={() => setSrcImg(null)}>Change</Button>
                            <Button variant="contained" onClick={getCroppedImg}>Next step</Button>
                        </>
                    }
                    {
                        tab === 2 && cropped && <>
                            <Button variant="secondary" onClick={() => { setSrcImg(null); setCropped(null) }}>Change</Button>
                            {
                                cropable && <Button variant="secondary" onClick={() => setCropped(null)}>Re-crop</Button>
                            }
                            <Button variant="contained" onClick={() => null}>Upload image</Button>
                        </>
                    }
                </Stack>
            </div>




        </Box>
    </Modal>
}
export default ImageModal;










function ImageList({ list, renderselected, selected, onSelect }) {
    return <>
        {
            renderselected ?
                <>
                    {selected.length === 0 && <div className="pa t50 l50 tt-50 w100 mw500"><NoData /></div>}
                </> :
                <>
                    {list.length === 0 && <div className="pa t50 l50 tt-50 w100 mw500"><NoData /></div>}
                </>
        }


        <div className="flex fww p50">
            {
                list.map((e, i) => <ImageBlock
                    key={i}
                    selected={selected.includes(e.id)}
                    renderselected={renderselected}
                    data={e}
                    onSelect={onSelect}
                />)
            }
        </div>
    </>
}


function ImageBlock({ selected, renderselected, data, onSelect }) {
    return <>
        {((renderselected && selected) || !renderselected) && <Col className={`p50 img-selected ${selected ? "active" : ""}`} xs="50" sm="33" md="25" lg="20" xl="16">
            <div className="aspect-1-1 cp grayd br10" onClick={() => onSelect(data)}>
                <div className="bg tr2 br10 bc " style={{
                    backgroundImage: `url(${data.image})`
                }}>
                    <Ripple>
                        <div className="pa-100 pl50">
                            <Input defaultChecked={true} disabled type="checkbox" />
                        </div>
                    </Ripple>
                </div>
            </div>
        </Col>}
    </>
}

