<template>
    <div class="signInScreen">
        <div class="signIn">
            <div class="signIn-box">
                <h3>ModernTech Solutions</h3>
                <div>Sign In</div>
            </div>

            <form @submit="singInForm">
                <div class="singIn-form">
                    <div class="inputs">
                        <!-- USERNAME -->
                        <input type="text" class="username" v-model="enteredUser" :class="{'errorInput': signInError}" placeholder="Username" required>
                        <br> <br>

                        <!-- PASSWORD -->
                        <input type="text" class="password" v-model="enteredPwd" :class="{'errorInput': signInError}" placeholder="Password" required>
                        <br> <br>
                    </div>

                    <!-- SUBMIT BUTTON -->
                    <button type="submit" class="signIn-button">Sign In</button>
                </div>
                <p class="error-msg" :class="{visible: signInError}">Invalid username or password</p>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                correctCredentials: {
                    username: "Admin",
                    password: "Password123"
                },
                enteredUser: "",
                enteredPwd: "",
                signInError: false
            }
        },
        methods: {
            singInForm(event) {
                event.preventDefault();

                const username = this.correctCredentials.username
                const password = this.correctCredentials.password

                if (this.enteredUser.trim() === username && this.enteredPwd.trim() === password) {
                    this.signInError = false
                    this.$router.push('/overview')
                } else {
                    this.signInError = true
                }
            }
        }
    }
</script>

<style scoped>
    .signInScreen {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .signIn {
        margin: 0 auto;
        height: 70%;
        padding: 40px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    /* CSS INPUT */
    .signIn-form {
        text-align: left;
    }

    .signIn-form input{
        border-radius: 10px;
        transition: border-color ease 0.3s;
        cursor: text;
    }

    /* CSS BUTTON */
    .signIn-button {
        border-radius: 10px;
    }

    .signIn-button:hover {
        border-radius: 10px;
        font-weight: 400;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 20px 0 rgba(0, 0, 0, 0.08);
    }

    /* CSS ERROR */
    .error-msg {
        visibility: hidden;
        opacity: 0;
        color: red;
        transition: opacity ease 0.3s;
        font-weight: 400;
    }

    .error-msg.visible {
        visibility: visible;
        opacity: 1;
    }

    .errorInput {
        border: 2px solid red;
    }
</style>