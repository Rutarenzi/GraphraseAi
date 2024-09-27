import * as Yup from "yup";

export const ContentValid = Yup.object().shape({
    userNote: Yup
    .string()
    .required()
    .min(7, " user Note 6 character"),

    AiNote: Yup
    .string()
    .required()
    .min(3, "ai note required is 6") 
});
