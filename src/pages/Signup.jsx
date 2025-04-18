import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const nameReg = /^[a-zA-Z]{3,}$/;
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, email, password } = formData;
        const newErrors = {};
        if (!nameReg.test(name)) newErrors.name = "Name must be at least 3 characters long and contain only letters.";
        if (!emailReg.test(email)) newErrors.email = "Please enter a valid email address.";
        if (!passwordReg.test(password)) newErrors.password = "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.";
        return newErrors;
    };

    const submitForm = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Form submitted successfully:", formData);
            // Add logic to handle successful form submission (e.g., API call)
        }
    };

    return (
        <div>
            <Header />
            <div className="container-fluid my-5 p-0">
                <div className="d-flex gap-5">
                    <picture><img className="img-fluid rounded-2" src="/src/assets/images/dl.beatsnoop 1.png" alt="signup" /></picture>
                    <div className="d-flex flex-column gap-4 w-50 p-5">
                        <div className="signup-head">
                            <h2>Create an account</h2>
                            <p>Enter your details below</p>
                        </div>
                        <form className="d-flex flex-column gap-4" onSubmit={submitForm}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control w-50 border border-0 border-bottom border-2 rounded-0 ps-0"
                                placeholder="Name"
                            />
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control w-50 border border-0 border-bottom border-2 rounded-0 ps-0"
                                placeholder="Email"
                            />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control w-50 border border-0 border-bottom border-2 rounded-0 ps-0"
                                placeholder="Password"
                            />
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                            <button type="submit" className="btn btn-danger w-50 p-2">Create Account</button>
                        </form>
                        <p>Already have an account? <a className="ms-2" href="#">Sign In</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
