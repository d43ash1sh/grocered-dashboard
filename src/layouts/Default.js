import React, { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "../components/logo";

import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../redux/user";
import rawlist from "./menu";
import MenuFooter from "./MenuFooter";

const Empty = ({ children }) => {

    const user = useSelector(state => state.user.value);
    const dispatch = useDispatch();
    const [active, setActive] = useState("/dashboard");
    const [submenu, setSubmenu] = useState("/");
    const [list, setSearch] = useState(rawlist);


    const f = 0;

    const searchHandler = (e) => {
        const v = e.target.value;

        if (v === "") {
            setSearch(rawlist);
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
        setSearch(temp);
    }

    return (
        <div className="main">
            <div id="sidebar" className="h100 t0 l0 pf z10 cgray7">
                <div className="content pa t0 l0 w100 ofya tscroll p10 pr0">
                    <Logo alt="Logo" width="140px" className="mb1 mt1" />

                    <div className="flex aic mb1 graye p25 br10 ofh">
                        <input
                            className="trans cgray7 bor0 p25"
                            placeholder="Search..."
                            onChange={searchHandler}
                        />
                        <span className="ix-search ic pr25 pl10" onClick={() => setSearch(rawlist)} />
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
        </div >
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
    return <div className={`item br10 ${(e.url === active) || (submenu && e.url === submenu) ? "active" : ""}`} onClick={changehandler}>
        <Link to={e.url} className={`wrap p40 br10 ${!e.icon ? "pl50 p50" : ""}`}>
            {
                e.icon && <span className={`icon br50 ix-${e.icon} ic30 ic cgray9`} />
            }
            {e.name}</Link>
    </div>
}



function Submenu({ e, active, setActive, submenu, setSubmenu }) {

    return <div className={`item cp br10 ofh ${active === e.name ? "active mt25 mb25" : ""}`}>
        <div className="wrap jcsb aic p25 pr50" onClick={() => setActive(e.name)}>
            <div className="flex aic">
                <span className={`icon br50 ix-${e.icon} ic30 ic cgray9`} />
                <span>{e.name}</span>
            </div>
            <span className={`ix-arrow f08 ic tr4 ${active === e.name ? "rot180" : ""}`} />
        </div>
        {
            active === e.name && <div className="submenu f09 p50">
                {e.children.map((f, j) => <MenuItem key={j} e={f} submenu={submenu} setSubmenu={setSubmenu} />)}
            </div>
        }
    </div>
}