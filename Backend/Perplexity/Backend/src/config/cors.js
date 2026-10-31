export const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:5173")
  .split(",")
  .map(origin => origin.trim())
  .filter(Boolean)

export function corsOrigin(origin, callback) {
  callback(null, !origin || allowedOrigins.includes(origin))
}
