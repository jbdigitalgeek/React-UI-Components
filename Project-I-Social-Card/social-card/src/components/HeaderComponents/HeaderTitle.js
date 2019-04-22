import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const HeaderTitle = () => {
    return (
        <div className="Header-Title">
            <ImageThumbnail />
            <p>@LambdaSchool<time datetime="2019-01-26"></time></p>
        </div>
    );
};

export default HeaderTitle;