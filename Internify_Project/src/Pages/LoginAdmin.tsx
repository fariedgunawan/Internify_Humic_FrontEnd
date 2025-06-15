import logoblack from "../assets/logo.png";
const LoginAdmin = () => {
  return (
    <div className="body-container min-h-screen bg-[#F7FAFC]">
      <div className="container-of-card flex flex-col min-h-screen gap-9 justify-center items-center">
        <img src={logoblack} className="w-[250px]" alt="" />
        <div className="form-input bg-white rounded-3xl flex flex-col items-start gap-8 p-[30px] w-[30rem] shadow-2xl">
          <div className="username-section flex flex-col w-full gap-2">
            <div className="title-of-username flex flex-row items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#2A4365]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <h2 className="text-[20px] text-[#2A4365]">Username</h2>
            </div>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-4 bg-[#EDF2F7] rounded-xl"
            />
          </div>
          <div className="username-section flex flex-col w-full gap-2">
            <div className="title-of-username flex flex-row items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#2A4365]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <h2 className="text-[20px] text-[#2A4365]">Password</h2>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 bg-[#EDF2F7] rounded-xl"
            />
          </div>

          <button className="bg-[#2A4365] text-[20px] text-white w-full p-3 rounded-xl font-medium">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
