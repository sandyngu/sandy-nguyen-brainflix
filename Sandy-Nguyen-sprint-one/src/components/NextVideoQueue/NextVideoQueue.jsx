import React from 'react';
import NextVideo from '../NextVideo/NextVideo';
import thumbnail1 from '../../assets/images/video-list-1.jpg';
import thumbnail2 from '../../assets/images/video-list-2.jpg';
import thumbnail3 from '../../assets/images/video-list-3.jpg';
import thumbnail4 from '../../assets/images/video-list-4.jpg';
import thumbnail5 from '../../assets/images/video-list-5.jpg';
import thumbnail6 from '../../assets/images/video-list-6.jpg';
import thumbnail7 from '../../assets/images/video-list-7.jpg';
import thumbnail8 from '../../assets/images/video-list-8.jpg';

function NextVideoQueue(props) {

    const nextVideoList = [
    {
        id: 1,
        thumbnail: thumbnail1,
        title: 'Become A Travel Pro In One Easy Lesson',
        author: 'Todd Welch'
    },
    {
        id: 2,
        thumbnail: thumbnail2,
        title: 'Les Houches The Hidden Gem Of The Chamonix',
        author: 'Cornelia Blair'
    },
    {
        id: 3,
        thumbnail: thumbnail3,
        title: 'Travel Health Useful Medical Information For',
        author: 'Glen Harper'
    },
    {
        id: 4,
        thumbnail: thumbnail4,
        title: 'Cheap Airline Tickets Great Ways To Save',
        author: 'Emily Harper'
    },
    {
        id: 5,
        thumbnail: thumbnail5,
        title: 'Take A Romantic Break In A Boutique Hotel',
        author: 'Ethan Owen'
    },
    {
        id: 6,
        thumbnail: thumbnail6,
        title: 'Choose The Perfect Accommodations',
        author: 'Lydia Perez'
    },
    {
        id: 7,
        thumbnail: thumbnail7,
        title: 'Cruising Destination Ideas',
        author: 'Timothy Austin'
    },
    {
        id: 8,
        thumbnail: thumbnail8,
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