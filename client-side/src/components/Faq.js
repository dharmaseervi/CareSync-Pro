import React, { useState } from 'react'

const Faq = () => {
    const [activeDiv, setActiveDiv] = useState(null);
    const handleDivClick = (divId) => {
        setActiveDiv((prevActiveDiv) => (prevActiveDiv === divId ? null : divId))

    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center  p-2 flex-column' style={{ width: '100%', height: '80vh', background: 'rgb(239, 255, 229)' }}>
                <div className='d-flex justify-content-center'>
                    <h1>FAQ'S</h1>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                    <div className='d-flex flex-column justify-content-center ' style={{ width: '80vw' }}>
                        <div className='faq-top' onClick={() => handleDivClick(1)} >
                            <p>Why should I consult Dr. Manik Dalvi?</p>
                            {activeDiv === 1 ? <div>-</div> : <div>+</div>}
                        </div>
                        {activeDiv === 1 ? <div className='faq'>
                            <p>Dr. Manik Dalvi is a specialist in Obstetrics & Gynecology. She has more than 12 years of experience.</p>
                        </div> : null}
                    </div>
                    <div className='d-flex flex-column justify-content-center ' style={{ width: '80vw' }}>
                        <div className='faq-top' onClick={() => handleDivClick(2)}>
                            <p>Why is it best to consult a specialist?</p>
                            {activeDiv === 2 ? <div>-</div> : <div>+</div>}
                        </div>
                        {activeDiv === 2 && <div className='faq'>
                            <p>A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.</p>
                        </div>}
                    </div>
                    <div className='d-flex flex-column justify-content-center ' style={{ width: '80vw' }}>
                        <div className='faq-top' onClick={() => handleDivClick(3)}>
                            <p>How can I book an appointment with Dr. Manik Dalvi?</p>
                            {activeDiv === 3 ? <div>-</div> : <div>+</div>}
                        </div>
                        {activeDiv === 3 && <div className='faq'>
                            <p>You can book an appointment by clicking here.</p>
                        </div>}
                    </div>
                    <div className='d-flex flex-column justify-content-center ' style={{ width: '80vw' }}>
                        <div className='faq-top' onClick={() => handleDivClick(4)}>
                            <p>What are the different modes of consultation?</p>
                            {activeDiv === 4 ? <div>-</div> : <div>+</div>}
                        </div>
                        {activeDiv === 4 && <div className='faq'>
                            <p>Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call. Please click here to book an appointment.</p>
                        </div>}
                    </div>
                    <div className='d-flex flex-column  ' style={{ width: '80vw', height: '100%' }}>
                        <div className='faq-top' onClick={() => handleDivClick(5)}>
                            <p>Are safety guidelines followed in Dr. Manik Dalvi's consultation chamber?</p>
                            {activeDiv === 5 ? <div>-</div> : <div>+</div>}
                        </div>
                        {activeDiv === 5 && <div className='faq'>
                            <p>Yes, our staff and clinic follows all safety protocols and we take appropriate measures to ensure a safe environment for our patients, including social distancing and hand sanitizing stations.</p>
                        </div>}
                    </div>
                    <div className='d-flex flex-column  ' style={{ width: '80vw' }}>
                        <div className='faq-top' onClick={() => handleDivClick(6)}>
                            <p>What if my query is not listed here?</p>
                            {activeDiv === 6 ? <div>-</div> : <div>+</div>}
                        </div>
                        {activeDiv === 6 && <div className='faq'>
                            <p>If you have any more queries that aren't listed, you can email us or call us.</p>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
