import React from 'react'

export default function CardCom({ imgurl, titel }) {
    return (
        <div className="card-img-top border p-2 bg-white m-4" style={{ "width": "280px", "height": "300px" }}>
            <img className="card-img-top b-dark border-dark" src={imgurl} alt="Card image cap" style={{ "width": "250px", "height": "200px" }} />
            <div className="card-body">
                <h5 className="card-title text-danger">{titel}</h5>
            </div>
        </div>
    )


};