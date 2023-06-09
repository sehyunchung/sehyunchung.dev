export default function NotFound() {
  return (
    <article
      aria-label="404 Not Found Error Message"
      className="grid place-items-center min-h-[60vh]"
    >
      <div>
        <div
          aria-label="404"
          aria-hidden
          role="presentation"
          className="font-mono text-[3vw] whitespace-pre leading-none"
        >{`
 ___   ___      ________      ___   ___       
|\\  \\ |\\  \\    |\\   __  \\    |\\  \\ |\\  \\    
\\ \\  \\\\_\\  \\   \\ \\  \\|\\  \\   \\ \\  \\\\_\\  \\   
 \\ \\______  \\   \\ \\  \\\\\\  \\   \\ \\______  \\  
  \\|_____|\\  \\   \\ \\  \\\\\\  \\   \\|_____|\\  \\ 
         \\ \\__\\   \\ \\_______\\         \\ \\__\\
          \\|__|    \\|_______|          \\|__|`}</div>
        <div className="text-right mt-4">
          <span className="ml-auto">not... found...</span>
        </div>
      </div>
    </article>
  )
}
