import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CountryTypes, CurrencyTypes, LanguageTypes } from "../../common.type";

dotenv.config();

const PRODUCT_KEY = process.env.WAIKER_PRODUCT_KEY;
const USER_KEY = process.env.WAIKER_USER_KEY;
const SECRET_KEY = process.env.WAIKER_SECRET_KEY;
const BASE_URL = process.env.WAIKER_API_BASE_URL;

if (!PRODUCT_KEY || !USER_KEY || !SECRET_KEY)
  throw Error("서명에 필요한 Key 값들이 올바르지 않습니다.");

const payload = { userKey: USER_KEY };
const jwtToken = jwt.sign(payload, SECRET_KEY);
const authorization = `Bearer ${jwtToken}`;

if (!jwtToken) throw Error("JWT 토큰 서명에 실패했습니다.");

export const signedAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: authorization,
    "Waiker-Product-Key": PRODUCT_KEY,
    "Accept-Country": CountryTypes.US,
    "Accept-Currency": CurrencyTypes.USD,
    "Accept-Language": LanguageTypes.EN,
  },
});
