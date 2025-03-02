import { useState, useRef } from 'react'

interface OTPInputProps {
	length?: number
	onComplete: (otp: string) => void
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 4, onComplete }) => {
	const [otp, setOtp] = useState<string[]>(new Array(length).fill(''))
	const inputsRef = useRef<(HTMLInputElement | null)[]>([])

	const handleChange = (index: number, value: string) => {
		if (!/^\d?$/.test(value)) return
		const newOtp = [...otp]
		newOtp[index] = value
		setOtp(newOtp)

		if (value && index < length - 1) {
			inputsRef.current[index + 1]?.focus()
		}

		if (newOtp.every(digit => digit !== '')) {
			onComplete(newOtp.join(''))
		}
	}

	const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
		if (e.key === 'Backspace' && !otp[index] && index > 0) {
			inputsRef.current[index - 1]?.focus()
		}
	}

	return (
		<div className='flex gap-2'>
			{otp.map((digit, index) => (
				<div key={index}>
					<input
						ref={el => {
							inputsRef.current[index] = el
						}}
						type='text'
						value={digit}
						maxLength={1}
						onChange={e => handleChange(index, e.target.value)}
						onKeyDown={e => handleKeyDown(index, e)}
						className='w-10 h-10 text-center text-xl font-medium outline-none'
					/>
					<hr
						className='h-0.5 w-full'
						style={{
							background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
						}}
					/>
				</div>
			))}
		</div>
	)
}

export default OTPInput
