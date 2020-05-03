let str = React.string;

type social = {
  github: string
};

[@react.component]
let make = (~social)=> {
  <p>
    <span>
      {"about" |> str}
    </span>
    {"  |  " |> str}
    <a href={"https://github.com/" ++ social.github}>{"github" |> str}</a>
  </p>
}
