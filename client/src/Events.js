import React from "react";

function Events({item}) {
    return (
        <>
        <div className="container border border-secondary">
            <h1>{item.eventTitle}</h1>
            <div>
                {item.hostName} <br />
                {item.eventLocation} <br />
                {item.eventDateTime} <br />
                Capacity: {}
                {item.attendees} / {item.capacity} <br />

            </div>
            </div>
            
            </>
);
}

export default Events;
