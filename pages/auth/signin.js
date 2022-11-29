import { async } from "@firebase/util";
import React from "react";
import { getProviders, signIn as SignInProvider } from "next-auth/react";
import Header from "../../components/Header";

const signIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-40 px-14 text-center">
        <img
          className="w-80 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt="inst-icon"
        />
        <p>This for login</p>
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-gray-100 mt-2 p-3 border border-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300 ease-out text-lg flex items-center gap-x-2 rounded-lg"
                onClick={() =>
                  SignInProvider(provider.id, { callbackUrl: "/" })
                }
              >
                {getSignInIcon(provider.name)}Signin with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
function getSignInIcon(provider) {
  switch (provider) {
    case "Google":
      return (
        <svg
          className="w-5 h-5 hover:bg-gray-600 hover:text-white"
          aria-hidden="true"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#999"
            d="M16-.01c-8.837 0-16 7.163-16 16 0 8.836 7.163 16 16 16s16-7.164 16-16c0-8.837-7.163-16-16-16z"
          />
          <path
            fill="#FFF"
            d="M24.477 14.334c.111.59.171 1.209.171 1.854 0 5.044-3.377 8.631-8.476 8.631-4.878 0-8.83-3.952-8.83-8.83s3.952-8.83 8.83-8.83c2.384 0 4.376.877 5.905 2.301l-2.489 2.489v-.006c-.927-.883-2.102-1.336-3.416-1.336-2.914 0-5.281 2.461-5.281 5.375 0 2.913 2.368 5.381 5.281 5.381 2.644 0 4.442-1.512 4.813-3.587h-4.813v-3.444l8.305.002z"
          />
        </svg>
      );
    case "GitHub":
      return (
        <svg
          className="w-5 h-5 hover:bg-gray-600 hover:text-white"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            clipRule="evenodd"
          />
        </svg>
      );
  }
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
