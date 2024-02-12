import { MdLogout } from "react-icons/md";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";

import styles from "./sidebar.module.css";
import { auth, signOut } from "@/app/auth";
import { MENU_ITEMS } from "./menuItems";

const Sidebar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={session.user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{session.user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {MENU_ITEMS.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
