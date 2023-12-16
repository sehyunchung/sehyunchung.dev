import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <Counter count={count} />
    </div>
  );
}
