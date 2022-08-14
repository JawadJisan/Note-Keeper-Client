import React from 'react'

function TopBar({ setNote }) {
    return (
        <div>
            <div className='mt-[40px]  '>
                <div className='text-center'>
                    <label for="addNote" class="btn btn-success btn-xl w-2/5 modal-button" onClick={() => setNote(true)}>Take a note...</label>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl dark:text-white'>Your Notes</h2>
            </div>
        </div>
    )
}

export default TopBar