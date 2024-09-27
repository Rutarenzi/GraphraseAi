import React,{useState,useEffect} from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { cn } from "@/lib/utils";
import { useDispatch,useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { buttonVariants,Button} from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { TextAreaSkeleton } from "./skeleton";
import { useToast } from "@/hooks/use-toast"
import callApiAi from "../context/callApiAi"
import MySpan from "./MySpan";
import { ContentValid } from "@/validation/contentValid";
import { CircularProgress } from "@mui/material";
import { UpdateContentThunk } from "@/redux/action/editContent";
import { OneContentThunk } from "@/redux/action/getOneContent";
 

const UpdatedInputer=()=>{
  const [category,setCategory] = useState('Paraphrase');
  const [myText,setMyText] = useState(" ");
  const [aiText,setAiText ]= useState(" ");
  const [loads,setLoads] = useState(false);
   const { toast } = useToast();
   const dispatch = useDispatch();

   const { id } = useParams();
   const navigate = useNavigate();
 
   useEffect(() => {
     if (!id) {
       navigate("/");
       return;
     }
     dispatch(OneContentThunk(id));
   }, [dispatch, id, navigate]);

 const {  loadz,OneContent,error } = useSelector((state)=>state.OneContent);

 useEffect(() => {
    if (OneContent) {
        setCategory(OneContent.category);
        setMyText(OneContent.userNote);
        setAiText(OneContent.AiNote);
    }
  }, [OneContent]);

   const { graparaphrase } = callApiAi()

   const callAi=async()=>{
   
     if(myText){
      setLoads(true)
       const aiNote = await graparaphrase(category,myText);
       if(!aiNote){
        toast({
              title: "Error!!!",
              description: "Something went wrong",
            })
        setLoads(false)
       }
       setLoads(false)
       setAiText(aiNote)
       if(window.auth.isAuthenticated){
        toast({
              title: "information",
              description: "login to save your data",
            })
        setLoads(false)
       }
       
       
     }
   }
   const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ContentValid),
  });
   const submit=(data)=>{
    const content ={
      ...data,
      category
    }
     dispatch(UpdateContentThunk({content,id}))
   }
   const { loadss } = useSelector((state)=>state.updateContent)
   const goToDash=()=>{
    navigate('/Dashboard');
    return;
  }
    return(
      <div>
         <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-24">
             {loadz?
     (<div style={{textAlign: "center"}}>
      <CircularProgress size={50} color="primary" />
   </div>):  
   (!OneContent|| error)?(
    <div style={{textAlign: "center"}}>
          <p>No content you have posted yet</p>
    </div>
  ):(
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
                     className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                               <span className="text-black">Dashboard</span>
            </Button>}
    </div>

 <div className="h-[70vh] flex items-center justify-center mt-12">
    <form onSubmit={handleSubmit(submit)} className="h-full w-full flex flex-col space-y-4 sm:flex-row lg:space-y-0 lg:space-x-4">
       <div className="relative flex flex-col w-full sm:w-1/2 h-full">
         <Textarea
           placeholder="Tell us a little bit about yourself"
           className="resize-none mb-2 h-full"
           value={myText}
           name="myText"
           {...register('userNote')}
           onChange={(e) => { setMyText(e.target.value) }}
           />
           <MySpan 
           name={category}
           onclick={callAi}
           />
           </div>
           {loads?<TextAreaSkeleton/> :<div className="relative flex flex-col w-full sm:w-1/2 h-full">
        <Textarea
        placeholder="Tell us a little bit about yourself"
        value={aiText}
        name="aiText"
        {...register('AiNote')}
        className="resize-none mb-2 h-full "/>
        <Button
        type="submit"
        className="absolute bottom-6  right-4 " disabled={!window.auth.isAuthenticated}>{loadss?<CircularProgress size={25} color="white" />:"Save"}</Button>
        </div>}
        
        </form>
 </div>
</div>
  )}
           
  </section>
</div>
    )
}

export default UpdatedInputer;