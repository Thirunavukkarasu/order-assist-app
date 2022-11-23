import { useAuth0 } from "@auth0/auth0-react";

export default function UnAuthLayout(){
    const { loginWithRedirect } = useAuth0();
    const links = [{
      title: 'Home',
      href: '/home'
    },{
      title: 'Products',
      href: '/products'
    },{
      title: 'Features',
      href: '/features'
    },{
      title: 'Contact Us',
      href: '/contact-us'
    }]

    return (
        <div className="w-full h-20 bg-gray-200 flex flex-row justify-between items-center px-10">
            <div>
              <img src="oa-logo-5.png" alt="logo" className="w-36 h-8"/>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <ul className="flex flex-row space-x-4">
              {links.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="hover:text-indigo-500 relative group"
                    >
                      <span>{link.title}</span>
                      <div className="w-16 h-1 group-hover:bg-indigo-500 absolute top-6"></div>
                    </a>
                  </li>
                ))}
              </ul>
            <button className="bg-indigo-500 px-4 py-2 text-white rounded-lg" onClick={() => loginWithRedirect()}>Login</button>
            </div>
        </div>
      )
}