import React from 'react'
import {Link} from "react-router-dom";

const SubTitle = ({title, btn, path}) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className="sub-tile">{title}</div>
            {btn && (<Link to={`${path}`} style={{textDecoration: 'none'}}>
                    <div className="shopping-now">{btn}</div>
                </Link>

            )}
        </div>
    )
}

export default SubTitle
