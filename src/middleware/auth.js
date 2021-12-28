function authCheck(req, res, next) {


    console.log("verifying user")
    next()
}

// export function authcheck
module.exports = {
    authCheck: authCheck
}