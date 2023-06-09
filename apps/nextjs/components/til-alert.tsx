import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

export function TilPageAlert() {
  return (
    <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>주의!</AlertTitle>
      <AlertDescription>
        outdated 혹은 deprecated 혹은 틀린 내용이 있을 수 있습니다.
      </AlertDescription>
    </Alert>
  )
}
