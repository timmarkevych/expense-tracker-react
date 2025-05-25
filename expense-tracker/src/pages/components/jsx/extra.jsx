import '../css/extra.css'
import { data } from './chart';

function Extra () {

    return (
        <div className='extras'>
            <h2 className='sub-title'>and this is how you spent it:</h2>
            <ul className='expenses-list'>
                <li className='expense-item'><div className='expense-category' style={{ backgroundColor: '#4ECDC4' }}></div>Rent:<p className='expense-sum'>1382$</p></li>
                <li className='expense-item'><div className='expense-category' style={{ backgroundColor: '#FF6B6B' }}></div>Nutrition:<p className='expense-sum'>453$</p></li>
                <li className='expense-item'><div className='expense-category' style={{ backgroundColor: '#EDEDED' }}></div>Other expenses:<p className='expense-sum'>983$</p></li>
            </ul>
        </div>
    );
}

export default Extra;
