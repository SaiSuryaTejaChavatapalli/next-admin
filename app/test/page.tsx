const TestPage = () => {
  const handleForm = async (formData) => {
    "use server";
    const username = formData.get("username");
    const password = formData.get("password");
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" placeholder="Name" name="username" />
        <input type="text" placeholder="Password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestPage;
