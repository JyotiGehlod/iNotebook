import React from 'react'

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-success" role="alert">
                <h6>{props.message}</h6>
            </div>
        </div>
    )
}

export default Alert
