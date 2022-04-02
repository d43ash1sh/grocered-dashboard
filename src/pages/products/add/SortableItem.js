
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// function animateLayoutChanges(args) {
//     const { isSorting, wasSorting } = args;

//     if (isSorting || wasSorting) {
//         return defaultAnimateLayoutChanges(args);
//     }

//     return true;
// }

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
        transition,
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div
            ref={setNodeRef}
            className={className}
            style={style}
        >
            <div className="aspect-1-1">
                <div className="bg br10 grayd bc " style={{
                    backgroundImage: `url(${e.image})`
                }}>
                    <div
                        {...listeners}
                        {...attributes}
                        className="pa-100 cg"
                    />

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