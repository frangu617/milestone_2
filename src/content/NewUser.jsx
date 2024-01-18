import { Form } from "react-router-dom";

function NewUser() {
  return <div>
    <h1>New User</h1>
    <Form method="post">
      <p>
        <label>
          Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Age: <input type="number" name="age" />
        </label>
      </p>
      <p>
        <label>
          Height (in inches): <input type="number" name="height" />
        </label>
      </p>
      <p>
        <button type="submit">Create User</button>
      </p>
    </Form>
  </div>;
}
