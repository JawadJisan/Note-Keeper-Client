import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function AddNote({ setNote, refetch }) {
    const handleAddNote = async e => {
        e.preventDefault();
        const category = e.target.category?.value;
        const newCategoryArray = category.split(",");
        const newNote = await {
            title: e.target.title?.value,
            category: newCategoryArray,
            details: e.target.details.value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }
        const response = await axios.post('https://todolistserver-3gc5.onrender.com/note', newNote);
        console.log(response);
        if (response.status === 200) {
            toast.success("Wow so easy!");
            refetch();
            setNote(false);
        } else {
            toast.error(response.status);
            setNote(false);
        }
        e.target.reset();
    }
    return (
        <>
            <input type="checkbox" id="addNote" class="modal-toggle" />
            <div class="modal dark:bg-[#00000acf]">
                <div class="modal-box dark:text-white  dark:bg-[#212730] relative">
                    <form onSubmit={handleAddNote}>
                        <label for="addNote" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <input spellCheck={false} required name='title' type="text" placeholder="Add Note Title" class="add-note-title" />
                        <input spellCheck={false} name='category' type="text" placeholder="Category, for more category use comma" class="add-note-category" />
                        <textarea spellCheck={false} rows={30} required name='details' class="add-note-textarea text-[16px]" placeholder="your note details" style={{ fontWeight: 300 }}></textarea>
                        <button type='submit' className='w-full block btn dark:bg-green-600 dark:hover:bg-green-800  mt-[20px]'>Add Note</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNote