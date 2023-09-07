"use client";
import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from "react";
type Provider = {
	id: string;
	name: string;
	type: string;
	signinUrl: string;
	signinUrlParams?: Record<string, string> | null;
};
type Providers = Record<string, Provider>;
const AuthProviders = () => {
	const [providers, setProviders] = useState<Providers | null>(null);
	useEffect(() => {
		const fetchProviders = async () => {
			const res = await getProviders();

			setProviders(res);
		};
		fetchProviders();
	}, []);

	if (providers) {
		return (
			<div>
				{Object.values(providers).map((provider: Provider, i) => {
					return (
						<button onClick={() => signIn(provider?.id)} key={i}>
							{provider.id}
						</button>
					);
				})}
			</div>
		);
	}
	return <div>AuthProviders</div>;
};
export default AuthProviders;
