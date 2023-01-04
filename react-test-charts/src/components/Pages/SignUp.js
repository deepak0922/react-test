import React from 'react';
// import {
// Form,
// FormContent,
// Logo,
// Label,
// Inputs,
// FormBtn,
// } from './SignUpElements';

import hanu_logo_web from "../Navbar/assets/hanu_logo_web.png";
import '../Pages/SignUp.css';

const SignUp = () => {
	return (
		<>
			<form className='form'>
				<div className='formItems'>
					<p style={{"text-align":"center", "font-size":"larger"}}>Register</p>
					<label htmlFor="text" >Name</label><br />
					<input type="text" name="Name" id="Name" placeholder='Enter Your Name'/><br />
					<label htmlFor="email" >Email</label><br />
					<input type="email" name="Email" id="Email" placeholder='Enter Your Email'/><br />
					<label htmlFor="password" >Password</label><br />
					<input type="password" name="Password" id="Password" placeholder='Enter Your Password'/><br/>
					<button type='submit' name='submit'>SignUp</button>
					<p>Need Help?</p>
				</div>

			</form>



			{/* <Form>
		<FormContent>
		<div>
			<Label>
			<label htmlFor='name'>Enter Your Name</label>
			</Label>
			<Inputs>
			<input typeof='text' id='name' required/>
			</Inputs>
			<Label>
			<label htmlFor='email'>Enter Your Email</label>
			</Label>
			<Inputs>
			<input typeof='email' id='email' required/>
			</Inputs>
			<Label>
			<label htmlFor='name'>Enter Your Password</label>
			</Label>
			<Inputs>
			<input typeof='text' id='name' required/>
			</Inputs>
			<FormBtn>
				SignUp
			</FormBtn>
		</div>
		</FormContent>
	</Form> */}
		</>
	);
};

export default SignUp;
