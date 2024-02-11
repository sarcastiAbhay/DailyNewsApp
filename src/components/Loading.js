import React, { Component } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <>
                <div className='d-flex justify-content-center align-items-center' style={{ height: 100 }}>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>   
            </>
        )
    }
}
