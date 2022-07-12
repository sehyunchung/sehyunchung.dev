export default function TheGreatBack() {
  return (
    <div>
      <button
        className="text-4xl"
        onClick={(e) => {
          e.preventDefault();
          window.history.back();
        }}
      >
        &#8592;
      </button>
    </div>
  );
}
