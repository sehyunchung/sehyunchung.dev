let str = React.string;

type social = {github: string};

[@react.component]
let make = (~social) =>
  <>
    <a href="/about"> {"about" |> str} </a> // TODO: change to gatsby <Link>
    {"  |  " |> str}
    <a href={"https://github.com/" ++ social.github}> {"github" |> str} </a>
  </>;