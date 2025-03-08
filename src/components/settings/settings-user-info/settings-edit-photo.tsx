import { useNavigate } from 'react-router'
import { useEditUserPhoto } from '../../../hooks/useEditUser'
import { useAuthStore } from '../../../store/auth.store'
import { Button } from '../../ui/button'
import { DialogContext } from '../../ui/dialog'
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'

export function SettingsEditPhoto() {
	const DialogContextValues = useContext(DialogContext)
	const closeDialog = () => DialogContextValues?.closeDialog()

	const { user } = useAuthStore()
	const navigate = useNavigate()

	const { register, handleSubmit, watch } = useForm<{
		photo: FileList
	}>()

	const { mutate: editUser, isPending } = useEditUserPhoto(closeDialog)

	useEffect(() => {
		if (!user) navigate('/register')
	}, [user])

	return (
		<form
			action='#'
			className='w-full flex flex-col gap-4'
			onSubmit={handleSubmit(data => editUser({ id: user!.id, data }))}
		>
			<div className='flex flex-col'>
				<label htmlFor='file' className='mb-2 opacity-80 font-medium'>
					Загрузите фото
				</label>
				<label className='w-min text-nowrap appearance-none rounded-md border border-[#ccc] bg-white text-[#333] placeholder:text-[#808080] px-7 cursor-pointer py-3 text-sm focus:z-10 focus:bg-indigo-500 focus:outline-none focus:ring-indigo-500;'>
					Выберите файл
					<input
						className='hidden'
						type='file'
						id='file'
						{...register('photo')}
					/>
				</label>
				{watch('photo') && (
					<div className='flex flex-col gap-2'>
						<span>- {watch('photo')[0].name}</span>
					</div>
				)}
			</div>
			<Button disabled={isPending} className='w-2/3 mx-auto'>
				Сменить
			</Button>
		</form>
	)
}
