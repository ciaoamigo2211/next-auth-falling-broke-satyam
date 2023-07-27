import { Form } from "./Form";

import { AuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(AuthOptions);
  console.log(session);

  return (
    <>
      <Form session={session} />
    </>
  );
}
