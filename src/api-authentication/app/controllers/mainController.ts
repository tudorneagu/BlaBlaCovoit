import type { Request, Response } from "express";
import HttpError from "../errors/httpError";
import debug from "debug";
import jwt from "jsonwebtoken";
import { hash, verify } from "../scrypt";

const log = debug("app:api-authentication");

const API_URL = process.env.API_USERS_URL || "http://api-users:3000";
const JWT_SECRET = process.env.JWT_SECRET || "secret";

interface UserReponse {
  status: string;
  data: User[];
}

interface User {
  id: string;
  email: string;
  password: string;
  roles: string[];
  firstname: string;
  lastname: string;
  image: string;
  created_at: string;
  updated_at: string;
}

const mainController = {
  signUp: async (req: Request, res: Response): Promise<void> => {
    req.body.password = await hash(req.body.password);
    const response = await fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new HttpError(
        response.status,
        (result as { message: string }).message
      );
    }
    log("User created successfully");
    res.json({ staus: "success", message: "User created successfully" });
  },

  signIn: async (req: Request, res: Response) => {
    const response = await fetch(
      `${API_URL}/api/users?email=${req.body.email}`
    );
    const result = (await response.json()) as UserReponse;
    const user = result.data[0];
    const isValidPassword = await verify(req.body.password, user.password);
    if (!user || !isValidPassword) {
      throw new HttpError(400, "email or password is incorrect");
    }
    const accessToken = jwt.sign(
      { user: { id: user.id, roles: user.roles } },
      JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    const refreshToken = jwt.sign(
      { user: { id: user.id, roles: user.roles } },
      JWT_SECRET,
      { expiresIn: "15m" }
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    log("User logged in successfully");
    log(accessToken);
    res.json({
      status: "success",
      data: {
        user: userWithoutPassword,
        accessToken,
        refreshToken,
      },
    });
  },

  // refresh: async (req: Request, res: Response) => {
  //   const {refreshToken} = req.body;
  //   if(!refreshToken) {
  //     throw new HttpError(401, "Refresh token not provided");
  //   }
  //   try{}

  // },

  logout: async (_: Request, res: Response) => {
    res.json({
      status: "sucesss",
      data: {},
    });
  },
};

export default mainController;
