import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
		useAuthPage()
	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						name='email'
						register={register}
						error={errors?.email?.message}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Email'
					/>
					<Field
						name='password'
						register={register}
						error={errors?.password?.message}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Register</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
