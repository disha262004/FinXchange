import React from 'react'

function LeftSection({
    imageURL, 
    productName, 
    prodcutDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
    }) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col p-5'>
                    <img src={imageURL} alt='img'/>
                </div>
                <div className='col p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{prodcutDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}>
                            <img src='media/image/googlePlayBadge.svg' alt='img' />
                        </a>
                        <a href={appStore}>
                            <img src='media/image/appStoreBadge.svg' alt='img'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;