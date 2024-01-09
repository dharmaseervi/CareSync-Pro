import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import treatment from '../data/treatmentData'

export default function TreatCard(props) {

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8; //items per page
    const endOffset = itemOffset + itemsPerPage; //end page count
    const currentItems = treatment.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(treatment.length / itemsPerPage);



    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % treatment.length;
        setItemOffset(newOffset);
    };


    return (
        <>
            <div className='res-treat d-flex flex-column align-items-center' >
                <div className='res-treat-main d-flex flex-wrap justify-content-evenly gap-2 m-2 p-2' style={{ width: '100%' }} >
                    {currentItems.map((variant) => (
                        <Link style={{ width: "20rem", height: "15rem", textDecoration: "none" }} to="/treatment-details" onClick={() => { props.setTreat(variant) }} className='res-link bg-success bg-opacity-25 m-2' key={variant.title}>
                            <div className="res-treat-card border border-black" style={{ width: "100%", height: "15rem" }}>
                                <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "15rem", width: "100%" }}>
                                    <img className="d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px', border: '2px solid green', borderRadius: '50%', margin: '5px', color: 'green' }} src={variant.image} alt='...' />
                                    <h5 className='text-center m-2 text-dark'>{variant.title}</h5>
                                    <p className='text-center text-dark'>{variant.subTitle}</p>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
                {(props.show === true) ?
                    <div className=''>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< prev"
                            renderOnZeroPageCount={null}
                            containerClassName='paginate'
                            previousClassName='page'
                            nextClassName='page'
                            activeClassName='active'
                            pageClassName='page'
                        />
                    </div> : <Link className='btn btn-outline-success mt-3 p-2' to="/treatment">View More</Link>}
            </div>

        </>
    )
}
