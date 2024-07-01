function BookTicket(){
    function ClickAndBook(){
        alert("Your ticket has been Booked🎫 Happy Watching!🎉")        
    }
    return(
        <>
        <button type='button' className='btn btn-basic' onClick={ClickAndBook}>Book Tickets</button><br/>
        </>
    );
}
export default BookTicket;