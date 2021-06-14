import { useState, useRef } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IconPicker } from 'react-fa-icon-picker';

const Addquiz = () => {
    const [icon, setValue] = useState('FaAdobe');  
    const [description, setData] = useState('');
    const inputEl = useRef(null);
    const quizInfo = ( ) => {
        let quiz = {
            quizmetaInfo: {
                title: inputEl.current.value,
                description, icon
            }
        };
        localStorage.setItem('quiz', JSON.stringify(quiz));        
    }    
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4 position-fixed bg-light'>
                    <div className='d-flex justify-content-center flex-column full-height'>
                        <h4>Icon</h4>
                        <h3>Name and Description</h3>
                        <p>Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisl, eget vehicula lorem sodaleeget. Donec quis volutpat orci.</p>
                    </div>
                </div>
                <div className='col-sm-8 offset-sm-4'>
                    <div className='p-5'>
                        <form>
                            <div class="form-group mb-3">
                                <label>Title</label>
                                <input ref={inputEl} type="text" class="form-control"  placeholder="Enter Quiz Name" />
                            </div>
                            <div class="form-group mb-3">
                                <label>Description</label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data="<p>Description</p>"
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const description = editor.getData();
                                        setData(description);
                                    }}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label>Featured Image</label>
                                <IconPicker value={icon} onChange={(v) => setValue(v)} />
                            </div>
                            <button className='btn btn-primary' type='button' onClick={quizInfo}>Save and Continue</button>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addquiz;