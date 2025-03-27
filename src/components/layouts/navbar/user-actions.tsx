"use client";
import { images } from "@/src/data/images";
import { useStore } from "@/src/store";

interface UserActionsProps {
  onMenuToggle?: () => void;
  onProfileClick?: () => void;
}

const UserActions: React.FC<UserActionsProps> = ({
  onMenuToggle,
  onProfileClick
}) => {
  const { menu: MenuIcon, profile: ProfileIcon } = images.icons;
  const { toggleMobileMenu } = useStore();

  const handleMenuToggle = () => {
    toggleMobileMenu();

    if (onMenuToggle) onMenuToggle();
  };

  const handleProfileClick = () => {
    if (onProfileClick) onProfileClick();
  };

  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
      <button
        className="flex cursor-pointer items-center justify-center p-2.5 text-gray-700 transition-colors hover:text-gray-900 sm:p-3 md:hidden"
        aria-label="Toggle menu"
        onClick={handleMenuToggle}
      >
        <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        className="flex cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 p-2 transition-all hover:border-gray-300 sm:p-2.5 md:p-3"
        aria-label="User profile"
        onClick={handleProfileClick}
      >
        <ProfileIcon className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>
    </div>
  );
};

export default UserActions;
