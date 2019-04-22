import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const HeaderTitle = () => {
    return (
        <section className="Header-Title">
            <ImageThumbnail />
                <h1>Lambda School</h1>
            <h2>@LambdaSchool<time dateTime="2019-01-26"></time></h2>
        </section>
    );
};

export default HeaderTitle;