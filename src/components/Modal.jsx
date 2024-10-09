export default function Modal({data}) {   

    return(
            
            <div className='modal' id='modal'>
                <div className='modal-content'>
                    <span className='close'>&times;</span>
                    <h2>Modal Header</h2>
                    <p>Modal content</p>
                    {<p>{data.message}</p>}
                </div>
            </div>
    )

}