import './App.css';
import React, { useState } from 'react';

const user = {
    name: 'Sina Keshvadi',
    imageUrl: 'https://keshvadi.github.io/res/img/profile_small.jpg',
    imageSize: 100,
};

const courses = [
    {title:'Software Security', id:4220},
    {title:'Web App', id:4640},
    {title: 'Software Requirements', id:3130},
];

const courseList = courses.map(course => 
    <li key={course.id}>
        {course.title}
    </li>
    );

function Courses(){
    return (
        <ul>{courseList}</ul>
    );
}


export default function App() {
    return (
        <>
            <header className='App-header'>
                <h1>{user.name}</h1>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Photo of ' + user.name}
                    style={{ width: user.imageSize, height: user.imageSize }}
                />
            <Courses />
            </header>
        </>
    )
};

