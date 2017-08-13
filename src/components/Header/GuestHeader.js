/**
 * Created by Jaewoos on 2017-07-30.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

const GuestHeadaer = () => (

    <div className="headerwrap">
        <NavLink exact to="/"><h1 className="serlogo">아워오피스</h1></NavLink>
        <div className="search">
            <a className="go_search"></a>
        </div>
    </div>
)

export default GuestHeadaer;