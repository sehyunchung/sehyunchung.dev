import type { MetaFunction } from "@remix-run/react";

export let meta: MetaFunction = () => {
  return { title: "404: Not Found" };
};

export default function FourOhFour() {
  return (
    <>
      <h1 className="text-8xl">404: Not Found</h1>
      <h2>{`🏜`}</h2>
      <p>여긴 아무것도 없답니다...</p>
    </>
  );
}
