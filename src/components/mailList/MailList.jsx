import "./mailList.css";

const MailList = () => {

  const emailRegExp = /^[^]+@[^]+\.[a-z]{2,3}$/;

  const subscribe = () => {
    let email = document.getElementById('mail').value;
    if (email === "" || !email.match(emailRegExp)) {
      alert('Please provide valid email')
    } else {
      alert('Subscribed Successfully')
    }
  }

  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input id="mail" type="text" placeholder="Your Email" />
            <button onClick={subscribe} >Subscribe</button>
        </div>
    </div>
  )
}

export default MailList