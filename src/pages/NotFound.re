let str = React.string;
let style = ReactDOMRe.Style.make;

[@react.component]
let make = () => {
  <div>
    <h1>{"404..." |> str}</h1>
    <h2 style={style(~margin="0", ~fontSize="6rem", ())}>
      {{j|🏜|j} |> str}
    </h2>
    <p> {{j|여긴 아무것도 없답니다...|j} |> str} </p>
  </div>;
};