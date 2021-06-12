import { Link } from 'react-router-dom';
import Button from './Button';
import Quizlist from './Quizlist';

const Home = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>Quiz</h2>
                        <Link to='/quiz'><Button name='Add New Quiz' color='btn btn-primary' /></Link>
                    </div>
                </div>
                <div className='col-12'>
                    <h3>Quiz List</h3>
                    <Quizlist />
                </div>
            </div>
        </div>
    )
}

export default Home;