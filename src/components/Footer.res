let currentYear = Js_date.make() |> Js_date.getFullYear |> Js_float.toFixed

@react.component
let make = (~children) =>
  <footer
    style={ReactDOMRe.Style.make(
      ~display="flex",
      ~flexDirection="row",
      ~justifyContent="space-between",
      ~marginTop="20px",
      ~padding="20px 0",
      ~color="var(--tex-secondary-color)",
      (),
    )}>
    <p> {j`© $currentYear Sehyun Chung` |> React.string} </p> <p> children </p>
  </footer>

let default = make
