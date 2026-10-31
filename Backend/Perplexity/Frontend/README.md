# React + Vite

## Render deployment

For a separate Render Static Site and Web Service, set `VITE_API_URL` on the
frontend Static Site to the backend Web Service's public origin, for example
`https://your-backend.onrender.com` (no trailing slash), then redeploy the
frontend so the value is included in its build.

On the backend Web Service, set `CORS_ORIGINS` to the exact frontend origin,
for example `https://aiassistance-hq86.onrender.com`, and set
`NODE_ENV=production`. Multiple frontend origins can be comma-separated.
The backend uses this allowlist for both API requests and Socket.IO.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
