@@directive("'use client'")

type themeResult = {
  resolvedTheme: string,
  setTheme: string => unit,
}
@module("next-themes") external useTheme: unit => themeResult = "useTheme"
@module("../lib/utils") external cn: string => string = "cn"

@genType @react.component
let make = (~className: string) => {
  let {setTheme, resolvedTheme} = useTheme()

  <button
    type_="button" className onClick={_ => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
    <span className="sr-only"> {React.string("Toggle theme")} </span>
    <span className="dark:inline hidden"> {React.string("☽")} </span>
    <span className="inline dark:hidden"> {React.string("☼")} </span>
  </button>
}
