import { LinkIcon } from "lucide-react"

import { BoxDrawn } from "@/components/box-drawn"

export default async function ToysIndexPage() {
  return (
    <section className="pt-8">
      <h1 className="text-lg md:text-3xl whitespace-pre-line text-center font-bold flex justify-center">
        <BoxDrawn.Box rows={5} cols={30} shadow doubleStroke>
          {`I've been made these\n(sometimes useful) Toys:`}
        </BoxDrawn.Box>
      </h1>
      <div className="p-6">
        <table className="text-center text-base md:text-lg">
          <thead>
            <tr>
              <td>name</td>
              <td>desc.</td>
              <td>repo</td>
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
              <td>A simple BPM counter</td>
              <td>
                <a href="https://github.com/sehyunchung/bipi">
                  <LinkIcon className="w-4" />
                </a>
              </td>
            </tr>
            <tr>
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
                Restarts tsserver whenever you move to another ts,tsx file
              </td>
              <td>
                <a href="https://github.com/sehyunchung/tsserver-auto-restarter">
                  <LinkIcon className="w-4" />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://chrome.google.com/webstore/detail/twitter-de-elonizer/elfgpiecbnknhfpkcpcnghkkkdilobkg?hl=en&authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter de-elonizer
                </a>
              </td>
              <td>Removes doge logo from Twitter.com</td>
              <td>
                <a href="https://github.com/sehyunchung/twitte-de-elonizer">
                  <LinkIcon className="w-4" />
                </a>
              </td>
            </tr>
            <tr>
              <td>box-drawn-ui</td>
              <td>React Components utilizing Box Drawing Characters</td>
              <td>(soon)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
