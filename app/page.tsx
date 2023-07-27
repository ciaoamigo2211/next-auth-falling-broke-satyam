import { Form } from "./Form";

import { AuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  let session = await getServerSession(AuthOptions);
  session = { name: "satyam" };
  return (
    <>
      <Form session={session} />
    </>
  );
}
