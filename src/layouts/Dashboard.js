import React, { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "../components/logo";

import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../redux/user";
import { Ripple } from "../components/xbl";
import rawlist from "./menu";
import MenuFooter from "./MenuFooter";

const Empty = ({ children }) => {

    const user = useSelector(state => state.user.value);
    const dispatch = useDispatch();
    const [active, setActive] = useState("/dashboard");
    const [submenu, setSubmenu] = useState("/");
    const [list, setList] = useState(rawlist);
    const [search, setSearch] = useState("");


    const f = 0;

    const searchHandler = (v) => {
        setSearch(v);

        if (v === "") {
            setList(rawlist);
            return;
        }

        const temp = [...rawlist].filter(
            e => {
                if (e.name.search(new RegExp(v.split(" ").join("|"), "i")) > -1) {
                    return true;
                }
                else if (e.children) {
                    const found = e.children.find(f => f.name.search(new RegExp(v.split(" ").join("|"), "i")) > -1)
                    return found;
                }
                return false;
            }
        );
        setList(temp);
    }

    return (
        <>
            <div id="sidebar" className="h100 t0 l0 pf z10 cgray7">
                <div className="content pa t0 l0 w100 ofys tscroll p10 pr0">
                    <Logo alt="Logo" width="140px" className="mb1 mt1" />

                    <div className="flex aic mb1 graye p25 pl50 br10 ofh pr">
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

                    {
                        f === 9 && <div className="card p1">
                            <button onClick={() => dispatch(setUserDetails({
                                name: "Manak",
                                dp: "manak-dp",
                                email: "manak@grocered.in",
                            }))}>
                                Manak
                            </button>
                            <button onClick={() => dispatch(setUserDetails({
                                name: "haris",
                                dp: "Haris-dp",
                                email: "haris@grocered.in",
                            }))}>
                                haris
                            </button>
                        </div>
                    }


                    {
                        list.map((e, i) => <Fragment key={i}>
                            {
                                e.children ?
                                    <Submenu e={e} active={active} setActive={setActive} submenu={submenu} setSubmenu={setSubmenu} /> :
                                    <MenuItem e={e} active={active} setActive={setActive} setSubmenu={setSubmenu} />
                            }
                        </Fragment>)
                    }
                </div>

                <MenuFooter user={user} />
            </div>

            <div id="content">
                {children}
                <Outlet />
            </div>
        </>
    );
};

export default Empty;


function MenuItem({ e, active, setActive, submenu, setSubmenu }) {
    const changehandler = () => {
        if (setActive) {
            setActive(e.url);
            setSubmenu("");
        }
        else if (setSubmenu) {
            setSubmenu(e.url);
        }
    }

    if (e.hide) return <></>

    return <Ripple onClick={changehandler}>
        <div className={`item br10 ${(e.url === active) || (submenu && e.url === submenu) ? "active" : ""}`}>
            <Link to={e.url} className={`wrap p40 br10 ${!e.icon ? "pl50 p50" : ""}`}>
                {
                    e.icon && <span className={`icon br50 ix-${e.icon} ic30 ic cgray9`} />
                }
                {e.name}</Link>
        </div>
    </Ripple>
}



function Submenu({ e, active, setActive, submenu, setSubmenu }) {

    return <div className={`item cp br10 ofh ${active === e.name ? "active mt25 mb25" : ""}`}>
        <Ripple onClick={() => setActive(e.name)}>
            <div className="wrap jcsb aic p25 pr50">
                <div className="flex aic">
                    <span className={`icon br50 ix-${e.icon} ic30 ic cgray9`} />
                    <span>{e.name}</span>
                </div>
                <span className={`ix-arrow f08 ic tr4 ${active === e.name ? "rot180" : ""}`} />
            </div>
        </Ripple>
        {
            active === e.name && <div className="submenu f09 p50">
                {e.children.map((f, j) => <MenuItem key={j} e={f} submenu={submenu} setSubmenu={setSubmenu} />)}
            </div>
        }
    </div>
}