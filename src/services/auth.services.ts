import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User , createUser, getUserByEmail } from "../models/user.model"
import { AuthData, TokenPayload, UserCredentials } from "../models/auth.model"
import authConfig from "../auth"

export const registerService = async (user: User): Promise<User> => {
    try {
        const hashedPassword = bcrypt.hashSync(
            user.password + authConfig.paper,
            authConfig.rounds
        )
        user.password = hashedPassword;
        const data = await createUser(user);
        return data;
    } catch (error) {
        throw new Error(error as string)
    }
}

export const loginService = async (credentials: UserCredentials): Promise<AuthData> => {
    try {
        const user = await getUserByEmail(credentials.email);
        if (!user) throw new Error("User not found")

        // compare password hash
        const isPasswordMatch = await bcrypt.compare(credentials.password + authConfig.paper, user.password as string);
        if (!isPasswordMatch) throw new Error("Invalid email or password");

        // generate token
        const token = generateToken(user);

        const authData: AuthData = {
            user: {
                name: user.name as string,
                email: user.email as string
            },
            token
        }

        return authData;
    } catch (error) {
        throw new Error(error as string)
    }
}

const generateToken = (user: User): string => {
    try {
        const payload: TokenPayload = { sub: user.email, name: user.name };
        return jwt.sign(payload, authConfig.jwtSecret);
    } catch (error) {
        throw new Error(error as string)
    }
}