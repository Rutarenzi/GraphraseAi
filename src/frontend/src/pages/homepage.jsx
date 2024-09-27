import { cn } from "@/lib/utils";
import { buttonVariants,Button} from "@/components/ui/button"
import { useNavigate } from "react-router-dom";
import  { login, logout  } from "../utils/auth" 

const Homepage=()=> {
  const navigate= useNavigate();
  const goToHome=()=>{
    navigate('/Home');
    return;
  }
  const goToDash=()=>{
    navigate('/Dashboard');
    return;
  }
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container max-w-full flex flex-col items-center gap-4 text-center mx-auto" >
    
          <h1 className="font-heading text-2xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          A seamless for grammar and <br></br>paraphrasing
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            An efficient application built with AI and blockchain for improved grammar and paraphrasing capabilities.
          </p>
          <div className="space-x-4">
            <Button onClick={goToHome} className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Button>
            {window.auth.isAuthenticated?<Button
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              onClick={goToDash}
            >
              <span className="text-black">Dashboard</span>
            </Button>:<Button
              onClick={login}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <span className="text-black">Login</span>
            </Button>}
          </div>
        </div>
      </section>
      <section
        id="features"
        className="space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 "
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          utilizing AI and blockchain technologies, can effectively implement features
           like text paraphrasing, grammar checking, and content simplification.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
  viewBox="0 0 24 24"
  className="h-12 w-12 fill-current"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M21 7H3v10h18V7zm0-2H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 7h-4v-2h4v2zm6-3h-6v-2h6v2z" />
  <path d="M20 4h-1.5l-1.5-1.5L16 4H12v2h4.5l1.5 1.5L20 6H20z" />
</svg>
              <div className="space-y-2">
                <h3 className="font-bold">Paraphraser</h3>
                <p className="text-sm text-muted-foreground">
                Rephrase effortlessly, clarify meaning, rewrite for impact.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
      viewBox="0 0 24 24"
      className="h-12 w-12 fill-current text-black" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.707 2.293a1 1 0 00-1.414 0L18 4.586 20.414 7l2.293-2.293a1 1 0 000-1.414zM3 17v4h4l11.33-11.33-4-4L3 17zm16.34-1.34l-1.293 1.293a1 1 0 01-1.414 0l-2.293-2.293-1.414 1.414 2.293 2.293a3 3 0 004.243-4.243l1.293-1.293a1 1 0 00-1.414-1.414zM1 21h4v-4H1v4z" />
    </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Grammer checker</h3>
                <p className="text-sm">
                Review your text, fix grammar mistakes, elevate your writing,
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
  viewBox="0 0 24 24"
  className="h-12 w-12 fill-current"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M3 3h18c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v16h18V5H3zm9 4h6v2h-6v-2zm-7 0h6v2H5v-2zm9 4h6v2h-6v-2zm-7 0h6v2H5v-2z" />
  <path d="M21 7h-1.5l-1.5-1.5L18 7h-4v2h4.5l1.5 1.5L21 9h0z" />
</svg>

              <div className="space-y-2">
                <h3 className="font-bold">Text simplication</h3>
                <p className="text-sm text-muted-foreground">
                Simplify your content, enhance understanding,improve communication
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <section id="open-source" className="container py-8 md:py-6 lg:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          &copy; { new Date().getFullYear()} GraphraseAi. All Rights Reserved.
           
          </p>
        
        </div>
      </section>

      
    </>
  )
}


export default Homepage