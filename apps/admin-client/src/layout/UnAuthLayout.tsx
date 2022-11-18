import { useAuth0 } from "@auth0/auth0-react";

export default function UnAuthLayout(){
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="bg-gray-50 flex items-center justify-center">
          <div className="h-96 bg-gray-700 w-1/2 text-white px-10 py-10 space-y-5 rounded-lg">
            <div className="space-y-4">
            <h1 className="text-3xl">Explore Order Assist App</h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla nostrum corporis ex reiciendis natus. Doloribus natus numquam incidunt, animi rerum recusandae. Exercitationem ipsam, enim odio totam consequatur mollitia cupiditate.
            Iste, animi similique. Veniam rerum officia quidem earum cumque soluta quibusdam, corporis, id voluptatibus voluptatum expedita eius explicabo quas tempora beatae veritatis dolore tenetur animi. Ratione ad expedita eligendi suscipit.
            Provident rem minima hic omnis ducimus architecto nihil reprehenderit magnam repellendus, aliquid earum molestias incidunt quibusdam ut excepturi, veritatis nisi impedit! Iure iusto recusandae id voluptatem harum repellat earum rerum.
            </p>
            </div>
            <div onClick={() => loginWithRedirect()} className="bg-indigo-400 px-10 py-5 w-32 rounded-lg hover:bg-indigo-700 text-md">
              Login
            </div>
          </div>
        </div>
      )
}