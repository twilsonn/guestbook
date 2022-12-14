import { DotsVerticalIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";

import { userAtom } from "../Login";

import TimeAgo from "../TimeAgo";
import { EditPostModalOpen } from "../EditPostModal";

import { PostType } from ".";

const UserTitle: React.FC<{ post: PostType }> = ({ post }) => {
  const [currentUser] = useAtom(userAtom);
  const [_, setModal] = useAtom(EditPostModalOpen);
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex space-x-3 w-full">
        <div className="col-span-1 select-none">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-600">
            <span className="text-lg font-medium leading-none text-white uppercase">
              {post.user.username.slice(0, 2)}
            </span>
          </span>
        </div>
        <div>
          <p className="text-stone-600 font-semibold capitalize">
            {post.user.username}
          </p>
          <p className="text-sm">
            <TimeAgo date={new Date(post.createdAt)} />
          </p>
        </div>
      </div>

      {currentUser?.isAdmin && (
        <div>
          <button
            onClick={() => {
              console.log("object");
              setModal({ post: post, open: true });
            }}
            className="p-2 rounded-full transition-colors  hover:bg-stone-200 text-stone-600 "
          >
            <DotsVerticalIcon className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserTitle;
