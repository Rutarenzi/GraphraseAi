import * as Yup from "yup";

export const ContentValid = Yup.object().shape({
    userNote: Yup
    .string()
    .required()
    .min(15, " User Note length must be more than 15 characters"),

    AiNote: Yup
    .string()
    .required()
    .min(6, "Ai note must be more than  is 6 characters") 
});
