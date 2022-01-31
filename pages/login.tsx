import Router from "next/router";
import { setCookie } from "nookies";

export default function Login() {
  function handleCreate() {
    setCookie(null, "auth", "gjfdhgu9fdgfds");
    Router.push("/login");
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleCreate}>Create Cookie</button>
    </div>
  );
}
