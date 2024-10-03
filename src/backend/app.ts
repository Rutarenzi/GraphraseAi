import {
    query,
    update,
    text,
    Record,
    StableBTreeMap,
    Variant,
    Vec,
    Ok,
    Err,
    ic,
    Principal,
    Opt,
    nat64,
    Result,
    blob,
    bool,
    Canister,
    init,
    Void,
    nat,
    // Duration
  } from "azle/experimental";
  import { v4 as uuidv4 } from "uuid";

  // Content table
  // create content
  // update content
  // get content
  // delete content
  // get statistics
  // get delete unmarked as important after one day
  

  const Content = Record({
    id: text,
    userId: Principal,
    userNote: text,
    AiNote: text,
    category: text,
    status: text,
    createdAt: text,
    updatedAt: text,

  });
  type Content = typeof Content.tsType

  const ContentPayload =Record({
    userNote: text,
    AiNote: text,
    category: text
  })

  type ContentPayload = typeof ContentPayload.tsType

  const Message = Variant({
    NotFound: text,
    Success: text,
    Error: text,
    NotAllowed:text
  });
  
  type Message = typeof Message.tsType

  const ContentStat=Record({
    totalNotes: nat,
    totalParapharase: nat,
    totalGrammerCheck :nat,
    totalTextSimply: nat
  })

  const ContentStorage = StableBTreeMap<text, Content>(0);

  export default Canister({
    message: query([],text,()=>{
        return "Hello world"
    }),
    createContent: update([ContentPayload],Result(Vec(Content),Message),async(payload)=>{
      try{
          const NewContent:Content={
            ...payload,
            id: uuidv4(),
            userId: ic.caller(),
            createdAt: getCurrentDate(),
            updatedAt: getCurrentDate(),
            status: "important",
          }
          ContentStorage.insert(NewContent.id, NewContent);
          const Contents = ContentStorage.values();
          
          return Ok(Contents)
      }catch(error:any){
        return Err({Error: `Error Occured ${error.message}`})
      }
    }),

    updateContent:update([ContentPayload,text], Result(text,Message),(payload,id)=>{
      try{
  
         const contentOpt = ContentStorage.get(id)
         if(!contentOpt){
             return Err({NotFound: `Content doesn't exist`})
         }
         if(JSON.stringify(contentOpt.userId) !== JSON.stringify(ic.caller())){
          return Err({NotAllowed: "You are not authorized"})
        }
         const updateContent ={
          ...contentOpt,
          ...payload,
          updatedAt: getCurrentDate(),
         }
         ContentStorage.insert(id,updateContent);

         return Ok("content updated successfully")
      }catch(error:any){
        return Err({Error: `Error Occured ${error.message}`})
      }
        
    }),
    getOneContent: query([text],Result(Content,Message),(id)=>{
      try{
        const contentOpt = ContentStorage.get(id);
        if(!contentOpt){
            return Err({NotFound: `Job does not exist`})
        }
        if(JSON.stringify(contentOpt.userId) !== JSON.stringify(ic.caller())){
          return Err({NotAllowed: "You are not authorized"})
        }
       
        return Ok(contentOpt)
      }catch(error:any){
        return Err({Error: `Error Occured ${error.message}`})
      }
    }),
    deleteContent: update([text],Result(text,Message),(id)=>{

      try{
        console.log(id)
        const ContentOpt = ContentStorage.get(id)
       
        if(!ContentOpt){
            return Err({NotFound: `Job post does not exist`})
        }
        
        if(JSON.stringify(ContentOpt.userId) !== JSON.stringify(ic.caller())){
          return Err({NotAllowed: "You are not authorized"})
        }
      
        ContentStorage.remove(id);
        return Ok("Deleted successfully")
    
      }catch(error:any){
        return Err({Error: `Error Occured ${error.message}`})
      }
      }),
      MyContent: query([],Result(Vec(Content),Message),()=>{
        try{
          const contents = ContentStorage.values();
          if(contents.length === 0){
            return Err({Error: "Empty Content "})
          }
           const myContents = contents.filter((item:Content)=>( JSON.stringify(item.userId) == JSON.stringify(ic.caller())));
           if(myContents.length === 0){
            return Err({Error: "You have not Content"})
          }
           return Ok(myContents);
        }catch(error:any){
          return Err({Error: `Error Occured ${error.message}`})
        }
      }),

      ContentStats:query([],Result(ContentStat,Message),()=>{
        try{

          const content = ContentStorage.values();

          if(content.length === 0){
            return Err({Error: "Empty Content"})
          }
          const myContents = content.filter((item:Content)=>( JSON.stringify(item.userId) == JSON.stringify(ic.caller())));
          if(myContents.length === 0){
           return Err({Error: "You have no content"})
         }
         const ContentStatistics = getContentStatistics(myContents);
         return Ok(ContentStatistics)
    
        }catch(error:any){
          return Err({Error: `Error Occured ${error.message}`})
        }
      }),
     
  });

  const getCurrentDate = () => {
    const timestamp = new Number(ic.time());
    const date = new Date(timestamp.valueOf() / 1_000_000);
    return date.toISOString().split('T')[0]; 
  };
  
  function getContentStatistics(MyContents:any) {
    // Initialize counters
    let totalNotes = MyContents.length;
    let totalParapharase = 0;
    let totalGrammerCheck = 0;
    let totalTextSimply = 0;
  
    MyContents.forEach((content:any) => {
     
      if (content.category == 'paraphrase') {
        totalParapharase++;
      } else if (content.category == 'grammar-check') {
        totalGrammerCheck++;
      } else if(content.category == "simplify"){
        totalTextSimply++
      }
    });
  
    // Return the statistics as an object
    return {
      totalNotes,
      totalParapharase,
      totalGrammerCheck,
      totalTextSimply
    };
  }