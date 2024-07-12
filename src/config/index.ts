import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } =
  process.env;

// export const USE_SMTP = process.env.USE_SMTP === 'true';
// export const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
// export const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
// export const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;
export const {
  EREN_DB_USER,
  EREN_DB_PASSWORD,
  EREN_DB_HOST,
  EREN_DB_PORT,
  EREN_DB_DATABASE,
} = process.env;

// export const SALTS = Number(process.env.PASSWORD_SALT);
// export const TOKEN_EXPIRY = Number(process.env.TOKEN_EXPIRY);
// export const REFRESH_TOKEN_EXPIRY = Number(process.env.REFRESH_TOKEN_EXPIRY);
// export const SIGNUP_TOKEN_EXPIRY = Number(process.env.SIGNUP_TOKEN_EXPIRY);
// export const RESET_OTP_EXPIRY = Number(process.env.RESET_OTP_EXPIRY);
// export const OTP_LENGTH = Number(process.env.OTP_LENGTH);
// export const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
// export const ACCESS_KEY_SECRET = process.env.ACCESS_KEY_SECRET;
// export const BUCKET_NAME = process.env.BUCKET_NAME;
// export const USER_QUEUE = process.env.USER_QUEUE;
// export const SMTP_OUTLOOK = process.env.SMTP_OUTLOOK === 'true';
// export const LOAD_TEST_TOKEN = process.env.LOAD_TEST_TOKEN;
// export const LOAD_TEST_ROUTE = process.env.LOAD_TEST_ROUTE;
