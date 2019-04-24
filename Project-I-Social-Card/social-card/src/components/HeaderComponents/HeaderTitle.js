import React from 'react';
import './Header.scss';
import ImageThumbnail from './ImageThumbnail';

const HeaderTitle = () => {
    return (
        <section className="Header-Title">
            <ImageThumbnail />
                <h1>Lambda School</h1>
            <h2>@LambdaSchool - 26 jan</h2>
        </section>
    );
};

export default HeaderTitle;