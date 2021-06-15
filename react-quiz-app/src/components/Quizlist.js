import Button from '../components/Button';
import { IconPickerItem } from 'react-fa-icon-picker'

const Quizlist = () => {
    let quizMetaArray = [];
    if (localStorage.getItem('quiz')) {
        let quiz = JSON.parse(localStorage.getItem('quiz'));
        for(let i=0; i < quiz.length; i++){
            quizMetaArray.push(quiz[i].quizmetaInfo);
        }        
    } else {
        return <p>Zero Quiz Present</p>
    }
    return (
        <ol className='p-0'>
            {
                quizMetaArray.map((item) => {
                    return (
                        <li key={item.id} className='row pb-2 border-bottom pt-2 align-items-center'>
                            <span className='col-sm-1'><IconPickerItem icon={item.icon} size={24} color="#000" /></span>
                            <h4 className='col-sm-9 mb-0'>{item.title}</h4>
                            <div className='col-sm-2'>
                                {item.quizSubmitted ? <Button name='View Insights' width='w-100'/> : <Button name='Take the Quiz' color='btn btn-primary' width='w-100'/>}
                            </div>
                        </li>
                    )
                })
            }
        </ol>
    )
}

export default Quizlist;