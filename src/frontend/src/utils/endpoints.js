const createContent=async(content)=>{ 
  return  await window.canister.GraphraseAi.createContent(content)
}

const updateContent=async(content,contentId)=>{
  return await window.canister.GraphraseAi.updateContent(content,contentId)
}

const deleteContent=async(contentId)=>{
  return await window.canister.GraphraseAi.deleteContent(contentId)
}

const MyContent=async()=>{
  return await window.canister.GraphraseAi.MyContent()
}


const getOneContent=async(id)=>{
  console.log(id)
  return await window.canister.GraphraseAi.getOneContent(id)
}



export { 
  createContent,
  updateContent,
  deleteContent,
  MyContent,
  getOneContent
}



