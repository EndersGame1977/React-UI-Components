import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className='header-title'>
            <div className='title-stamp'>
                <h1>Lambda School</h1>
            </div>
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;