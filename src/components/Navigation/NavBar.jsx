import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Logo } from "../PageComponents/Logos/Logo.jsx";

const keyStr =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
	keyStr.charAt(e1 >> 2) +
	keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
	keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
	keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
	`data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
	}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function NavBar(props) {
	const { data: session, status } = useSession();
	const links = props.links;
	const dropDown = props.dropdownLinks;
	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-[1800px] px-2 sm:px-4 lg:px-8">
						<div className="flex h-16 justify-between">
							<div className="flex px-2 lg:px-0">
								<div className="hidden lg:ml-6 lg:flex lg:space-x-8">
									{/* Dropdown Menu */}
									{dropDown.map((e) => {
										return (
											<Menu
												key={e.key}
												as="div"
												className="inline-flex mt-[1.05rem] relative flex-shrink-0 border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
											// "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
											>
												<div>
													<Menu.Button>{e.name}</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className="absolute z-10 mt-5 w-60 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
														{e.links.map((item) => {
															return (
																<Menu.Item key={item.key}>
																	{({ active }) => (
																		<a
																			href={item.href}
																			className={classNames(
																				active ? "bg-gray-100" : "",
																				"block px-4 py-2 text-sm text-gray-700"
																			)}
																		>
																			{item.name}
																		</a>
																	)}
																</Menu.Item>
															);
														})}
													</Menu.Items>
												</Transition>
											</Menu>
										);
									})}
									{links.map((link) => {
										return (
											<a
												key={link.key}
												href={link.href}
												className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
											>
												{link.name}
											</a>
										);
									})}
								</div>
							</div>
							{/* conditionally return something if the value of props.searchBar === true */}
							{props.searchBar && (
								<div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
									<div className="w-full max-w-lg lg:max-w-xs">
										<label htmlFor="search" className="sr-only">
											Search
										</label>
										<div className="relative">
											<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
												<MagnifyingGlassIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</div>
											<input
												id="search"
												name="search"
												className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												placeholder="Search"
												type="search"
											/>
										</div>
									</div>
								</div>
							)}
							<div className="relative z-10 flex items-center lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>

								{/* Mobile menu items */}
								<Disclosure.Panel className="lg:hidden">
									<div className="absolute right-0 top-16 mt-2 py-1 w-screen max-w-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
										<div className="px-5 pt-4 pb-3 space-y-1">
											{/* Display navLinks for Mobile */}
											{links.map((link) => (
												<a
													key={link.key}
													href={link.href}
													className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
												>
													{link.name}
												</a>
											))}

											{/* Display dropdownLinks as sections for Mobile */}
											{dropDown.map((dropdown) => (
												<Disclosure key={dropdown.key} as="div" className="space-y-1">
													{({ open }) => (
														<>
															<Disclosure.Button className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
																{dropdown.name}
																<span className="float-right transform transition-transform duration-150 ease-in-out" aria-hidden="true">
																	{open ? '−' : '+'} {/* These are just simple indicators, you can replace them with icons */}
																</span>
															</Disclosure.Button>
															<Disclosure.Panel className="pt-4 pb-2 space-y-1">
																{dropdown.links.map((item) => (
																	<a
																		key={item.key}
																		href={item.href}
																		className="block pl-5 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
																	>
																		{item.name}
																	</a>
																))}
															</Disclosure.Panel>
														</>
													)}
												</Disclosure>
											))}
										</div>
									</div>
								</Disclosure.Panel>

							</div>
							<div className="hidden lg:ml-4 lg:flex lg:items-center">
								<button
									type="button"
									className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-4 flex-shrink-0">
									<div>
										<Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
											<span className="sr-only">Open user menu</span>
											<Logo />
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											{/* <Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item> */}
											<Menu.Item>
												{({ active }) =>
													session ? (
														<a
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
															onClick={(e) => {
																e.preventDefault();
																signOut({ callbackUrl: "/" });
															}}
														>
															Sign out
														</a>
													) : (
														<Link
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
															href="/login"
														>
															Sign in
														</Link>
													)
												}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
}
