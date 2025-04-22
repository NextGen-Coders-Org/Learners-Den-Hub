
export const toast = () => { 
    return  [
      {
         id:101,
         title:"testing title1",
         description:"test description1",
         action:"yes"
      },{
        id:102,
         title:"testing title2",
         description:"test description2",
         action:"no"
      }
    ]
 };

export const useToast = () => {
     return { toast };
};
