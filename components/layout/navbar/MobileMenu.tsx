import { Menu, Transition } from '@headlessui/react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const links = [
    {
        text: 'Blog',
        url: '/blog',
    },
    {
        text: 'Projects',
        url: '/',
    },
    {
        text: 'About',
        url: '/about',
    },
];

export default function MobileMenu() {
    return (
        <Menu as="div" className="h-7 w-7 md:hidden">
            {({ open }) => (
                <>
                    <Menu.Button aria-label="mobileMenu">
                        {open ? (
                            <XMarkIcon className="h-7 w-7" />
                        ) : (
                            <Bars3BottomRightIcon className="h-7 w-7" />
                        )}
                    </Menu.Button>
                    <Transition
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Menu.Items className="absolute right-[7.5%] mr-4 mt-8 w-32 space-y-1 rounded-md bg-stone-100 p-2 outline-dashed outline-2 outline-offset-4 outline-gray-200 dark:bg-stone-800 dark:outline-gray-800">
                            {links.map((link, i) => {
                                return (
                                    <Menu.Item key={i}>
                                        <Link
                                            key={i}
                                            href={link.url}
                                            className="block rounded px-3 py-2 font-semibold transition duration-200 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-700"
                                        >
                                            {link.text}
                                        </Link>
                                    </Menu.Item>
                                );
                            })}
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}
