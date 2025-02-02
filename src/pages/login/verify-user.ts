export const verifyUser = async (handleSessionError: () => void) => { 
  try {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      const email = params.get("email");
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await response.json();
      if (data?.data?.email?.toLowerCase() !== email?.toLowerCase()) {
        handleSessionError()
      }
  } catch (error) {
      console.log(error)
    handleSessionError()
  }
}