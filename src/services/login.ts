export  const login = async (email: string, setLoading:React.Dispatch<React.SetStateAction<boolean>>, navigate: (path: string) => void, setError: React.Dispatch<React.SetStateAction<string>>) => {
  try {
    setLoading(true);
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    const userExists = data.data.find(
      (user: { email: string }) => user.email === email
    );
    if (userExists) {
      navigate(`/dashboard?email=${email}&id=${userExists.id}`);
    } else {
      setError("Invalid Credential");
    }
  } catch (error) {
    setError("Invalid Credential");
  } finally {
    setLoading(false);
  }
};