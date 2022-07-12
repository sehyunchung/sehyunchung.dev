export default function TheGreatBack() {
  return (
    <div className="text-5xl font-light">
      <button
        onClick={(e) => {
          window.history.back();
        }}
      >
        &#8592;
      </button>
    </div>
  );
}
