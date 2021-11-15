import React from "react";
import AttendanceLogo from "../assets/logoattendance.png";
const ChangePassword = () => {
    return (
        <main class="login">
        <form action="http://localhost:80/login/setPassword" method="POST" class="login-form">
            <img src={AttendanceLogo} alt="" />
            <div class="form-block">
                <label for="username">Username</label>
                <input type="username" id="username" placeholder="Your username" name="username"></input>
            </div>
            <div class="form-block">
                <label for="id_code">Code</label>
                <input type="id_code" id="id_code" placeholder="Your code" name="id_code"></input>
            </div>
            <div class="form-block">
                <label for="new_password">New password</label>
                <input type="password" id="new_password" placeholder="******" name="new_password"/>
            </div>
            <div class="form-block">
                <label for="password">Confirm password</label>
                <input type="password" placeholder="*****" name="confirm_password" />
            </div>
            <input type="submit" class="button primary-button" value="Change password" />
        </form>
        </main>
    );
};
export default ChangePassword;