import { useState, useRef } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IconPicker } from 'react-fa-icon-picker';

const Addquiz = () => {
    const [icon, setValue] = useState('FaAdobe');  
    const [description, setData] = useState('');
    const inputEl = useRef(null);
    const quizInfo = ( ) => {
        if (localStorage.getItem('quiz')) {
            let quiz = JSON.parse(localStorage.getItem('quiz'));            
            let quiz1 = {                
                quizmetaInfo: {
                    title: inputEl.current.value,
                    description, 
                    icon,
                    quizSubmitted: false
                },
                quizList: []
            }                     
            localStorage.setItem('quiz', JSON.stringify([...quiz, quiz1]));
        }
       else {
            let quiz = [
                {
                    quizmetaInfo: {
                        title: inputEl.current.value,
                        description, 
                        icon,
                        quizSubmitted: false
                    },
                    quizList: []
                }
            ];
            localStorage.setItem('quiz', JSON.stringify(quiz));
       }      
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
                    <div className='full-height d-flex justify-content-center align-items-center'>
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