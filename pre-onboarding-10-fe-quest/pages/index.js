import Head from "next/head";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickMock = () => {
    router.push("/mock");
  };

  return (
    <>
      <Head>
        <title>프리온보딩</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <button
          style={{
            width: "20rem",
            height: "10rem",
            backgroundColor: "#f0f0f0",
            border: "none",
            borderRadius: "5px",
            marginBottom: "1rem",
          }}
          onClick={onClickLogin}
        >
          로그인 페이지로 이동
        </button>
        <button
          style={{
            width: "20rem",
            height: "10rem",
            backgroundColor: "#f0f0f0",
            border: "none",
            borderRadius: "5px",
            marginBottom: "1rem",
          }}
          onClick={onClickMock}
        >
          Mock 페이지로 이동
        </button>
      </div>
    </>
  );
}
