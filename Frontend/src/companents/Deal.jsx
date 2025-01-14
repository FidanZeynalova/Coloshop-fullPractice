import React from 'react'

function Deal() {
    return (
        <div className='Deal'>
            <div className="deal">
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png.webp" alt="" />
                </div>
                <div className="container">
                    <h1>Deal Of The Week</h1>
                    <div className="span"> </div>
                    <div className="spans">
                        <p>2 <span>Day</span></p>
                        <p>23 <span>Hours</span></p>
                        <p>15 <span>Mins</span></p>
                        <p>32 <span>Sec</span></p>
                    </div>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Deal
