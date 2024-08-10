import { Ellipsis, MessageSquare } from "lucide-react";
import { Button } from "../../components/Button";
import profile1 from "/profile-1.png";
import profile2 from "/profile-2.png";
import { Modal } from "../../components/Modal";
import { Login } from "../auth/Login/Login";
import { SignUp } from "../auth/Signup/Signup";
import { useState } from "react";

export const Dashboard = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleRegister = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const handleLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <div className="w-[700px] mx-auto py-[69px]">
      <h1 className="font-medium text-[28px] text-atlysGray-3">Hello Jane</h1>
      <p className="mt-3 text-base text-atlysGray-7">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>

      <div
        onClick={() => {
          setIsLoginModalOpen(true);
        }}
        className="rounded-lg border-2 border-atlysGray-6 px-5 py-6 bg-atlysGray-1 mt-10"
      >
        <p className="text-atlysGray-3 font-medium text-lg">Create Post</p>
        <div className="rounded-lg flex mt-4 p-4 bg-atlysBlack-2 items-center">
          <div className="rounded-full flex justify-center items-center min-w-[48px] min-h-[48px] max-h-[48px] bg-atlysGray-1">
            💬
          </div>
          <textarea
            placeholder="How are you feeling today?"
            className="text-white w-full bg-transparent rounded-lg ml-4 outline-none resize-none h-[30px]"
          />
        </div>
        <div className="w-full flex justify-end pt-4">
          <div className="w-[111px]">
            <Button fullWidth>Post</Button>
          </div>
        </div>
      </div>

      <div
        onClick={() => setIsLoginModalOpen(true)}
        className="rounded-lg border-2 border-atlysGray-6 px-5 py-6 bg-atlysGray-1 mt-4"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            <img
              src={profile1}
              alt="profile"
              className="w-[44px] h-[44px] rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-medium text-base text-atlysGray-3">
                Theresa Webb
              </p>
              <p className="text-sm text-atlysGray-7">5mins ago</p>
            </div>
          </div>
          <Ellipsis size={16} className="text-atlysGray-3" />
        </div>
        <div className="rounded-lg flex mt-4 p-4 bg-atlysBlack-2 items-start">
          <div className="rounded-full flex justify-center items-center min-w-[48px] min-h-[48px] max-h-[48px] bg-atlysGray-1">
            👋
          </div>
          <p className="w-full bg-transparent rounded-lg ml-4 text-atlysGray-7 text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="flex items-center mt-[14px]">
          <MessageSquare size={19} className="text-atlysGray-3" />
          <p className="ml-2 text-atlysGray-7 text-sm">24 Comments</p>
        </div>
      </div>

      <div
        onClick={() => setIsLoginModalOpen(true)}
        className="rounded-lg border-2 border-atlysGray-6 px-5 py-6 bg-atlysGray-1 mt-4"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            <img
              src={profile2}
              alt="profile"
              className="w-[44px] h-[44px] rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-medium text-base text-atlysGray-3">
                Marvin McKinney
              </p>
              <p className="text-sm text-atlysGray-7">8mins ago • Edited</p>
            </div>
          </div>
          <Ellipsis size={16} className="text-atlysGray-3" />
        </div>
        <div className="rounded-lg flex mt-4 p-4 bg-atlysBlack-2 items-start">
          <div className="rounded-full flex justify-center items-center min-w-[48px] min-h-[48px] max-h-[48px] bg-atlysGray-1">
            😞
          </div>
          <p className="w-full bg-transparent rounded-lg ml-4 text-atlysGray-7 text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="flex items-center mt-[14px]">
          <MessageSquare size={19} className="text-atlysGray-3" />
          <p className="ml-2 text-atlysGray-7 text-sm">24 Comments</p>
        </div>
      </div>

      <Modal
        isOpen={isLoginModalOpen}
        handleClose={() => setIsLoginModalOpen(false)}
      >
        <Login
          onRegister={handleRegister}
          onLoginNow={() => setIsLoginModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isSignupModalOpen}
        handleClose={() => setIsSignupModalOpen(false)}
      >
        <SignUp
          onLogin={handleLogin}
          onContinue={() => setIsSignupModalOpen(false)}
        />
      </Modal>
    </div>
  );
};
