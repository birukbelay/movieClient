import React from "react";

export const DeleteItem = ({display, setDisplay, item, deleteItem}) => {

    const Style = {
        display: display ? `block` : 'none',
        top: '25%',
        left: '40%',
        position: 'fixed',
        width:'40%'

        // left: '50%'
    }
    const handleDelete = () => {
        deleteItem(item.id)

        setDisplay(false)
    }


    return (
        <div className="modal fade show " tabIndex="-1" aria-modal="true" role="dialog" style={Style}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Delete</h5>
                    <button onClick={() => setDisplay(false)} type="button" className="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete: {item.name}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={() => setDisplay(false)} type="button" className="btn btn-secondary"
                            data-dismiss="modal">Close
                    </button>
                    <button onClick={handleDelete} type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}