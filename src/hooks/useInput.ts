import { useState } from 'react';

import { useValidation } from './useValidation';

// /. imports

export function useInput(currentValue: string, validations: any) {
    const [value, setValue] = useState<string>(currentValue);
    const [isInputActive, setInputActiveStatus] = useState<boolean>(false);

    const validationsObj = useValidation({ value, validations });

    const onInputChange = (e: string) => {
        // get correct string value from event
        setValue(e);
    };

    const onInputBlur = () => {
        // when leave input field
        setInputActiveStatus(true);
    };

    return {
        value,
        isInputActive,
        setInputActiveStatus,
        ...validationsObj,
        onInputChange,
        onInputBlur
    };
}
