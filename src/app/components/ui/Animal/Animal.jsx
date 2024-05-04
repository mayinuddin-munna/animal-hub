import AnimalModal from "../Modal/AnimalModal";
import CategoryModal from "../Modal/categoryModal";

const Animal = () => {
  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-full lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Land Animal
        </div>
        <div className="fixed gap-5 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div>
            <AnimalModal />
          </div>
          <div>
            <CategoryModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Animal;
