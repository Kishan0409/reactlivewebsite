import React from 'react';

const Searchresult = (props) => {
    const img = `https://source.unsplash.com/400x300?${props.name}`;
    return (
        <>
            <img src = {img} alt="kishan" />
        </>
    )
}
export default Searchresult;