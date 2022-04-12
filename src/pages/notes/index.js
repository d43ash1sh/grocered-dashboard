import { Link, useParams } from "react-router-dom";


import { Col } from "../../components/xbl";
import NotesSidebar from "./components/NotesSidebar";


export default function Notes() {
    const params = useParams();

    const cutString = (v) => {
        return v.substr(0, 250);
    }

    return (
        <div className="sidebar-350" sidebar={params.id || 0}>
            <div className="main w100 p50 flex fww aifs">
                {
                    [10, 1, 2, 3, 4, 5].map((e, i) => <Col key={i} md="50" lg="33" xl="25" className="p50" card="card p1">
                        <Link to={`/dashboard/notes/${e}`}>
                            <div className="header pb50">Billing dates</div>
                        </Link>

                        <div className="f09 ofh" style={{ height: "150px" }}>
                            {
                                cutString("The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! Now fax quiz Jack! my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job")
                            }
                        </div>
                    </Col>)
                }
            </div>

            <NotesSidebar id={params.id || 0} />
        </div>
    )
}



