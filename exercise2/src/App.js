import React from "react";
import users from "../src/data/users.json";
import formInputs from "../src/data/formInputs.json";
import "./App.css";

function renderUser(user) {
  const nameStyle = {
    color: user.gender === "Male" ? "blue" : "red",
  };

  return (
    <div className="max-w-xs border rounded-lg m-2 p-2">
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={user.avatar}
          alt={user.first_name}
        />
        <h5
          className="mb-1 text-xl font-medium text-gray-900"
          style={nameStyle}
        >
          {user.first_name}
        </h5>
        <span className="text-sm text-gray-500">{user.last_name}</span>
        <p className="mt-4">{user.gender}</p>
      </div>
    </div>
  );
}

function renderUsers() {
  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user, id) => (
        <div key={id}>{renderUser(user)}</div>
      ))}
    </div>
  );
}

const renderTextField = (input) => {
  return (
    <div className="m-2" key={input.id}>
      <label className="p-3">{input.label}</label>
      <br />
      <input
        className="border rounded w-[80%] p-2 text-gray-900"
        type="text"
        id={input.name}
        name={input.name}
        required={input.required}
        placeholder={input.placeholder}
      />
    </div>
  );
};

const renderEmailField = (input) => {
  return (
    <div className="m-2" key={input.id}>
      <label className="p-3">{input.label}</label>
      <br />
      <input
        className="border rounded w-[80%] p-2 text-gray-900"
        type="email"
        id={input.name}
        name={input.name}
        required={input.required}
        placeholder={input.placeholder}
      />
    </div>
  );
};

const renderPasswordField = (input) => {
  return (
    <div className="m-2" key={input.id}>
      <label className="p-3">{input.label}</label>
      <br />
      <input
        className="border rounded w-[80%] p-2 text-gray-900"
        type="password"
        id={input.name}
        name={input.name}
        required={input.required}
        placeholder={input.placeholder}
      />
    </div>
  );
};

const renderSelectField = (input) => {
  const options = input.options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className="m-2" key={input.id}>
      <label className="p-3">{input.label}</label>
      <br />
      <select
        className="border rounded w-[80%] p-2 text-gray-900"
        id={input.name}
        name={input.name}
        required={input.required}
      >
        {options}
      </select>
    </div>
  );
};

const renderRadioField = (input) => {
  const radioOptions = input.options.map((option) => (
    <div className="m-2" key={option.value}>
      <input
        type="radio"
        id={option.value}
        name={input.name}
        value={option.value}
      />
      <label>{option.label}</label>
    </div>
  ));

  return (
    <div className="m-2" key={input.id}>
      <label>{input.label}</label>
      <br />
      <div className="flex">{radioOptions}</div>
    </div>
  );
};

const renderForm = (inputs) => {
  const formFields = inputs.map((input) => {
    switch (input.type) {
      case "text":
        return renderTextField(input);
      case "email":
        return renderEmailField(input);
      case "password":
        return renderPasswordField(input);
      case "select":
        return renderSelectField(input);
      case "radio":
        return renderRadioField(input);
      default:
        return null;
    }
  });

  return <form>{formFields}</form>;
};

function App() {
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 1, name: "User 1 (Duplicate)" },
    { id: 4, name: "User 4" },
  ];

  const renderUser = () => {
    return users.map((user) => <div key={user.id}>{user.name}</div>);
  };
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        {renderUsers()}
      </div>

      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="w-[25%] h-auto bg-slate-500 p-4 rounded-lg">
          {renderForm(formInputs)}
        </div>
      </div>

      <div>{renderUser()}</div>
    </div>
  );
}

export default App;
