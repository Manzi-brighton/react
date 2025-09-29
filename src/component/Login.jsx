import React from "react";
    function Login(){
        return(
            <>
            <fieldset>
                <legend>login form </legend>
                <form>
                    <table>
                        <tr>
                            <td>
                                <input type="text" name="un" placeholder="username"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" name="password" placeholder="password"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="login" name="ln"/>
                            </td>
                            <td colSpan="2">
                                <input type="reset" value="cancel" name="cl"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </fieldset>
            </>
        );
    }
    export default Login;