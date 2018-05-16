import React from 'react';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';

const Contact = () => {
    return (
        <div className="jumbotron">
            <div>
                <h3><u>Contacts</u></h3>   
            </div>
            <div>
                +91 93344 21724, +91 99340 08362
            </div>
            <div>
                <p>Road No. 2, Mahesh Nagar, Patna H.O., Patna - 800024
                Contact Person
                Rajiv Sharma
                Working hours
                Monday - Saturday: 10 AM - 6 PM
                Email
                sale@swastik-india.com</p>
                (Map)
            </div>
            <div>
                <h3><u>Business Hours</u></h3>   
            </div>
            
            <div>
                Hours of Operation
            </div>
            <div>
                09:00 am - 09:00 pm 
            </div>
            <div>
                <h3><u>Contact Form</u></h3>   
            </div>
            <div>
                <TextInput label="Name"/>
            </div>
            <div>
                <TextInput label="Email"/>
            </div>
            <div>
               <TextArea 
                    title={"Message"}
                    rows={5}
                    resize={false}
               />
            </div>
            <div>
                <input
                    type="submit"
                    value="Submit"
                />
                <button>Clear
                </button>
            </div>
        </div>
    );
};

export default Contact;

/*
We used a Stateless functional component (hence the arrow function) above. We use them for components that 
render only static content to a webpage as opposed to components that render stateful/changing content.
Details

    
    Address
    Road No. 2, Mahesh Nagar, Patna H.O., Patna - 800024 Get Directions
    Contact Person
    Rajiv Sharma
    Working hours
    Monday - Saturday: 10 AM - 6 PM
    Email
    sale@swastik-india.com
*/