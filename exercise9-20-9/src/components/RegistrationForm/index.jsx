import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import cities from "../../data/cities.json";
import skills from "../../data/skills.json";
import weakPasswords from "../../data/weak-passwords.json";
import oldEmails from "../../data/old-email.json";
import "./style.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    gender: "",
    skills: [],
  });

  const [errors, setErrors] = useState({});

  const validateFullName = (value) => {
    const regex = /^[\u0600-\u06FF\s]+$/;
    if (!value) {
      return "نام و نام خانوادگی اجباری است.";
    } else if (!regex.test(value.trim())) {
      return "نام و نام خانوادگی باید فقط شامل حروف فارسی باشند";
    }
    return "";
  };

  const validateEmail = (value) => {
    if (!value) {
      return "ایمیل اجباری است";
    } else if (oldEmails.includes(value)) {
      return "ایمیل وارد شده تکراری است";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "ساختار ایمیل معتبر نیست";
    }
    return "";
  };

  const validatePassword = (value) => {
    if (!value) {
      return "رمزعبور اجباری است";
    } else if (value.length < 12) {
      return "طول رمزعبور باید حداقل 12 کاراکتر باشد";
    } else if (
      !/[A-Z]+/.test(value) ||
      !/[a-z]+/.test(value) ||
      !/\d+/.test(value)
    ) {
      return "رمزعبور باید حداقل شامل یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی و یک عدد باشد";
    } else if (weakPasswords.includes(value)) {
      return "رمز عبور ضعیف است";
    }
    return "";
  };

  const validateConfirmPassword = (value) => {
    if (!value) {
      return "تکرار رمزعبور اجباری است";
    } else if (value !== formData.password) {
      return "تکرار رمزعبور باید دقیقاً مشابه رمزعبور باشد";
    }
    return "";
  };

  const validateCity = (value) => {
    if (!value) {
      return "شهر محل سکونت اجباری است";
    } else if (!cities.includes(value)) {
      return "شهر محل سکونت باید حتماً یکی از شهرهای موجود باشد";
    }
    return "";
  };

  const validateGender = (value) => {
    if (!value) {
      return "جنسیت اجباری است";
    } else if (!["male", "female", "notSpecified"].includes(value)) {
      return "جنسیت باید یکی از مقادیر موجود باشد";
    }
    return "";
  };

  const validateSkills = (value) => {
    if (!value || value.length === 0) {
      return "مشخص کردن حداقل یک مهارت اجباری است";
    } else if (!value.every((skill) => skills.includes(skill))) {
      return "برخی مهارت‌های انتخاب شده، در لیست مهارت‌های قابل انتخاب نیستند";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullNameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.confirmPassword
    );
    const cityError = validateCity(formData.city);
    const genderError = validateGender(formData.gender);
    const skillsError = validateSkills(formData.skills);

    const newErrors = {
      fullName: fullNameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
      city: cityError,
      gender: genderError,
      skills: skillsError,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== "")) {
      console.log("Register Successful");
      console.log(formData);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      city: "",
      gender: "",
      skills: [],
    });
    setErrors({});
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className="container">
      <div className="content">
        <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
          <div className="user-details1">
            <div className="w-full">
              <Input
                type="text"
                id="fullName"
                label="Full Name"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
              />
              <div className="error">{errors.fullName}</div>
            </div>

            <div className="w-full">
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <div className="error">{errors.email}</div>
            </div>

            <div className="w-full">
              <Input
                id="password"
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
              <div className="error">{errors.password}</div>
            </div>

            <div className="w-full">
              <Input
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
              />
              <div className="error">{errors.confirmPassword}</div>
            </div>
            </div>

            <div className="user-details2">   

            <div className="w-full">
              <p className="info">City</p>
              <select
                className="select"
                name="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                onBlur={() =>
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    city: validateCity(formData.city),
                  }))
                }
              >
                <option value="">Select your city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="error">{errors.city}</div>
            </div>
            

            <div className="radio-group">
              <p className="info">Gender</p><br/>
              <div className="w-full">
                <Input
                  className="radio_input"
                  type="radio"
                  label="Male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={() => handleInputChange("gender", "male")}
                />
                <Input
                  className="radio_input"
                  type="radio"
                  label="Female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={() => handleInputChange("gender", "female")}
                />
                <Input
                  className="radio_input"
                  type="radio"
                  label="Prefer not to say"
                  name="gender"
                  value="notSpecified"
                  checked={formData.gender === "notSpecified"}
                  onChange={() => handleInputChange("gender", "notSpecified")}
                />
              </div>
              <div className="error">{errors.gender}</div>
            </div>

            <div>
              <p className="info">Skills</p>
              <br />
              <div className="checkbox-group grid">
                {skills.map((skill) => (
                  <div key={skill}>
                    <Input
                      className="check_input"
                      type="checkbox"
                      name="skills"
                      id={skill}
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={() =>
                        handleInputChange(
                          "skills",
                          formData.skills.includes(skill)
                            ? formData.skills.filter((s) => s !== skill)
                            : [...formData.skills, skill]
                        )
                      }
                    />
                    <label htmlFor={skill}>{skill}</label>
                  </div>
                ))}
              </div>
              <div className="error">{errors.skills}</div>
            </div>
            </div>
         

          <div className="flex">
            <Button type="submit">Register</Button>
            <Button type="reset">Clear All </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
