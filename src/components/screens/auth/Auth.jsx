import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import styles from './Auth.module.scss'

const Auth = () => {
	const [type, setType] = useState('auth')
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data)
	}
	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						name='Email'
						register={register}
						error={errors?.Email?.message}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Email'
					/>
					<Field
						name='Password'
						register={register}
						error={errors?.Password?.message}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('reg')}>Register</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
