
import { Col, Bull, Ripple } from "../../components/xbl";

export default function index() {
    return (
        <div className='p50 flex fww'>
            <Col md="50" lg="33" className="p50">
                <div className="card ofh">
                    <div className="header p1 flex jcsb aic">
                        <div>Received orders <span className="f08 cgray9">(18 orders)</span></div>
                        <div>
                            <Ripple>
                                <button className="mbtn theme-t8">View all</button>
                            </Ripple>
                        </div>
                    </div>
                    <div className="lh14">
                        {
                            [0, 1, 2, 3, 4].map(e => <Ripple key={e} >
                                <div className="flex aic jcsb hover-dark p8 cp">
                                    <div className="flex aic">
                                        <div className="ic40 br50 grayd mr10"></div>
                                        <div>
                                            <div className="f09 bold cgray7">Jhon doe</div>
                                            <Bull className="f08 cgray9" list={[
                                                "Tilapara",
                                                "2 days ago"
                                            ]} />
                                        </div>
                                    </div>
                                    <div className="flex aic">
                                        <div className="tc  cgray7 mr50">
                                            <div className="rs bold">500</div>
                                            <div className="f08 cgray9">14 items</div>
                                        </div>
                                        <div className="ix-three-dot cgraya ic40 br50 ic hover-dark pr z10"></div>
                                    </div>
                                </div>
                            </Ripple>
                            )
                        }
                    </div>
                </div>
            </Col>

            <Col md="50" lg="20" className="p50">
                <div className="card ofh">
                    <div className="header p1 flex jcsb aic">
                        <div>Received orders <span className="f08 cgray9">(18 orders)</span></div>
                        <div>
                            <button className="mbtn themel">View all</button>
                        </div>
                    </div>
                </div>
            </Col>


            <div className="md-w50 lg-w33 p50">
                <div className="p2 card">Hello</div>
            </div>
            <div className="md-w50 lg-w33 p50">
                <div className="p2 card">Hello</div>
            </div>

            <div className="md-w50 lg-w33 p50">
                <div className="p2 card">Hello</div>
            </div>
            <div className="md-w50 lg-w33 p50">
                <div className="p2 card">Hello</div>
            </div>

        </div>
    )
}
