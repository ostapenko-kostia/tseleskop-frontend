import { LoaderIcon } from 'lucide-react'
import { useContext, useEffect, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { userService } from '../../../services/user.service'
import { useAuthStore } from '../../../store/auth.store'
import { Button } from '../../ui/button'
import { DialogContext } from '../../ui/dialog'

export function SettingsEditPhoto() {
	const DialogContextValues = useContext(DialogContext)
	const closeDialog = () => DialogContextValues?.closeDialog()
	const editorRef = useRef<AvatarEditor>(null)

	const { user } = useAuthStore()
	const navigate = useNavigate()

	const [file, setFile] = useState<File | null>()
	const [isPending, setIsPending] = useState(false)

	const handleFileSelection = async (e: any) => {
		const selectedFile = e.target?.files[0]
		if (!selectedFile) return

		try {
			console.log('Selected file type:', selectedFile.type)
			console.log('Selected file name:', selectedFile.name)

			if (selectedFile.size > 5 * 1024 * 1024) {
				toast.error('Файл очень большой, максимальный размер 5MB')
				return
			}

			setFile(selectedFile)
		} catch (error) {
			console.error('Error processing file:', error)
			toast.error('Ошибка обработки файла')
		}
	}

	const handleSaveAvatar = async () => {
		if (!file || !editorRef.current) {
			toast.error('Выберите файл')
			return
		}

		setIsPending(true)

		try {
			const canvas = editorRef.current.getImageScaledToCanvas()
			canvas.toBlob(async blob => {
				if (!blob) {
					toast.error('Ошибка обработки изображения')
					return
				}

				const formData = new FormData()
				formData.append('image', blob, 'avatar.png')

				try {
					const response = await userService.editUserPhoto(user!.id, formData)
					toast.success('Успешно!')
					useAuthStore.setState({ user: response.data })
				} catch (error) {
					console.error('Error uploading photo:', error)
					toast.error('Ошибка загрузки фото')
				} finally {
					setIsPending(false)
					setFile(null)
					closeDialog()
				}
			}, 'image/png')
		} catch (error) {
			console.error('Error processing image:', error)
			toast.error('Ошибка обработки изображения')
			setIsPending(false)
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
					Выберите файл
					<input
						className='hidden'
						type='file'
						id='file'
						onChange={handleFileSelection}
						accept='image/*,.png,.jpg,.jpeg,.heic'
					/>
				</label>
				{file && (
					<div className='flex flex-col gap-2 items-center mt-4'>
						<AvatarEditor
							ref={editorRef}
							image={file}
							width={250}
							height={250}
							border={50}
							borderRadius={125}
							color={[255, 255, 255, 0.6]}
							scale={1.2}
							rotate={0}
						/>
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
