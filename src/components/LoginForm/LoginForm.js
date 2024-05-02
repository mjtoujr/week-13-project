import './LoginForm.css'; {/*Link to the styling*/}

export default function LoginForm() {
  return (
    <div className='login-form'>
        <h3>Log In</h3> {/*Title here, followed by a form, with two inputs and a submit button.*/}
        <form> 
            <div className='form-group'>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' placeholder='Username Here'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' placeholder='Password'></input>
            </div>
            <button type='submit'>Log In!</button>
        </form>
    </div>
  );
};
