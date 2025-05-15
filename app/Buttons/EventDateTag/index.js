import './styles.css';

export function EventDateTag({ month, date }) {
    return (
                <div className='event-date-container'>
                    <div className='event-tag-content'>
                        <p className='event-tag-month'>{month}</p>
                        <br></br>
                        <p className='event-tag-date'>{date}</p>
                    </div>
                </div>
        );
    }