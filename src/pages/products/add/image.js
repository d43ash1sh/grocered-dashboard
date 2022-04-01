import React, { useState } from 'react';

import {
    DndContext,
    closestCenter,
    TouchSensor,
    MouseSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';


import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';

import { Col, Ripple } from "../../../components/xbl";
import ImageUploader from "../../../modals/image-uploader";



export const AddImage = () => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState([]);


    const removeImage = (id) => {
        console.log(id)
        const temp = selected.filter(f => f.id !== id);
        setSelected(temp);
    }


    // sortable
    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            },
        }),
    );

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setSelected((items) => {
                const oldIndex = selected.findIndex(f => f.id === active.id);
                const newIndex = selected.findIndex(f => f.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
    // sortable


    return (
        <Col className="p50" card="card ofh">
            <div className="header p1">
                Product images
            </div>

            <div className="flex fww f08 p50">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext items={selected} strategy={rectSortingStrategy}>
                        {selected.map((e, i) => <SortableItem key={i} id={e.id} e={e} onDelete={removeImage} className="w50 sm-w33 md-w25 lg-w20 xl-w16 p50 product-img">
                            {/* <div className="aspect-1-1">
                                <div className="bg br10 grayd bc " style={{
                                    backgroundImage: `url(${e.image})`
                                }}>
                                </div>

                                <div className="pa b0 l0 w100 p50 img-remove dn" onClick={() => removeImage(e.id)}>
                                    <div className="flex btn aic jcc br8 p50 cp cwhite">
                                        <div className="ix-delete f12 mr50"></div>
                                        <div>Remove</div>
                                    </div>
                                </div>
                            </div> */}
                        </SortableItem>)}


                    </SortableContext>
                </DndContext>

                <Col className="p50" xs="50" sm="33" md="25" lg="20" xl="16">
                    <Ripple onClick={() => setOpen(true)}>
                        <div className="aspect-1-1 cp br10">
                            <div className="bg br10 theme-t8 ctheme bc tc ic">
                                <div>
                                    <div className="ix-x ic f16 rot45 mb50" />
                                    <div>Add image</div>
                                </div>
                            </div>
                        </div>
                    </Ripple>
                </Col>
            </div>



            <div>
                <ImageUploader
                    open={open}
                    handleClose={() => setOpen(false)}
                    selected={selected}
                    setSelected={setSelected}
                />
            </div>

        </Col>
    )
}

/* <div className="flex fww f08 p50">
    {
        selected.map((e, i) => <Col key={i} className="p50 product-img" xs="50" sm="33" md="25" lg="20" xl="16">
            <div className="aspect-1-1 ">
                <div className="bg br10 grayd bc " style={{
                    backgroundImage: `url(${e.image})`
                }}>

                    <div className="pa b0 l0 w100 p50 img-remove dn" onClick={() => removeImage(e.id)}>
                        <div className="flex btn aic jcc br8 p50 cp cwhite">
                            <div className="ix-delete f12 mr50"></div>
                            <div>Remove</div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>)
    }

    <Col className="p50" xs="50" sm="33" md="25" lg="20" xl="16">
        <Ripple onClick={() => setOpen(true)}>
            <div className="aspect-1-1 cp br10">
                <div className="bg br10 theme-t8 ctheme bc tc ic">
                    <div>
                        <div className="ix-x ic f16 rot45 mb50" />
                        <div>Add image</div>
                    </div>
                </div>
            </div>
        </Ripple>
    </Col>

</div> */