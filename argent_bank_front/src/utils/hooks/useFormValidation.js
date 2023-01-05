import { CreateContext, useState, useMemo, useContext } from "react";


const Context = CreateContext();
function FormProvider({ children }) {
    const [isValid, setValid] = useState(false);
    const validate = (fields) => {
        let errors = [];
        Object.entries(fields).map(([key, value]) => {
            if (!value) {
                errors.push(key);
            }
        });
        return setValid(!errors.length);
    };
    const value = useMemo(() => {
        return {
            validate,
            isValid,
        };
    }, [isValid]);
    //Chaque objet Context est livré avec un composant Provider React qui permet aux composants consommateurs de s'abonner aux changements de contexte.
    return <Context.Provider value={value}>{children}</Context.Provider>
}


export function useFormValidation() {
    return useContext(Context);
}


export default FormProvider;
