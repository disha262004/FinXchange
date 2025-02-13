import React from 'react'

function RightSection({
    imageURL, 
    productName, 
    prodcutDescription, 
    learnMore,
    }) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col p-5 mt-5'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p>{prodcutDescription}</p>
                    <div>
                        <a href={learnMore}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col p-5'>
                    <img src={imageURL} alt='img'/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;