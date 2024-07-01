import {Card,ConfigProvider} from "antd";
function Contact(){
    return(
        <>
        <div className="row-divider">
        <ConfigProvider>
        <Card className="contact" hoverable>
        <h4 style={{color:" #702963"}}>Contact us</h4>
        <p>We will get back to you asap!</p>
            <form>
            <div class="row pt-3">
            <div class="col-md-4">
                <label for="fulname"  className="form-label required">Fullname</label>
            </div>
            <div class="col-md-4">
                <input type="text" class="form-control" id="fname" name="fname" required/>
                <label for="fname">firstname</label>
            </div>
            <div class="col-md-4">
                <input type="text" class="form-control" id="lname" name="lname"/>
                <label for="lname">lastname</label>
            </div>
            </div>
            <div class="row pt-3">
            <div class="col-md-4">
                <label for="mail" class="required">Email</label>
            </div>
            <div class="col-md-4">
                <div class="input-group mb-3">
                    <input type="email" class="form-control" id="mail" name="mail"/>
                    <span class="input-group-text">@gmail.com</span>
                </div>
            </div>
            </div>
            <div class="row pt-3">
            <div class="col-md-4">
                <label for="phnum"  className="form-check-label required">Contact number</label>
            </div>
            <div class="col-md-4">
                <div class="input-group mb-3">
                    <span class="input-group-text">91</span>
                    <input type="text" class="form-control" id="phnum" name="phnum"/>
                </div>
            </div>
            </div>
            <button type='button' className='btn btn-basic'>Submit</button>
            </form>
        </Card>
        </ConfigProvider>  
        </div>
        </>
    );
}
export default Contact;