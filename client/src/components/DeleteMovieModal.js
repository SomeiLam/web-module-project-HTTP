import React from 'react';

const DeleteMovieModal = (props) => {
    return (<div id="deleteMovieModal">
        <div className="modal-dialog">
            <div className="modal-content show">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" onClick={props.handleNoFunc} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete these records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" onClick={props.handleNoFunc} className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" onClick={props.handleYesFunc} className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;
