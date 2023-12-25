@react.component
let make = (~person: string) => {
  <div>
    {React.string(`Hello ${person}!`)}
  </div>
}
