import React, { useState } from 'react'


const GetStartEndLoc = (props) => {
    const { propSubmit } = props
    const [start, setStart] = useState({ city: "", state: "" });
    const [end, setEnd] = useState({ city: "", state: "" });

    const startChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setStart({ ...start, [name]: value });
    }
    const endChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEnd({ ...end, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        propSubmit(start, end);
        setStart({ city: "", state: "" });
        setEnd({ city: "", state: "" });
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='d-flex justify-content-evenly'>
                    <div>
                        <h1>Origin</h1>
                        <div className='d-flex justify-content-between align-items-center' style={{ gap: "1em" }}>
                            <div>
                                <label htmlFor="city">City: </label> <br /> <br />
                                <label htmlFor="state">State: </label>
                            </div>
                            <div>
                                <input type="text" name='city' value={start.city} onChange={(e) => startChange(e)} /> <br /> <br />
                                <input type="text" name='state' value={start.state} onChange={(e) => startChange(e)} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Destination</h1>
                        <div className='d-flex justify-content-between align-items-center' style={{ gap: "1em" }}>
                            <div>
                                <label htmlFor="city">City: </label> <br /> <br />
                                <label htmlFor="state">State: </label>
                            </div>
                            <div>
                            <input type="text" name='city' value={end.city} onChange={(e) => endChange(e)} /> <br /> <br />
                            <input type="text" name='state' value={end.state} onChange={(e) => endChange(e)} />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <button className='btn btn-dark'>Submit Locations</button>
            </form>
        </div>
    )
}

export default GetStartEndLoc