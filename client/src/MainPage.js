import React from 'react';
import connekt_transparen from './connekt_transparent_320x100px-01.png';
import screensht from './screen_shot_2022-10-30_at_12.25.22_pm.png';
import Events from './Events';

function MainPage() {
    return (
        <div className="px-4 py-1 my-2 text-center">
            <h1 className="display-4 fw-bold" style={{
                color: "#198754"
            }}>
                <div>
                <img className='img-fluid' src={connekt_transparen} alt="CNKT_Logo" />
                </div>
                <div>
                <img className='img-fluid' src={screensht} alt="screensht" />
                </div>
                <div> </div>
                <div></div>

            </h1>
        </div>

    );
}

export default MainPage;
