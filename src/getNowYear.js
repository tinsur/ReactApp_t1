import './getNowYear.css'
export function GetNowYear() {
    return (
        <div className='date'>
            {new Date().getFullYear()}г.
        </div>
    );
}