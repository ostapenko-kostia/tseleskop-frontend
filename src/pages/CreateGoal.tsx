import { Link, useNavigate } from 'react-router'
import { HomeIcon } from '../components/icons/home-icon'
import { Button } from '../components/ui/button'
import { LoaderIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useCreateGoal } from '../hooks/useGoal'
import {
	CreateGoalTitle,
	CreateGoalAttainable,
	CreateGoalAward,
	CreateGoalDeadline,
	CreateGoalDescription,
	CreateGoalMeasurable,
	CreateGoalPrivacy,
	CreateGoalRelevant,
	CreateGoalSpecific,
	CreateGoalSubGoal,
	CreateGoalTitleField,
	CreateGoalUrgency,
} from '../components/create-goal'

interface Form {
	title: string
	urgencyLevel: 'LOW' | 'AVERAGE' | 'HIGH'
	specific: string
	measurable: string
	attainable: string
	award: string
	description: string
	relevant: string
	privacy: 'PRIVATE' | 'PUBLIC'
	deadline: '3_MONTHS' | '6_MONTHS' | '1_YEAR'
	subGoals?: { description: string }[]
}

export function CreateGoal() {
	const navigate = useNavigate()
	const { register, handleSubmit, setValue, watch, reset } = useForm<Form>({
		defaultValues: {
			privacy: 'PRIVATE',
			deadline: '3_MONTHS',
			urgencyLevel: 'LOW',
		},
	})

	const { mutate: createGoal, isPending } = useCreateGoal(() => {
		reset()
		setTimeout(() => navigate('/'), 1000)
	})

	return (
		<section className='relative pb-4'>
			<Link to='/' className='p-3 flex justify-end'>
				<HomeIcon />
			</Link>

			<CreateGoalTitle />

			<form onSubmit={handleSubmit(data => createGoal({ data }))}>
				<section className='px-4 pt-5 flex flex-col gap-5 w-full'>
					<CreateGoalTitleField register={register} />
					<CreateGoalUrgency setValue={setValue} watch={watch} />
				</section>

				<div className='bg-[#27448D] my-5 py-0.5 text-center text-white text-lg text-semibold'>
					<span>Описание цели</span>
				</div>

				<section className='flex flex-col gap-5 px-4'>
					<CreateGoalSpecific register={register} />
					<CreateGoalMeasurable register={register} />
					<CreateGoalAttainable register={register} />
					<CreateGoalRelevant register={register} />
					<CreateGoalDescription register={register} />
					<CreateGoalDeadline setValue={setValue} />
					<CreateGoalSubGoal watch={watch} setValue={setValue} />
					<CreateGoalAward register={register} />
					<CreateGoalPrivacy setValue={setValue} />
				</section>

				<div className='flex justify-end px-4'>
					<Button type='submit' className='ml-auto mt-5' disabled={isPending}>
						{isPending && <LoaderIcon className='animate-spin mr-2' />}
						{isPending ? 'Сохранение...' : 'Готово'}
					</Button>
				</div>
			</form>
		</section>
	)
}
