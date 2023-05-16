import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

export function AboutCard({
  className,
  title,
  description,
  content,
  footer,
  ...props
}: React.ComponentProps<typeof Card> & {
  footer?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  content?: React.ReactNode
}) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}
