


import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../redux/settings";
import useOnOutside from "../hooks/useOnOutside";
import { Ripple, Input } from "../components/xbl";

const MenuFooter = ({ user }) => {
    const settings = useSelector(state => state.settings.value);
    const dispatch = useDispatch();

    const [footer, setFooter] = useState(false);
    const refFooter = useRef();
    useOnOutside(refFooter, () => setFooter(false));

    const list = [
        { name: "Account", icon: "user" },
        { name: "Settings", icon: "settings" },
        { name: "Clear cache", icon: "delete" },
        { name: "Logout", icon: "logout" }]

    return <>
        <div className="footer content pa b0 l0 w100 p10 bg ">
            <div className="flex aic jcsb graye p50 br10 cp" onClick={() => setFooter(true)}>
                <div className=" flex aic">
                    <span className="icon br50 ix-user grayc ic30 ic mr25" /> {user.name || ""}
                </div>
                <span className="icon br50 ix-arrow rot180 graye ic30 ic" />
            </div>

            {
                footer && <div className="pa b0 l0 w100 p10" ref={refFooter}>
                    <div className="white br10 ofh">
                        <div className="flex aic  cgray5 p50">
                            <span className="icon br50 ix-user grayd ic40 ic mr10" />
                            <div className="f08 lh14">
                                <div>{user.name || ""}</div>
                                <div className="f08 cgray8">{user.email || ""}</div>
                            </div>
                        </div>
                        <hr />

                        {
                            list.map((e, i) => <Ripple key={i} >
                                <div className="flex aic p25 hover-dark cp f09">
                                    <span className={`icon br50 ix-${e.icon} cgraya ic30 ic mr25`} />
                                    <span>{e.name}</span>
                                </div>
                            </Ripple>)
                        }

                        <div className="flex aic jcsb p1 f09">
                            <span>Dark mode</span>
                            <Input
                                type="switch"
                                checked={settings.theme}
                                onChange={() => {
                                    dispatch(toggleTheme());
                                }}
                            />
                        </div>

                    </div>
                </div>
            }
        </div>


    </>
}
export default MenuFooter;
