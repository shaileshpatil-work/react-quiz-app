import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState, useRef } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IconPicker } from 'react-fa-icon-picker';

const Addquiz = () => {
    const inputEl = useRef(null);
    const [error, showError] = useState(false);
    const history = useHistory();
    let { state } = useLocation();
    const [icon, setValue] = useState(state ? state.icon : 'FaAdobe');
    const [description, setData] = useState(state ? state.description : "<p>Description</p>");
    const [title, setTitle] = useState(state ? state.title : "Enter Quiz Title");
    const quizInfo = (e) => {
        e.preventDefault();
        if (localStorage.getItem('quiz')) {
            let quiz = JSON.parse(localStorage.getItem('quiz')); 
            let id = Math.floor(Math.random() * 100);
            if (title && id && icon && description) {
                let quiz1 = {                
                    quizMetaInfo: {
                        title,
                        description, 
                        icon,
                        quizSubmitted: false,
                        id
                    },
                    quizList: []
                }           
                localStorage.setItem('quiz', JSON.stringify([...quiz, quiz1]));
                history.push({
                    pathname: '/add_questions',
                    state: quiz1
                });
            } else {
                showError(true);
            }
        }
       else {
            let id = Math.floor(Math.random() * 100);
            if (title && id && icon && description) {
                let quiz = [
                    {
                        quizMetaInfo: {
                            title,
                            description,
                            icon,
                            quizSubmitted: false,
                            id
                        },
                        quizList: []
                    }
                ];
                localStorage.setItem('quiz', JSON.stringify(quiz));
                history.push({
                    pathname: '/add_questions',
                    state: quiz
                });
            } else {
                showError(true);
            }        
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
                                <input ref={inputEl} type="text" class="form-control" value={title} onChange={(e) => setTitle(e.target.value) }/>
                            </div>
                            <div class="form-group mb-3">
                                <label>Description</label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={description}
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
                            {error ? <p className='text-danger'>Please fill all fields</p> : ''}
                            <div className="d-flex justify-content-between">
                                <Link to='/'><button className='btn btn-primary'>Previous</button></Link>
                                <button className='btn btn-primary' onClick={(e) => quizInfo(e)}>Save and Continue</button>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addquiz;