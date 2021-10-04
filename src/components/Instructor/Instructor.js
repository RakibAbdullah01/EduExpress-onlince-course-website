import React from 'react';

const Instructor = (props) => {
    const {image,name,course,email}= props.ins;
    return (
        <div class="col h-100 p-5">
            <div className="text-center bg-info text-white">
                <img src={image} className="card-img-top p-4" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6>Courses: {course}</h6>
                <p>Email: {email}</p>
            </div>
      </div>
        </div>
        
    );
};

export default Instructor;