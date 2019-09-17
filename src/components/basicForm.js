import React from "react"
import sgMail from '@sendgrid/mail'

class BasicForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', isOptedIn: true};
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      buttonStyle = {
        width: '30%',
        height: '47', 
        fontStyle: 'normal', 
        fontWeight: 'bold', 
        lineHeight: '47px',
        fontSize: '16px', 
        display: 'block', 
        background: '#8953B7',
        textAlign: 'center',
        color: '#ffffff',
        borderRadius: '4px',
        margin:'auto'
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({[name]: value});
    }
    
    handleSubmit(event) {

        // sgMail.setApiKey(');
        // console.log(event.target)

        // const msg = {
        //     to: 'aupchurch167@gmail.com' ,
        //     from: 'goreadleo@gmail.com',
        //     subject: '[Leo] Download the iOS Beta - go read',
        //     text: 'Follow this link. https://testflight.apple.com/join/kw2whfjH -Adam',
        //     html: `
        //         <p>Hey, thanks for downloading Leo!<p/>
        //         <p> I hope you enjoy it</p>
        //         <p>Follow this link. https://testflight.apple.com/join/kw2whfjH </p>
        //         <p>If you'd like to contribute and let me know how I can make it better, grab some time on my calendar here: </p>
        //         <p>https://calendly.com/readleo/chat</p>
        //         <p>Adam</p>
        //     `,
        // };
        // sgMail.send(msg);
        // event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder='name' value={this.state.name} onChange={this.handleInputChange} />
                <input type='email' name='email' placeholder='email' value={this.state.email} onChange={this.handleInputChange} />
                <input style={this.buttonStyle} type="submit" value="Submit" />
            </form>
        )}
    }

export default BasicForm
