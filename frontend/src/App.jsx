import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home.jsx'
import SignIn from './components/sign-in/SignIn.jsx'
import SignUp from './components/sign-up/SignUp.jsx'
import ForgotPassword from './components/forgot-password/ForgotPassword.jsx'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="sign-in" element={<SignIn />} />
				<Route path="sign-up" element={<SignUp />} />
				<Route path="forgot-password" element={<ForgotPassword />} />
			</Routes>
		</BrowserRouter>
	)
}
