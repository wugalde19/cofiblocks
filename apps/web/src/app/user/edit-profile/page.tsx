import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ProfileOptionLayout } from "~/app/_components/features/ProfileOptionLayout";

type EditProfileOption = {
	imgUrl: string;
	label: string;
	href: string;
	customClass?: string;
	iconColor?: string;
};

const editProfileOptions: EditProfileOption[] = [
	{
		imgUrl: "/images/user-profile/avatar.svg",
		label: "Edit my profile",
		href: "/user/edit-profile/my-profile",
	},
	{
		imgUrl: "/images/user-profile/avatar.svg",
		label: "Edit my farm profile",
		href: "/user/edit-profile/farm-profile",
	},
];

export default function EditProfile() {
	const lastOptionIndex = editProfileOptions.length - 1;
	return (
		<ProfileOptionLayout title="Edit my profile">
			<div className="bg-white rounded-lg overflow-hidden">
				{editProfileOptions.map((option, index) => (
					<Link
						key={option.label}
						href={option.href}
						className={`flex items-center justify-between p-4 hover:bg-gray-50 ${
							lastOptionIndex !== index ? "border-b border-[#EAF1EF]" : ""
						}`}
					>
						<div className="flex items-center">
							<Image
								src={option.imgUrl}
								alt={option.label}
								width={20}
								height={20}
								className="mr-3"
							/>
							<span className="text-[#3C3E3F]">{option.label}</span>
						</div>
						<ChevronRightIcon scale={16} className="text-[#3C3E3F] w-5 h-5" />
					</Link>
				))}
			</div>
		</ProfileOptionLayout>
	);
}
