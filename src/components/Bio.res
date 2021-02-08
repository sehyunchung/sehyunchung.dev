module Link = Gatsby.Link
let str = React.string

type social = {github: string}

@react.component
let make = (~social) => <>
  <Link _to="/about"> {"about" |> str} </Link>
  {"  |  " |> str}
  <a href={"https://github.com/" ++ social.github}> {"github" |> str} </a>
</>
