/**
 * TODO: Implement the Login Page.
 *
 * This component should render the login form at route /login.
 *
 * Acceptance Criteria:
 * 1. A text input for `username`.
 * 2. A password input for `password` (characters must be masked).
 * 3. A "Sign In" button that is DISABLED when either field is empty.
 * 4. On submit, call POST http://localhost:3000/auth/login with { username, password }.
 * 5. On success (201): save the returned `accessToken` to localStorage,
 *    then redirect the user to /dashboard.
 * 6. On failure (401): display a red error message to the user.
 *
 * Hints:
 * - Use the `useState` hook to manage form field values and error state.
 * - Use the `useNavigate` hook from react-router-dom for redirection.
 * - Use the native `fetch` API or install `axios` to make the HTTP request.
 */

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>TODO: Implement the login form here.</p>
    </div>
  );
}

export default LoginPage;
