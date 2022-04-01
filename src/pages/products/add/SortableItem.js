
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';



export function SortableItem({ id, className, e, onDelete }) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        // isDragging
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={className}
        >
            <div className="aspect-1-1">
                <div className="bg br10 grayd bc " style={{
                    backgroundImage: `url(${e.image})`
                }}>
                    <div
                        {...attributes}
                        {...listeners}
                        className="pa-100 cg"> </div>

                    <div className="pa b0 l0 w100 p50 img-remove dn" onClick={() => onDelete(e.id)}>
                        <div className="flex btn aic jcc br8 p50 cp cwhite">
                            <div className="ix-delete f12 mr50"></div>
                            <div>Remove</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}