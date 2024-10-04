"use client";

import "~/styles/globals.css";
import { useAccount } from "@starknet-react/core";
import { GeistSans } from "geist/font/sans";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { TRPCReactProvider } from "~/trpc/react";
import StarknetProvider from "~/utils/starknet/provider";

function AuthWrapper({ children }: { children: React.ReactNode }) {
	// useAutoConnect();
	const { address } = useAccount();
	const router = useRouter();
	const pathname = usePathname();

	// useEffect(() => {
	// 	if (!address && pathname !== "/") {
	// 		router.push("/");
	// 	} else if (address && pathname === "/") {
	// 		router.push("/marketplace");
	// 	}
	// }, [address, router, pathname]);

	return <>{children}</>;
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" data-theme="cofiblocks" className={`${GeistSans.variable}`}>
			<body>
				<StarknetProvider>
					<TRPCReactProvider>
						<AuthWrapper>{children}</AuthWrapper>
					</TRPCReactProvider>
				</StarknetProvider>
			</body>
		</html>
	);
}
