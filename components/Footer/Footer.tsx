"use client";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FooterComponent() {
    const [hidden, setHidden] = useState(false);
    const pathName = usePathname();
    let allowedPaths = ["/", ""];
    useEffect(() => {
        if (allowedPaths.includes(pathName)) {
            setHidden(false);
            return;
        }
        setHidden(true);
    }, [pathName]);

    const scrollToFunc = (scrollToId: any) => {
        let element = document.getElementById(scrollToId) as HTMLElement;
        if (!element) {
            console.log("Element not found");
            return;
        }

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };

    return (
        <footer className={`w-full ${hidden ? 'hidden' : ''}`}>
            <div className="px-[6%]">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <div className="flex justify-center lg:justify-start items-center">
                            {/* <Image src="/logo.svg" width={40} height={40} alt="logo" /> */}
                            <h1>PayVista</h1>
                        </div>
                        <p className="py-8 text-sm text-[--darkText2] lg:max-w-xs text-center lg:text-left">Trusted by users from 62+ countries! Have any query?</p>
                        <div
                            className="py-2.5 px-5 h-9 block w-fit bg-[--darkBtn] rounded-full shadow-sm text-xs text-[darkText1] mx-auto transition-all  duration-500 cursor-pointer bg-indigo-700 text-white lg:mx-0">
                            Contact us
                        </div>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-[--darkText1] font-medium mb-7">PayVista</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <div onClick={() => scrollToFunc("scroll-to-home")} className="text-[--darkText2] hover:text-[--darkText1] cursor-pointer">
                                    Home
                                </div>
                            </li>
                            <li className="mb-6">
                                <div onClick={() => scrollToFunc("scroll-to-features")} className="text-[--darkText2] hover:text-[--darkText1] cursor-pointer">
                                    Features
                                </div>
                            </li>
                            <li>
                                <div onClick={() => scrollToFunc("scroll-to-feedback")} className="text-[--darkText2] hover:text-[--darkText1] cursor-pointer">
                                    Feedback
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-[--darkText1] font-medium mb-7">Features</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <div className="text-[--darkText2] hover:text-[--darkText1] cursor-pointer">
                                    Add Transactions
                                </div>
                            </li>
                            <li className="mb-6">
                                <div className="text-[--darkText2] hover:text-[--darkText1] cursor-pointer">
                                    Edit Transactions
                                </div>
                            </li>
                            <li>
                                <div className="text-[--darkText2] hover:text-[--darkText1] cursor-pointer">
                                    Remove Transactions
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-[--darkText1] font-medium mb-7">Resources</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6 cursor-pointer">
                                <div className="text-[--darkText2] hover:text-[--darkText1]">
                                    FAQs
                                </div>
                            </li>
                            <li className="mb-6 cursor-pointer">
                                <div className="text-[--darkText2] hover:text-[--darkText1]">
                                    Quick Start
                                </div>
                            </li>
                            <li className="mb-6 cursor-pointer">
                                <div className="text-[--darkText2] hover:text-[--darkText1]">
                                    Documentation
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-[--darkText1] font-medium mb-7">Blogs</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6 cursor-pointer">
                                <div className="text-[--darkText2] hover:text-[--darkText1]">
                                    Tips & Tricks
                                </div>
                            </li>
                            <li className="mb-6 cursor-pointer">
                                <div className="text-[--darkText2] hover:text-[--darkText1]">
                                    Latest Updates
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="text-[--darkText2] hover:text-[--darkText1]">
                                    Events
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <Link href="https://www.linkedin.com/in/maanassehgal" className="text-sm text-[darkText1] underline underline-offset-4">
                            <div>@PayVista 2024, All rights reserved.</div>
                        </Link>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                            <Link href="https://www.linkedin.com/in/maanassehgal/" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                                <svg className="w-[1rem] h-[1rem] text-[darkText1]" viewBox="0 0 13 12" fill="none" xmlns="">
                                    <path
                                        d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29661 11.5527Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </Link>
                            <Link href="https://www.instagram.com/maanas1605" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex justify-center items-center hover:bg-indigo-600 p-2">
                                <Instagram />
                            </Link>
                            <Link href="https://twitter.com/maanas_1605" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                                <svg className="w-[1rem] h-[1rem] text-[darkText1]" viewBox="0 0 13 12" fill="none" xmlns="">
                                    <path
                                        d="M12.7076 1.67336C12.2687 1.85865 11.8024 1.96892 11.3151 2.00779C11.815 1.71763 12.1942 1.27168 12.3608 0.727449C11.8935 0.990758 11.3742 1.17605 10.8214 1.267C10.3761 0.805057 9.73729 0.518066 9.03001 0.518066C7.83519 0.518066 6.8638 1.48946 6.8638 2.68428C6.8638 2.86957 6.88249 3.04832 6.91856 3.21991C4.96052 3.12254 3.24364 2.24363 2.11099 0.864304C1.91916 1.18798 1.80744 1.55904 1.80744 1.96169C1.80744 2.71847 2.20968 3.38668 2.82069 3.78404C2.41366 3.76904 2.02267 3.65433 1.68279 3.45802C1.68279 3.46791 1.68279 3.4778 1.68279 3.48769C1.68279 4.59154 2.45771 5.51554 3.48956 5.71963C3.30286 5.76941 3.10597 5.79579 2.90246 5.79579C2.75526 5.79579 2.61226 5.78023 2.47371 5.75054C2.7662 6.65886 3.6117 7.32318 4.61234 7.34102C3.84197 7.9611 2.88105 8.33432 1.82686 8.33432C1.6667 8.33432 1.50861 8.32459 1.35428 8.30523C2.36624 8.9537 3.59927 9.32861 4.94006 9.32861C9.02411 9.32861 11.3692 5.83267 11.3692 2.94535C11.3692 2.84589 11.3676 2.74767 11.3636 2.64992C11.8374 2.31036 12.2435 1.87867 12.5634 1.37649L12.7076 1.67336Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
