export default function index() {
    return (
        <div className='p50 flex fww'>
            <div className="md-w50 lg-w33 p50">
                <div className="card ofh">
                    <div className="header p1 ">Hello</div>
                    <div className="lh14">
                        {
                            [0, 1, 2, 3, 4].map(e => <div className="flex aic hover-dark p8 cp">
                                <div className="ic30 br50 grayd mr10"></div>
                                <div>
                                    <div className="f09 bold cgray7">Jhon doe</div>
                                    <div className="f08 cgray9">2 days ago</div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
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
            <div className="md-w50 lg-w33 p50">
                <div className="p2 card">Hello</div>
            </div>

        </div>
    )
}
