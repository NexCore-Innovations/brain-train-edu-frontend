// pages/register.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";// Ensure correct import
import Link from "next/link";
import { Typography, TextField, Button } from "@mui/material";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter(); // This should work correctly now

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Basic form validation
  const validateForm = () => {
    let valid = true;
    const errors = { username: "", email: "", password: "", confirmPassword: "" };

    // Validate username
    if (!formData.username) {
      errors.username = "Username is required";
      valid = false;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email";
      valid = false;
    }

    // Validate password
    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate successful registration (for now)
      console.log("Form submitted:", formData);
      router.push("/campus"); // Redirect to login page after successful registration
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <Typography variant="h4" className="text-center text-indigo-600 font-semibold mb-6">
          Register for BrainTrain
        </Typography>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              error={!!errors.username}
              helperText={errors.username}
            />
          </div>

          <div className="mb-4">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </div>

          <div className="mb-4">
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </div>

          <div className="mb-4">
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </div>

          <div className="flex justify-center mb-4">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-full"
            >
              Register
            </Button>
          </div>
        </form>

        <div className="text-center">
          <Typography variant="body2" className="text-gray-600">
            Already have an account?{" "}
            <Link href="/campus">
              Login here
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
