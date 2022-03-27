export function isAuthetication() {
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  if (user && token && email) {
    if (token !== "" && user !== "" && email !== "") return true;
    else return false;
  } else {
    return false;
  }
}
