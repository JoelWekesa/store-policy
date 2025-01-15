'use client';

import Image from 'next/image';

export default function PolicyComponent() {
	return (
		<div className='p-4 sm:p-8 flex flex-col gap-8'>
			<main className='flex flex-col gap-8 row-start-2  sm:items-start'>
				<div className='mt-6 bg-gray-100 p-4 rounded-md text-sm text-gray-700'>
					<h2 className='font-bold mb-2'>Terms and Conditions</h2>
					<p>
						Welcome to <strong>estore</strong>!
					</p>
					<p>
						By using our platform, you agree to comply with and be bound by these Terms and Conditions {`("Terms")`}. These
						Terms govern your access to and use of the estore app and services, including the creation of stores, inventory
						management, order processing, and the generation of storefronts. If you do not agree to these Terms, you must not
						use the app.
					</p>
					<p className='mt-2 font-bold'>1. Definitions</p>
					<ul className='list-disc pl-5'>
						<li>
							<strong>{`"estore"`}</strong>: Refers to the mobile application and platform that enables users to create stores,
							manage inventory, and handle sales.
						</li>
						<li>
							<strong>{`"User"`}</strong>: Any individual or entity who accesses and uses the estore platform.
						</li>
						<li>
							<strong>{`"Store Owner"`}</strong>: A user who creates and operates a store on the platform.
						</li>
						<li>
							<strong>{`"Inventory"`}</strong>: The products or goods that a store owner manages and lists for sale on their
							storefront.
						</li>
						<li>
							<strong>{`"Order"`}</strong>: A request made by a customer to purchase goods or services from a store on the
							estore platform.
						</li>
						<li>
							<strong>{`"Platform"`}</strong>: Refers to the online infrastructure of the estore app, including its services,
							features, and functionalities.
						</li>
					</ul>
					<p className='mt-2 font-bold'>2. Eligibility</p>
					<p>
						To use estore, you must be at least 18 years of age or have the legal capacity to enter into a binding agreement.
						By using the Platform, you represent and warrant that you meet the eligibility requirements and have the authority
						to agree to these Terms.
					</p>
					<p className='mt-2 font-bold'>3. User Accounts</p>
					<p>
						To access the services, you must create a user account by providing accurate and complete information. You are
						responsible for maintaining the confidentiality of your account login credentials, including your password.
					</p>
					<p className='mt-2 font-bold'>4. Store Creation and Management</p>
					<p>
						Once you have created a user account, you may create and manage stores. As a store owner, you are responsible for
						ensuring that the inventory, product descriptions, prices, and any other content related to your store comply with
						applicable laws and regulations.
					</p>
					<p className='mt-2 font-bold'>5. Orders and Payments</p>
					<p>
						Orders placed on the platform are subject to acceptance and availability. Store owners are responsible for
						processing orders, including shipping and handling. The platform may charge fees for certain services, and
						payments will be processed through the available payment methods.
					</p>
					<p className='mt-2 font-bold'>6. Prohibited Activities</p>
					<p>
						You may not use the platform for unlawful purposes or in a way that infringes the rights of others. Prohibited
						activities include, but are not limited to, fraudulent transactions, distribution of harmful or illegal content,
						and engagement in any activity that could damage the platform’s infrastructure or reputation.
					</p>
					<p className='mt-2 font-bold'>7. Termination</p>
					<p>
						estore reserves the right to suspend or terminate your account if you violate these Terms. Upon termination, you
						lose access to your account and any related services.
					</p>
					<p className='mt-2 font-bold'>8. Privacy</p>
					<p>
						Your use of the platform is also governed by our Privacy Policy, which outlines how we collect, use, and protect
						your information.
					</p>
					<p className='mt-2 font-bold'>9. Limitation of Liability</p>
					<p>
						estore is not liable for any indirect, incidental, or consequential damages arising from your use or inability to
						use the platform, including lost profits or data.
					</p>
					<p className='mt-2 font-bold'>10. Governing Law</p>
					<p>
						These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the
						platform operates, without regard to its conflict of law principles.
					</p>
					<p className='mt-2 font-bold'>11. Changes to Terms</p>
					<p>
						We reserve the right to update or modify these Terms at any time. Any changes will be posted on this page, and the
						effective date will be updated accordingly.
					</p>
					<p className='mt-2 font-bold'>12. Contact Information</p>
					<p>If you have any questions or concerns about these Terms, please contact us at joelwekesa.jw@gmail.com</p>
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
