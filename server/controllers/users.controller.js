// login user
const loginUser = (req, res) => {
    res.json({mesg: "login user"})
}

// signup user
const signupUser = (req, res) => {
    res.json({mesg: "signup user"})
}

export {
    loginUser,
    signupUser
};