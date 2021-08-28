import { useState } from "react";
import styles from "./Auth.module.css";

export default function Auth() {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [input, setInput] = useState({});

  const handleInput = ({ currentTarget }) => {
    setInput({ ...input, [currentTarget.id]: currentTarget.value });
  };

  return (
    <main className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.brandText}>dokto.</h1>
        <h3 className={styles.subtitle}>
          {!isLoginForm ? "Create a new account" : "Welcome back!"}
        </h3>
        <form>
          {!isLoginForm && (
            <div
              className={`${styles.inputContainer} ${styles.inputContainerGrid}`}
            >
              <div className={styles.inputCol}>
                <label className={styles.inputLabel} htmlFor="firstName">
                  First Name
                </label>
                <input
                  className={styles.inputField}
                  type="text"
                  placeholder="eg: John"
                  id="firstName"
                  value={input.firstName}
                  onChange={handleInput}
                />
              </div>
              <div className={styles.inputCol}>
                <label className={styles.inputLabel} htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className={styles.inputField}
                  type="text"
                  placeholder="eg: Doe"
                  id="lastName"
                  value={input.lastName}
                  onChange={handleInput}
                />
              </div>
            </div>
          )}
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="email">
              Email
            </label>
            <input
              className={styles.inputField}
              type="email"
              placeholder="eg: johndoe@email.com"
              id="email"
              value={input.email}
              onChange={handleInput}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="password">
              Password
            </label>
            <input
              className={styles.inputField}
              type="password"
              placeholder="eg: 123456"
              id="password"
              value={input.password}
              onChange={handleInput}
            />
          </div>
          {!isLoginForm && (
            <div className={styles.inputContainer}>
              <label className={styles.inputLabel} htmlFor="passwordConfirm">
                Confirm Password
              </label>
              <input
                className={styles.inputField}
                type="password"
                placeholder="eg: 123456"
                id="passwordConfirm"
                value={input.passwordConfirm}
                onChange={handleInput}
              />
            </div>
          )}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              {!isLoginForm ? "create account" : "login"}
            </button>
          </div>
        </form>
        <div
          className={styles.footerContainer}
          onClick={() => setIsLoginForm(!isLoginForm)}
        >
          <span className={styles.footerText}>
            {!isLoginForm ? "login" : "create an account"}
          </span>
          <span className={styles.footerIcon}>
            <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </div>
      </div>
    </main>
  );
}
