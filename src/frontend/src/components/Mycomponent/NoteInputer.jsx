import React,{useState} from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { useForm } from 'react-hook-form';
import { buttonVariants,Button} from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { TextAreaSkeleton } from "./skeleton";
import { useToast } from "@/hooks/use-toast"
import callApiAi from "../context/callApiAi"
import MySpan from "./MySpan";
import { ContentValid } from "@/validation/contentValid";
import { CreateContentThunk } from "@/redux/action/createContent";
import { CircularProgress } from "@mui/material";
import { ToastError } from "@/utils/toast";
 

const NoteInputer=()=>{
  const [category,setCategory] = useState('paraphrase');
  const [myText,setMyText] = useState(" ");
  const [aiText,setAiText ]= useState(" ");
  const [loads,setLoads] = useState(false);
  const navigate = useNavigate();
   const { toast } = useToast();

   const { graparaphrase } = callApiAi()

   const callAi=async()=>{
     if(myText){
      setLoads(true)
       const aiNote = await graparaphrase(category,myText);
       if(!aiNote){
            ToastError("Something went wrong")
        setLoads(false)
       }
       setLoads(false)
       setAiText(aiNote)
       setValue('AiNote', aiNote)
       if(!window.auth.isAuthenticated){
            ToastError("login to save your data")
        setLoads(false)
       }
      
       
     }
   }
   const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(ContentValid),
  });
   const dispatch = useDispatch();
   const submit=(data)=>{
    const content ={
      ...data,
      category
    }
     dispatch(CreateContentThunk(content))
   }
   const { load } = useSelector((state)=>state.createContent)
   const goToDash=()=>{
    navigate('/Dashboard');
    window.location.load();
    return;
  }
    return(
      <div>
         <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-24">

            <div className="mx-auto w-[70%] md:w-[85%] sm:w-[100%]">
               <div class="flex space-x-4">
                  <Button className="px-2 py-2 bg-black hover:bg-gray-400
                   focus:bg-blue-500 focus:text-white rounded"
                   onClick={()=>{setCategory("paraphrase")}}
                   >
                     Paraphraser 
                     </Button>
                    <Button className="px-2 py-2 bg-gray-300 hover:bg-gray-400 
                    focus:bg-blue-500 focus:text-white rounded"
                    onClick={()=>{setCategory("grammar-check")}}
                    >Grammer Checker</Button>
                   <Button className="px-2 py-2 bg-gray-300 hover:bg-gray-400 
                   focus:bg-blue-500 focus:text-white rounded"
                   onClick={()=>{setCategory("simplify")}}
                   >Text Simplication
                   </Button>
                   {window.auth.isAuthenticated &&  
                      <Button 
                         onClick={goToDash}
                         className={cn(buttonVariants({ variant: "outline", size: "lg", }),
                         )}>
                               <span className="text-black">Dashboard</span>
                     </Button>}
               </div>

            <div className="h-[70vh] flex items-center justify-center mt-12">
               <form onSubmit={handleSubmit(submit)} className="h-full w-full flex flex-col space-y-4 sm:flex-row lg:space-y-0 lg:space-x-4">
                  <div className="relative flex flex-col w-full sm:w-1/2 h-full">
                  <Textarea
                      placeholder="Please write  your note here!"
                      className={`resize-none mb-2 h-full ${errors.userNote ? 'border-red-500' : ''}`}
                      value={myText}
                      name="myText"
                      {...register('userNote')}  // Validation rule
                       onChange={(e) => setMyText(e.target.value)}
                         />
                      {errors.userNote && (
                        <p className="text-red-500 text-sm">Error: {errors.userNote.message}</p>
                        )}
                      <MySpan 
                      name={category}
                      onclick={callAi}
                      />
                      </div>
                      {loads?<TextAreaSkeleton/> :<div className="relative flex flex-col w-full sm:w-1/2 h-full">
                   <Textarea
                   placeholder="Here is for AI generate note"
                   value={aiText}
                   name="aiText"
                   {...register('AiNote')}
                   onChange={(e) => {setAiText(e.target.value);
                    setValue('AiNote',e.target.value)
                   }}
                   className="resize-none mb-2 h-full "/>
                     {errors.AiNote && (
                        <p className="text-red-500 text-sm">Error: {errors.AiNote.message}</p>
                        )}
                   <Button
                   type="submit"
                   className="absolute bottom-6  right-4  z-50 cursor-pointer" disabled={!window.auth.isAuthenticated}>{load?<CircularProgress size={25} color="white" />:"Save"}</Button>
                   </div>}
                   
                   </form>
            </div>
        </div>
  </section>
</div>
    )
}

export default NoteInputer;
