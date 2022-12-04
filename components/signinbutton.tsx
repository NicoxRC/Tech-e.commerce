import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <div
      className="col-md-3 d-flex flex-column justify-content-space-between "
      style={{
        backgroundColor: "#F6FFF8",
        width: "max-content",
        borderRadius: "10px",
        margin: "1vw",
      }}
    >
      <a
        className="btn btn-outline-dark  mb-1" //Modify styles
        onClick={() => signIn("google")}
        role="button"
        style={{
          textTransform: "none",
          width: "18vw",
        }}
      >
        <img
          width="20px"
          style={{ marginBottom: "3px", marginRight: "5px" }}
          alt="Google sign-in"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        />
        Login with Google
      </a>
      <a
        className="btn btn-outline-dark mb-1"
        onClick={() => signIn("facebook")}
        role="button"
        style={{
          textTransform: "none",
          width: "18vw",
        }}
      >
        <img
          width="20px"
          style={{ marginBottom: "3px", marginRight: "5px" }}
          alt="Google sign-in"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
        />
        Login with Facebook
      </a>
      <a
        className="btn btn-outline-dark"
        onClick={() => signIn("twitter")}
        role="button"
        style={{
          textTransform: "none",
          width: "18vw",
        }}
      >
        <img
          width="20px"
          style={{ marginBottom: "3px", marginRight: "5px" }}
          alt="Google sign-in"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1280px-Twitter-logo.svg.png"
        />
        Login with Twitter
      </a>
    </div>
  );
}
