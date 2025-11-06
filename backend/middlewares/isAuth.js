import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(400).json({ message: "token not found" })
        }
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
        if (!decodeToken) {
            return res.status(400).json({ message: "token not verify" })
        }
        // console.log(decodeToken);
        req.userId = decodeToken.userId
        next()
    } catch (error) {
        console.error("isAuth error:", error);
        return res.status(500).json({ message: `isAuth Error: ${error.message}` });
    }
}

export default isAuth