import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { Link } from 'react-router-dom';

const AddQuestions = () => {    
    let {state} = useLocation();
    if(Array.isArray(state)){
        state = state[0].quizMetaInfo
    } else {
        state = state.quizMetaInfo
    }

    const [btnState, setBtnState] = useState(true);  
    const multipleChoice = () => {
        setBtnState(false);        
    }
        
    let questionOptions;  
    const onTextChange = (e) => {
        questionOptions = e.target.value.split('\n'); 
    }
    
    let quizObject;
    const inputEl = useRef(null);
    const addQuizQuestions = () => {
        let question = inputEl.current.value;

        if (localStorage.getItem('quiz')) {
            let quiz = JSON.parse(localStorage.getItem('quiz'));
            quizObject = quiz.find(x => x.quizMetaInfo.id === state.id);              
            let questionInfo = {
                question,
                questionOptions
            }
            quizObject.quizList.push(questionInfo);
            localStorage.setItem('quiz', JSON.stringify(quiz));
        }
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4 position-fixed'>
                    <div className='text-center p-2 border d-flex'>
                        {btnState ? null : <button onClick={() => setBtnState(true)}>Back</button>}
                         <h5>Add a Question</h5>
                     </div>
                    <div className='bg-light full-height p-3'>                                               
                        {
                            btnState ?                              
                                <div className="btns">
                                    <button className='m-2' onClick={() => multipleChoice()}>Multiple Choice</button>
                                    <button className='m-2' onClick={() => setBtnState(false)}>Text</button>
                                </div> :
                                <form>
                                    <div class="form-group mb-3">
                                        <input ref={inputEl} type="text" class="form-control" placeholder="Enter Question" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label>Answer Choices</label>
                                        <textarea onKeyUp={(e) => onTextChange(e)} class="form-control" placeholder="Leave a comment here"></textarea>
                                    </div>
                                    <div>
                                        <label>Options</label>
                                    </div>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" />
                                        <label class="form-check-label">Multiple Choices can be correct</label>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label>Correct Answer</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            btn
                                        </label>
                                    </div>
                                </form>
                        }
                    </div>
                </div>
                <div className='col-sm-8 offset-sm-4'>
                    <div className='text-center p-2 border'>
                        <h5>{state.title}</h5>
                    </div>
                </div> 
                <div className="d-flex justify-content-between fixed-bottom mb-2">
                    <Link to='/quiz'><button className='btn btn-primary'>Previous</button></Link>
                    <button className='btn btn-primary' type='button' onClick={addQuizQuestions}>Save and Continue</button>
                </div>
            </div>
        </div>
    )
}

export default AddQuestions;