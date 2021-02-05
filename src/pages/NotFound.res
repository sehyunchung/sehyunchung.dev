let str = React.string

@react.component
let make = () =>
  <div>
    <h1> {"404..." |> str} </h1>
    <h2 style={ReactDOM.Style.make(~margin="0", ~fontSize="6rem", ())}> {j`🏜` |> str} </h2>
    <p> {j`여긴 아무것도 없답니다...` |> str} </p>
  </div>

let default = make
