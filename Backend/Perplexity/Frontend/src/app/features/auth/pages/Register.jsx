import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="relative flex min-h-screen min-h-[100dvh] items-center justify-center overflow-hidden bg-zinc-950 px-3 py-6 text-zinc-100 sm:px-4 sm:py-12">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-red-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-rose-600/15 blur-3xl" />

      <section className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/80 p-5 shadow-2xl shadow-red-950/30 backdrop-blur-xl sm:rounded-3xl sm:p-8 md:p-10">
        <div className="mb-6 sm:mb-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-700 text-lg font-bold shadow-lg shadow-red-950/50 sm:mb-8">
            P
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-red-400">
            Get started
          </p>
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            Create your account
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Join us with a few details to get started.
          </p>
        </div>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-zinc-200"
              htmlFor="register-username"
            >
              Username
            </label>
            <input
              autoComplete="username"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              id="register-username"
              name="username"
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Choose a username"
              required
              type="text"
              value={username}
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-zinc-200"
              htmlFor="register-email"
            >
              Email address
            </label>
            <input
              autoComplete="email"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              id="register-email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              type="email"
              value={email}
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-zinc-200"
              htmlFor="register-password"
            >
              Password
            </label>
            <input
              autoComplete="new-password"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              id="register-password"
              minLength={8}
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="At least 8 characters"
              required
              type="password"
              value={password}
            />
          </div>

          <button
            className="w-full rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-4 py-3 font-semibold text-white shadow-lg shadow-red-950/40 transition hover:from-red-500 hover:to-rose-500 focus:outline-none focus:ring-4 focus:ring-red-500/30"
            type="submit"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400 sm:mt-8">
          Already have an account?{" "}
          <Link
            className="font-semibold text-rose-400 transition hover:text-rose-300"
            to="/login"
          >
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
