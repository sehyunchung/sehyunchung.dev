import * as fs from "fs"
import * as path from "path"

import { getAllTILsNode } from "./github-api"

export const getTils = async () => {
  const tils = await getAllTILsNode()

  tils.forEach(
    (til: {
      id: string
      title: string
      body: string
      createdAt: string
      labels: {
        nodes: {
          name: string
          id: string
        }[]
      }
    }) => {
      const data = {
        id: til.id,
        title: til.title,
        content: til.body,
        createdAt: til.createdAt,
        labels: til.labels.nodes.map((label) => label.name),
      }
      const tilJson = JSON.stringify(data)
      const tilPath = path.join(
        process.cwd(),
        "content",
        "til",
        `${til.id}.json`
      )
      fs.writeFile(tilPath, tilJson, (err) => {
        if (err) {
          console.error(err)
        }
      })
    }
  )
}

getTils().then(() => console.log("tils retrieved\n"))

export {}
