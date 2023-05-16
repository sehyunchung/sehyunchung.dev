import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

export function TilAlert() {
  return (
    <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>멍청</AlertTitle>
      <AlertDescription>
        이 페이지는 아직 멍청한 상태로, 당연히 되어야 하는 게 되지 않습니다.
      </AlertDescription>
    </Alert>
  )
}
