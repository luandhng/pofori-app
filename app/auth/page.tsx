const Auth = () => {
  return (
    <div>
      <h1>Please Login</h1>
      <form>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Auth;
