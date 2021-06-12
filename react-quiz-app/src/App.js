import Button from './components/Button';
import Quizlist from './components/Quizlist';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>Quiz</h2>
            <Button name='New Quiz' color='btn btn-primary'/>
          </div>
        </div>
        <div className='col-12'>
          <h3>Quiz List</h3>
            <Quizlist/>
        </div>
      </div>
    </div>
  );
}

export default App;
