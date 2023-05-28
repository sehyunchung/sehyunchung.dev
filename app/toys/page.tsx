import { BoxDrawn } from "@/components/box-drawn"

export default async function ToysIndexPage() {
  return (
    <section className="pt-8">
      <h1 className="text-2xl whitespace-pre-line text-center font-bold flex justify-center">
        <BoxDrawn.Box height={5} width={30} shadow doubleStroke>
          {`(mostly useless)\nToys I've been made:`}
        </BoxDrawn.Box>
      </h1>
      <div className="p-8 text-center">
        <table className="text-center">
          <thead>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://bipi.sehyunchung.dev/bipi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bipi!
                </a>
              </td>
              <td>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=SehyunChung.tsserver-auto-restarter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tsserver-auto-restarter
                </a>
              </td>
              <td>
                <a
                  href="https://chrome.google.com/webstore/detail/twitter-de-elonizer/elfgpiecbnknhfpkcpcnghkkkdilobkg?hl=en&authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitte de-elonizer
                </a>
              </td>
              <td>box-drawn (soon)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
