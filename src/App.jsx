import APIExample from "./components/APIExample";
import CreateData from "./components/CreateData";
import FormSubmisson from "./components/FormSubmisson";
import UpdateData from "./components/UpdateData";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <>
      <h1>Rest + React Test App</h1>
      <UserProfile  userId="5" />
      <UserProfile  userId="3" />
      <FormSubmisson />
      <CreateData />
      <UpdateData />
      <APIExample />
    </>
  );
}

export default App;
