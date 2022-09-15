import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Home.module.css";

const HomePage = () => {
    const { data: session } = useSession();
    return (
        <div className={styles.page}>
            {session ? (
                <div>
                    You are signed in
                    <br />
                    <button onClick={() => signIn()}>Sign out</button>
                </div>
            ) : (
                <div>
                    You are not signed in
                    <br />
                    <button onClick={() => signOut()}>Sign in</button>
                </div>
            )}
        </div>
    );
};

export default HomePage;
