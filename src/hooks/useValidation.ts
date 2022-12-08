import { useState, useEffect } from 'react';

// /. imports

interface propTypes {
    value: string;
    validations: { [key: string]: number };
}

// /. interfaces

export function useValidation(props: propTypes): any {
    const { value, validations } = props;

    const [minLengthError, setMinLengthError] = useState<boolean>(false);
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false);

    const [minLengthCount, setminLengthCount] = useState<number>(0);
    const [maxLengthCount, setmaxLengthCount] = useState<number>(0);

    const [isInputValid, setInputValidStatus] = useState<boolean>(true);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    setminLengthCount(validations[validation]);
                    break;
                case 'maxLength':
                    value.length > validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false);
                    setmaxLengthCount(validations[validation]);
                    break;
                default:
                    return;
            }
        }
    }, [value, validations]);

    useEffect(() => {
        if (minLengthError || maxLengthError) {
            setInputValidStatus(false);
        } else {
            setInputValidStatus(true);
        }
    }, [minLengthError, maxLengthError]);

    return {
        minLengthError,
        minLengthCount,
        maxLengthError,
        maxLengthCount,
        isInputValid,
        setInputValidStatus
    };
}
