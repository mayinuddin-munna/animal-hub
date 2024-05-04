"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const AnimalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-full lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Add Animal
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg text-gray-900">
                  Add Animal
                  </Dialog.Title>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Animal name"
                      className="w-full py-3 px-3 rounded-md outline-none bg-[#F2F2F2] text-black"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center bg-slate-100">
                    <label
                      htmlFor="fileInput"
                      className="w-full py-3 px-3 rounded-md outline-none  cursor-pointer"
                    >
                      <span className="text-gray-600">Image</span>
                    </label>
                    <div className="flex-shrink-0">
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        aria-label="Upload file"
                      />
                      <span className="py-2 px-4 rounded-md bg-[#CCC] text-white mr-2">
                        Upload
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full rounded-md border border-transparent bg-[#101010] text-[18px] px-4 py-4 text-sm text-white hover:bg-black"
                      onClick={closeModal}
                    >
                      Create Animal!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AnimalModal;
