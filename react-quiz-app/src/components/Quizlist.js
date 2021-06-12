import Button from '../components/Button';

const Quizlist = () => {
    const quizItems = [
        { icon : 'icon', title: 'title', quizSubmitted: true },
        { icon: 'icon1', title: 'title1', quizSubmitted: true },
        { icon: 'icon2', title: 'title2', submitted: false }
    ];
    return (
        <ol className='p-0'>
            {
                quizItems.map((item) => {
                    return (
                        <li key={item} className='row pb-2 border-bottom pt-2 align-items-center'>
                            <span className='col-sm-2'>{item.icon}</span>
                            <h4 className='col-sm-8 mb-0'>{item.title}</h4>
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