import './Signin.css'

function Signin() {
    return (
        <div id="signinform">
            <h2>Sign in with Email</h2>
            <form action="" method="POST">
                <input type="email" name="email" id="emailinput" placeholder="Email"/>
                <input type="password" name="password" id="passwordinput" placeholder="Password"/>
                <input type="submit" value="Sign in" />
                <a href="/">Cancel and go home</a>
            </form>
        </div>
    )
}

export default Signin