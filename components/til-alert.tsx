import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

export function TilPageAlert() {
  return (
    <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>멍청주의!</AlertTitle>
      <AlertDescription>
        이 페이지는 아직 멍청한 상태로, 당연히 될 것 같은 이것저것이 되지 않을
        수 있습니다.
      </AlertDescription>
    </Alert>
  )
}
