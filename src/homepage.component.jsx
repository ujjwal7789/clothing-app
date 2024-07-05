import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Jackets</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Denim</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Footwear</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Mens</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Womens</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            
        </div>
    </div>
)

export default HomePage;