import { ChangeEvent, useState } from 'react'

const useForm = <T extends Object>(fields: T) => {

    const [form, setForm] = useState(fields);

    const onChange = (e: ChangeEvent<HTMLInputElement>, field: keyof T) => {
        setForm({
            ...form,
            [field]: e.target.value,
        });
    };

    return { onChange, fields: form, ...form }
}

export default useForm