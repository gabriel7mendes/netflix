import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="logo Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeEAcPZi6PjGs2nulcaolSHUKFnU6df77uaEQcDnULWbpaSa4ciX_ULtwiibSQ26pZ060ZgBEbiGfZIuzJXXaTpoZZKD.png?r=2de" alt="usuário"></img>
                </a>
            </div>
        </header>
    );
}