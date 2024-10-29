import * as Yup from 'yup';

export const userValidation = Yup.object().shape({
    fullname: Yup.string().required('Nome completo obrigatório'),
    password: Yup.string().min(5).max(10).required('Senha é obrigatória'),
    confirmPassword: Yup.string().required('Senha é obrigatória').oneOf([Yup.ref('password'), ""], "Confirmação e senha precisam ser iguais")
})