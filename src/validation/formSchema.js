import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Must enter name!')
        .min(2, 'name must be at least 2 characters'),
    instructions: yup
        .string()
        .trim(),
    size: yup
        .string()
        .oneOf(['Small', 'Medium', 'Large', 'X Large'], 'Must Pick Size!'),
    sauce: yup
        .string()
        .oneOf(['Original Red', 'Garlic Parmesan', 'BBQ Sauce', 'Spinach Alfredo'], 'Must Pick Sauce!'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean()
    
   
});

export default formSchema;