open Webapi.Dom;

let append = (child, parent) => {
  switch (parent) {
  | Some(el) => Element.appendChild(child, el)
  | None => ()
  };
};

[@react.component]
let make = () => {
  let utterancesRef = React.useRef(Js.Nullable.null);

  React.useEffect(() => {
    let utterances = document |> Document.createElement("script");
    [
      ("src", "https://utteranc.es/client.js"),
      ("repo", "sehyunchung/sehyunchung.github.io"),
      ("issue-term", "pathname"),
      ("theme", "photon-dark"),
      ("crossorigin", "anonymous"),
      ("async", "true"),
    ]
    |> List.iter(((k, v)) => Element.setAttribute(k, v, utterances));

    utterancesRef
    |> React.Ref.current
    |> Js.Nullable.toOption
    |> append(utterances);

    Some(() => ());
  });

  <div
    className="utterances"
    ref={utterancesRef |> ReactDOMRe.Ref.domRef}
    style={ReactDOMRe.Style.make(~maxWidth="100%", ~margin="20px 0", ())}
  />;
};