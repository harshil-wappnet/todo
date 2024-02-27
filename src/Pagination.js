import React, { useState } from 'react'
import AwardsData from './Jsondata';

function Pagination() {
    const [curretnPage, setCurrentPage] = useState(1);
    const recordsPerPage = 1;
    const lastIndex = curretnPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = AwardsData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(AwardsData.length / recordsPerPage);
    const numbers = [...Array(totalPages + 1).keys()].slice(1);
    const prevPage = () => {
        if (curretnPage !== 1) {
            setCurrentPage(curretnPage - 1);
        }
    }

    const changePage = (index) => {
        setCurrentPage(index);
    }

    const nextPage = () => {
        if (curretnPage !== totalPages) {
            setCurrentPage(curretnPage + 1);
        }
    }
    return (
        <div>
            <table style={{ border: "1px solid black" }}>
                <thead style={{ border: "1px solid black" }}>
                    <th>Title</th>
                    <th>Description</th>
                </thead>
                <tbody style={{ border: "1px solid black" }}>
                    {records.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className='pagination'>
                <li className='page-item'><a href="#" className='page-link' onClick={prevPage}>Prev</a></li>
                {numbers.map((n, index) => (
                    <li className={`page-item ${curretnPage === n ? "bg-black" : ""}`} key={index}><a href="#" className='page-link' onClick={changePage}>{n}</a></li>
                ))}
                <li className='page-item'><a href="#" className='page-link' onClick={nextPage}>Next</a></li>
            </ul>
        </div >
    )
}

export default Pagination
