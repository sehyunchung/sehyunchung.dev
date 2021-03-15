// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler } from "next";

const server: NextApiHandler<{ name: string }> = (req, res) => {
  res.status(200).json({ name: "John Doe" });
};

export default server;
