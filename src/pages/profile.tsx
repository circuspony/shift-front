import { useForm } from 'react-hook-form';

type Profile = {
    firstname: string
    lastname: string
    age: number
}

function ProfileInfo() {
    const {register, handleSubmit, formState: {errors}} = useForm<Profile>()

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
    })

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input {...register('firstname',{ required: true })} id="firstname" name="firstname" type="text" />
                {
                    errors.firstname && <div className="error">Enter your name</div>
                }
            </div>
            <div>
                <label htmlFor="lastname">Last Name</label>
                <input {...register('lastname',{ required: true })} id="lastname" name="lastname" type="text" />
                {
                    errors.lastname && <div className="error">Enter your name</div>
                }
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input {...register('age',{ required: true })} id="age" name="age" type="text" />
                {
                    errors.age && <div className="error">Enter your age</div>
                }
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

export default ProfileInfo