import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure> <img src={photo} /></figure>
                <div className=" flex  w-full">
                    <div className="">
                    <h2 className="card-title">Name:{name} </h2>
                    <p>{category}</p>
                    <p>{chef}</p>
                    <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-1">
                            <button className="btn">View</button>
                            <button className="btn">Update</button>
                            <button className="btn">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;