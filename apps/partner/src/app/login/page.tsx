import React, { FunctionComponent } from 'react';

const LoginPage: FunctionComponent = () => {
  return (
    <div className="flex items-stretch min-h-full bg-[#2574db] w-full overflow-hidden max-h-screen">
      <div className="min-w-[40%] basis-2/5 h-screen bg-[url('/images/login-hero.jpg')] bg-[80%] bg-cover" />
      <div className="flex flex-column min-h-screen justify-center items-center px-6 authentication--has-hero-bg lg:min-w-[60%] lg:basis-3/5">
        {/* Note: we would use Boulevard form here */}
        <p className="text-white mb-5 text-center">
          Unauthorized access to this system is strictly prohibited.
        </p>
      </div>
    </div>
  )
};

export default LoginPage;
