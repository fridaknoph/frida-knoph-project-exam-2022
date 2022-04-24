import { server } from "../../config/index";

async function deleteButton(id) {
  if (window.confirm("Are you sure you want to delete this message?")) {
    const response = await fetch(`${server}/api/messages/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }
}
