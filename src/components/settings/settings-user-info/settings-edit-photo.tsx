import { useNavigate } from 'react-router'
import { useAuthStore } from '../../../store/auth.store'
import { Button } from '../../ui/button'
import { DialogContext } from '../../ui/dialog'
import { useContext, useEffect, useState } from 'react'
import { LoaderIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { userService } from '../../../services/user.service'

export function SettingsEditPhoto() {
	const DialogContextValues = useContext(DialogContext)
	const closeDialog = () => DialogContextValues?.closeDialog()

	const { user } = useAuthStore()
	const navigate = useNavigate()

	const [file, setFile] = useState<File | null>()
	const [isPending, setIsPending] = useState(false)

	const handleFileSelection = (e: any) => {
		const file = e.target?.files[0]
		if (!file) return
		setFile(file)
	}

	const handleSaveAvatar = async () => {
		if (!file) {
			toast.error('Выберите файл')
			return
		}

		setIsPending(true)

		const formData = new FormData()
		formData.append('image', file, 'avatar.png')

		try {
			const response = await userService.editUserPhoto(user!.id, formData)
			console.log('Upload successful:', response.data)
			toast.success('Успешно!')
			useAuthStore.setState({ user: response.data })
		} catch (error) {
			console.error('Error uploading photo:', error)
		} finally {
			setIsPending(false)
			setFile(null)
			closeDialog()
		}
	}

	useEffect(() => {
		if (!user) navigate('/register')
	}, [user])

	return (
		<div className='w-full flex flex-col gap-4'>
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
						onChange={handleFileSelection}
						accept='.png, .jpg'
					/>
				</label>
				{file && (
					<div className='flex flex-col gap-2'>
						<span>- {file.name}</span>
					</div>
				)}
			</div>
			<Button
				onClick={handleSaveAvatar}
				disabled={isPending}
				className='w-2/3 mx-auto'
			>
				{isPending && <LoaderIcon className='animate-spin' />}
				{isPending ? 'Подождите...' : 'Сменить'}
			</Button>
		</div>
	)
}
