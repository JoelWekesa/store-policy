'use client';

import {useState} from 'react';
import {useFormStatus} from 'react-dom';
import {useToast} from '@/hooks/use-toast';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card';
import {deleteAccount} from '@/actions/delete-account';

function SubmitButton() {
	const {pending} = useFormStatus();
	return (
		<Button type='submit' disabled={pending}>
			{pending ? 'Submitting...' : 'Submit Request'}
		</Button>
	);
}

export function DeleteAccountForm() {
	const [error, setError] = useState<string | null>(null);
	const {toast} = useToast();

	async function handleSubmit(formData: FormData) {
		const result = await deleteAccount(formData);

		if (result.error) {
			setError(result.error);
		} else {
			setError(null);
			toast({
				title: 'Request Submitted',
				description: 'Your account deletion request will be processed within 14 days.',
			});
		}
	}

	return (
		<Card className='w-full max-w-md mx-auto'>
			<CardHeader>
				<CardTitle>Request Account Deletion</CardTitle>
				<CardDescription>Enter your phone number or email address to request account deletion.</CardDescription>
			</CardHeader>
			<form action={handleSubmit}>
				<CardContent>
					<div className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='contact'>Phone or Email</Label>
							<Input id='contact' name='contact' type='text' placeholder='Enter your phone or email' required />
						</div>
						{error && <p className='text-sm text-red-500'>{error}</p>}
					</div>
				</CardContent>
				<CardFooter>
					<SubmitButton />
				</CardFooter>
			</form>
		</Card>
	);
}
