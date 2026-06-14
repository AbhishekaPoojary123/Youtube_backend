import { useAuth } from "../../../context/authContext/useAuth";

function Channel() {
    const { user } = useAuth();
    console.log("userchannle:", user);

    return <>channel</>;
}

export default Channel;
