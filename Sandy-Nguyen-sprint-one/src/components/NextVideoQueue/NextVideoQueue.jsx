import React from 'react';
import NextVideo from '../NextVideo/NextVideo';

function NextVideoQueue(props) {

    const nextVideoList = [
    {
        id: 1,
        thumbnail: '../../assets/images/video-list-1.jpg',
        title: 'Become A Travel Pro In One Easy Lesson',
        author: 'Todd Welch'
    },
    {
        id: 2,
        thumbnail: '../../assets/images/video-list-2.jpg',
        title: 'Les Houches The Hidden Gem Of The Chamonix',
        author: 'Cornelia Blair'
    },
    {
        id: 3,
        thumbnail: '../../assets/images/video-list-3.jpg',
        title: 'Travel Health Useful Medical Information For',
        author: 'Glen Harper'
    },
    {
        id: 4,
        thumbnail: '../../assets/images/video-list-4.jpg',
        title: 'Cheap Airline Tickets Great Ways To Save',
        author: 'Emily Harper'
    },
    {
        id: 5,
        thumbnail: '../../assets/images/video-list-5.jpg',
        title: 'Take A Romantic Break In A Boutique Hotel',
        author: 'Ethan Owen'
    },
    {
        id: 6,
        thumbnail: '../../assets/images/video-list-6.jpg',
        title: 'Choose The Perfect Accommodations',
        author: 'Lydia Perez'
    },
    {
        id: 7,
        thumbnail: '../../assets/images/video-list-7.jpg',
        title: 'Cruising Destination Ideas',
        author: 'Timothy Austin'
    },
    {
        id: 8,
        thumbnail: '../../assets/images/video-list-8.jpg',
        title: 'Train Travel On Track For Safety',
        author: 'Scotty Cranmer'
    }
];

    return (
        <section className="sub-section">
            <p className="sub-section__heading">NEXT VIDEO</p>
            {nextVideoList.map(nextVideoInfo => 
                <NextVideo key={nextVideoInfo.id} thumbnail={nextVideoInfo.thumbnail} title={nextVideoInfo.title} author={nextVideoInfo.author}/>)}
        </section>
    );
};

export default NextVideoQueue;