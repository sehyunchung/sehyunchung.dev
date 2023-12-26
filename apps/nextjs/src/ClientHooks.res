%%raw(`
"use client"`)

@genType
let useMounted = () => {
  let (mounted, setMounted) = React.useState(_ => false)

  React.useEffect(() => {
    setMounted(_ => true)
    None
  }, ())

  mounted
}

type client<'a> = 'a
type server<'a> = option<'a>

@genType
let useSyncedState = (client, server) => {
  let initial = switch server {
  | Some(x) => x
  | None => client
  }

  let (state, setState) = React.useState(_ => initial)

  React.useEffect(() => {
    setState(_ => client)
    None
  }, client)

  state
}
