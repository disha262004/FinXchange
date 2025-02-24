import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 border-bottom mb-5'>
            <div className='row text-center mt-5 p-3'>
                <h1 className='mb-4'>FinXchange Products</h1>
                <p className='mb-4 fs-5 '>Sleek, modern, and intuitive trading platforms</p>
                <p className="fs-6 text-muted">Check out our <a href='invest' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;