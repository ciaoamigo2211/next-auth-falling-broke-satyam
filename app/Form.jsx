"use client";

import { signIn } from "next-auth/react";

import Image from "next/image";
import styles from "./page.module.css";
const env = process.env.NEXTAUTH_SECRET;

export const Form = (session) => {
  const createSession = async () => {
    const response = await signIn("credentials");
  };
  return (
    <>
      <main className={styles.main}>
        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>app/page.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}
        <div>
          <button className={styles.padding} onClick={createSession}>
            Sign IN
          </button>
          <span style={{ color: "black" }}>
            height
            <p>{JSON.stringify(session, null, 2)}</p>
          </span>
        </div>
      </main>
    </>
  );
};
