export const Contents= Array.from({ length: 200 }, (_, index) => ({
    id: `${index}`,
    contentId: `${(index +1)}`,
    userNote: `${index +230} 
    Additionally, the presentation file for the meeting hasn't 
    been created yet, so please ensure it's prepared in advance. 
    I also need to inform you that we will be having lunch provided 
    during the meeting, so I need everyone 
    to give me their dietary restrictions by tomorrow.
    It's important that everyone reviews the project report 
    before the meeting. Let me know if you have any questions</p>
   <p>Additionally, the presentation file for the meeting hasn't been created 
   yet, so please ensure it's prepared in advance. I also need to inform you 
   that we will be having lunch provided during the meeting, so I need everyone 
   to give me their dietary restrictions by tomorrow. 
   It's important that everyone reviews the project report before the meeting. 
   Let me know if you have any questions</p>
   <p>Additionally, the presentation file for the meeting hasn't been created 
   yet, so please ensure it's prepared in advance. I also need to inform you that 
   we will be having lunch provided during the meeting, so I need everyone to give 
   me their dietary restrictions by tomorrow.
   It's important that everyone reviews the project report before the meeting. 
   Let me know if you have any questions</p>
   <p>Additionally, the presentation file for the meeting hasn't been created 
   yet, so please ensure it's prepared in advance. I also need to inform you that 
   we will be having lunch provided during the meeting, so I need everyone to 
   give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report`,
    AiNote: `${index +230} 
     Additionally, the presentation file for the meeting hasn't 
    been created yet, so please ensure it's prepared in advance. 
    I also need to inform you that we will be having lunch provided 
    during the meeting, so I need everyone 
    to give me their dietary restrictions by tomorrow.
    It's important that everyone reviews the project report 
    before the meeting. Let me know if you have any questions</p>
   <p>Additionally, the presentation file for the meeting hasn't been created 
   yet, so please ensure it's prepared in advance. I also need to inform you 
   that we will be having lunch provided during the meeting, so I need everyone 
   to give me their dietary restrictions by tomorrow. 
   It's important that everyone reviews the project report before the meeting. 
   Let me know if you have any questions</p>
   <p>Additionally, the presentation file for the meeting hasn't been created 
   yet, so please ensure it's prepared in advance.
    
    `,
    category: "FullTime",
    status: `${(index%2===0)?'draft':'important'}`,
    createdAt: `${new Date(2024, 8, 13, 15, 30, 0)}`,
    updatedAt: `${new Date(2024, 8, 13, 15, 30, 0)}`,
  }));
  