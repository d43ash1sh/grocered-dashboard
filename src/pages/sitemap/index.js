import React from "react";
import { Link } from "react-router-dom";

export default function index() {
    return (
        <div>
            <ol>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                    <Link to="/xbl">Xbl framework</Link>
                </li>
            </ol>
        </div>
    )
}
