import React from "react";
import { Link } from "react-router-dom";

export default function index() {
    return (
        <div>
            <ol>
                <li>
                    <Link to="/dashboard">dashboard</Link>
                </li>
            </ol>
        </div>
    )
}
