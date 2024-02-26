export default async function sendContactForm(
  variables: Record<string, string>,
) {
  const response: any = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(variables),
  })
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return response;
}
