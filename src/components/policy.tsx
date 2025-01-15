'use client';

import Image from 'next/image';

export default function PrivacyPolicyComponent() {
	return (
		<div className='p-4 sm:p-8 flex flex-col gap-8'>
			<main className='flex flex-col gap-8 sm:items-start'>
				<div className='mt-6 bg-gray-100 p-4 rounded-md text-sm text-gray-700'>
					<h2 className='font-bold mb-2'>Privacy Policy</h2>
					<p>
						Welcome to <strong>estore</strong>! Your privacy is important to us, and this Privacy Policy explains how we
						collect, use, and protect your personal information when you use our platform.
					</p>
					<p className='mt-2 font-bold'>1. Information We Collect</p>
					<ul className='list-disc pl-5'>
						<li>
							<strong>Personal Information:</strong> When creating an account, we collect details such as your name, email
							address, and contact information.
						</li>
						<li>
							<strong>Usage Data:</strong> Information about how you interact with the platform, including pages visited,
							features used, and actions taken.
						</li>
						<li>
							<strong>Payment Information:</strong> If you make payments through the platform, we may collect payment details,
							which are processed securely by third-party payment providers.
						</li>
					</ul>
					<p className='mt-2 font-bold'>2. How We Use Your Information</p>
					<p>We use your information to:</p>
					<ul className='list-disc pl-5'>
						<li>Provide and maintain the {`platform's`} functionality.</li>
						<li>Process orders, payments, and other transactions.</li>
						<li>Improve and personalize your user experience.</li>
						<li>Send important updates, notifications, and promotional content.</li>
					</ul>
					<p className='mt-2 font-bold'>3. Sharing Your Information</p>
					<p>We may share your information with:</p>
					<ul className='list-disc pl-5'>
						<li>Service providers who assist in platform operations, such as hosting and payment processing.</li>
						<li>Third parties when required by law, to protect our rights, or to prevent fraud and abuse.</li>
						<li>
							Partners or affiliates for the purposes of improving and expanding our services, with your consent where
							required.
						</li>
					</ul>
					<p className='mt-2 font-bold'>4. Data Security</p>
					<p>
						We implement industry-standard security measures to protect your information. However, no online system is
						guaranteed to be completely secure, and you share information at your own risk.
					</p>
					<p className='mt-2 font-bold'>5. Cookies and Tracking Technologies</p>
					<p>
						We use cookies and similar tracking technologies to analyze user behavior and enhance your experience. You can
						control cookie preferences through your browser settings.
					</p>
					<p className='mt-2 font-bold'>6. Your Rights</p>
					<p>You have the right to:</p>
					<ul className='list-disc pl-5'>
						<li>Access and update your personal information.</li>
						<li>Request the deletion of your account and associated data.</li>
						<li>Opt out of receiving promotional communications.</li>
					</ul>
					<p className='mt-2 font-bold'>7. Changes to This Policy</p>
					<p>
						We may update this Privacy Policy from time to time. Changes will be posted on this page, and the effective date
						will be updated accordingly.
					</p>
					<p className='mt-2 font-bold'>8. Contact Us</p>
					<p>
						If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
						<strong>joelwekesa.jw@gmail.com</strong>.
					</p>
				</div>
			</main>

			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://estore.africa'
					target='_blank'
					rel='noopener noreferrer'>
					<Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
					Go to estore.africa →
				</a>
			</footer>
		</div>
	);
}
