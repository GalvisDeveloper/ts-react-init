
import useForm from '../hooks/useForm';

const Forms = () => {

    const { email, password, onChange } = useForm({
        email: 'test@test.com',
        password: '123456',
    });

    return (
        <>
            <h3>Forms</h3>
            <input
                type='text'
                className='form-control'
                placeholder='email'
                value={email}
                onChange={(e) => onChange(e, 'email')}
            />
            <input
                type='text'
                className='form-control'
                placeholder='password'
                value={password}
                onChange={(e) => onChange(e, 'password')}
            />

        </>
    );
};

export default Forms;
