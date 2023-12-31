import { Menu } from '@headlessui/react'
import Image from 'next/image'



const ProfileBar = () => {

  const links = [
    { href: '/account-settings', label: 'Account' },
    { href: '/notification', label: 'Notifications' },
    { href: '/settings', label: 'Settings' }
  ]

  return (
    <Menu as='div' className='flex flex-col'>
      <Menu.Button>
        <Image 
          src='/images/avatar.png'
          width={40}
          height={30}
          alt='profile image'
          className='object-fit'
        />
      </Menu.Button>
      <Menu.Items>
        {links.map((link) => (
          <Menu.Item
            as="a"
            key={link.href}
            href={link.href}
            className="flex gap-[4px] ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
          >
            {link.label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}

export default ProfileBar